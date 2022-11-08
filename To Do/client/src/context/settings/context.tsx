import {createContext, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
// export type TypeOfSettingsContext = {
//   theme: string | null | undefined
// }


const startingTheme = () => {
  let theme = localStorage.getItem("colorTheme");
  if (theme){
    return theme
  } else {
    theme = "awsui-dark-mode"
  }
}


export const SettingsContext = createContext<any>({
  theme: startingTheme()
})

export const SettingsProvider = (props:any) => {
  const {isAuthenticated} = useAuth0();
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login)
  }
  
  return (
    <div className = "SettingsProvider">
      <SettingsContext.Provider
      value = {{login, toggleLogin}}
      >
        {props.children}
      </SettingsContext.Provider>
      
    </div>
  )
}




