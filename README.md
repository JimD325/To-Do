# To-Do

## Development Walkthrough/Review

### Allow for User to choose between light and dark themes
<br/> 

1. Implemented a toggle from [Amazons Cloudscape Design System](https://cloudscape.design/) in the header component. Will return to this in step 4.  
2. Created a settings folder which created a type for the theme context which would use the built in awsui darkmode/lightmode for a theme, and a context itself. Initial state in context is darkmode. 
3. Import theme context and its type to App.
    - In app, used state to generate a theme and a setTheme, once again setting the initial state of the theme at the app level to be dark-mode.
    - in the context provider which wraps all the children components, set the value to ```{theme}``` so that all components have access to the current theme.
    - Passed down the setTheme function as props to the header component. 
4. In header component:
    - Import theme context and its type
    - created a new type for the props of header, with a method of setTheme, which takes a newTheme of typeOfThemeContext as an arguement and returns void. 
    - passed ```{setTheme}:HeaderProps``` as arguement into the functional Header component
    - in the toggle component mentioned previously, replaced on change being ```setChecked``` to toggleHandler
    - toggleHandler now sets the position of the toggle button, as well invokes setTheme. So as the toggle button is clicked, the colorTheme can be changed. 
5. Follow-up 
    - Toggle button will conditionally render either a sun or moon emoji, depending on whether the theme is set to light or dark. 
    - class name for all components which can have their color theme changed are set conditionally be either ```awsui-dark-mode``` or ```awsui-light-mode```
<br/> 

### Implement Local Storage for Theme Settings
1. In context.tsx
    - created a function called starting theme. Will return value for theme as a string if there is something in local storage, and return dark mode as a string if there is nothing
    - changed type of theme context to be either a string or null or undefined.
    - There was likely a better way here, as I let the type be more wide in its variety than I maybe could have, as it can now be string or null or undefined. This was largely done to make TypeScript happy. 
2. on header.tsx
    - implemented useEffect to check if theme.theme is a string, if so, set the value of colorTheme  in local storage to theme.theme. 
    - initially had it in toggleHandler, but removed it, as the localStorage which was being saved to was being added to one click behind. 
3. created a new variable called initial theme, then input that in the initial state. 

### MERN refresher
- While perusing some information on mongo to refresh my memory, I came across a [todo list](https://www.positronx.io/react-mern-stack-crud-app-tutorial/) when setting up a a MERN stack which uses CRUD.
- While I had seen walk throughs for setting up the individual pieces of the stack, this was the first time I had seen a from start to finish walk through. 

### Express Review
- Created an express.Router class in the routes folder
- can create a router as a module, load a middleware function into it, defined routes, and mount the router module on a math in the main app. 
- [Express Routing](https://expressjs.com/en/guide/routing.html)

### DB CRUD functionality
1. went to Mongo website and created a database there, getting the connection string and saving it in .env
2. created a schema for the task documents to be stored. Went back to card type on front end and removed the id property to let mongo take care of it. 
3. Created a router file to hold all the routes / handlers for CRUD on tasks. 
4. Tested using thunderClient. 

### Axios Setup
- Initial issues with getting client to initially call to server for information from the database.
- the fix was simple, passing an empty array into the 2 arguement for useEffect makes useEffect hook ONCE on mount, and that is it. 
- Issues with getting the state to update properly with each user change to the database. This was temporarily handled by manually refreshing the page.
- Fix required putting all CRUD functions in the parent component todo.tsx, then passing them down into list, addForm, and modal. The passing of the state back up from the children caused the page to re-render. 

### Auth0 Implementation
- End goal is Auth0 verification, as well as RBAC so that Admin has total access and regular users only have access to the tasks which they created. 
- Step 1 is configuring Auth0 online on their dashboard. 
- Login/Logout buttons will be displayed in the header. 
- remember to include url for allowed origins (CORS)
- issues with type for process.env variables used on domain and client for the auth0 context provider. Went into module for auth0-provider and changed type for domain and clientID to be string | undefined from string. 
- Auth0 fully implemented with conditional rendering. 

### App In Review
- Would not reccommend using Cloudscape. Some of the features are pretty nice, but there is so much going on in the background that I can easily say I spent more time decoding what was going on with cloudscape than any other part of this application. 

### Implement Pagination (in Progress)
- Possible Methods
    - [Collection-Hooks](https://cloudscape.design/get-started/dev-guides/collection-hooks/) can be used to handle filetering, sorting, or pagination operations on the client side. 
    -  