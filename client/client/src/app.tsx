import './app.css';
import "@cloudscape-design/global-styles/index.css"
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AddForm } from './components/todo/form';
import { List } from './components/todo/list';


const App: React.FC = () => {
  return (
    <>
    <Header/>
    <body id = "body">
      <AddForm/>
      <List/>
    </body>
    
    <Footer/>
    </>

  )
}

export default App;