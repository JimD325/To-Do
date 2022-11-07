import {createContext} from "react";
import axios from "axios";
export type TypeOfThemeContext = {
  theme: string | null | undefined
}

const startingTheme = () => {
  let theme = localStorage.getItem("colorTheme");
  if (theme){
    return theme
  } else {
    theme = "awsui-dark-mode"
  }
}

export const LightDarkContext = createContext<TypeOfThemeContext>({
  theme: startingTheme()
  
})


