import './app.css';
import React, { useState } from 'react';
import "@cloudscape-design/global-styles/index.css"
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { SettingsContext } from './context/settings/context'
import { ToDo } from './components/todo/todo';
import ContentLayout from "@cloudscape-design/components/content-layout"
import { useAuth0 } from "@auth0/auth0-react";
import { Welcome } from './components/AboutUs/Welcome'

// form data comes from add form, app then passes 
export const App: React.FC = () => {
  let initialTheme;
  localStorage.getItem("colorTheme") ? initialTheme = localStorage.getItem("colorTheme") : initialTheme = "awsui-dark-mode"
  const [theme, setTheme] = useState<any>({ theme: initialTheme })
  const {isAuthenticated, user} = useAuth0();
  console.log("isAuthenticated on App", isAuthenticated);
  console.log("user on app", user);



  return (
    <>
      <SettingsContext.Provider value={theme}>
        <ContentLayout header= {<Header setTheme = {setTheme}/>} className = {theme.theme ===  "awsui-dark-mode" ? "awsui-dark-mode" : "awsui-light-mode"}>
          { isAuthenticated ? <ToDo /> : <Welcome/>}
        <Footer />
        </ContentLayout>
      </SettingsContext.Provider>
    </>
  )
}

export default App;