import './app.css';
import React, { useState } from 'react';
import "@cloudscape-design/global-styles/index.css"
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TypeOfThemeContext, LightDarkContext } from './context/settings/context'
import { ToDo } from './components/todo/todo';
import ContentLayout from "@cloudscape-design/components/content-layout"



// form data comes from add form, app then passes 
export const App: React.FC = () => {
  let initialTheme;
  localStorage.getItem("colorTheme") ? initialTheme = localStorage.getItem("colorTheme") : initialTheme = "awsui-dark-mode"


  const [theme, setTheme] = useState<TypeOfThemeContext>({ theme: initialTheme })
  return (
    <>
      <LightDarkContext.Provider value={theme}>
        <ContentLayout header= {<Header setTheme = {setTheme}/>} className = {theme.theme ===  "awsui-dark-mode" ? "awsui-dark-mode" : "awsui-light-mode"}>
          
        <ToDo />
        <Footer />
        </ContentLayout>
        
      </LightDarkContext.Provider>
    </>
  )
}

export default App;