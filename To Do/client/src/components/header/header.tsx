import React, { useContext, useEffect } from "react";
import { Toggle } from "@cloudscape-design/components";
import { SettingsContext } from '../../context/settings/context'
import LoginButton from '../../context/auth/login'
import LogoutButton from '../../context/auth/logout'
import { useAuth0 } from "@auth0/auth0-react";
import './header.css';
export type HeaderProps = {
  setTheme: (newTheme: any) => void
}

export const Header = ({ setTheme }: HeaderProps) => {
  const [checked, setChecked] = React.useState(false);
  const theme = useContext(SettingsContext);
  const {isAuthenticated, user} = useAuth0(); 

  const toggleHandler = (detail: any) => {
    setChecked(detail.checked);
    setTheme({ theme: theme.theme === 'awsui-dark-mode' ? 'awsui-light-mode' : 'awsui-dark-mode' });
    console.log("header theme", theme.theme);
  }

  useEffect(() => {
    if(typeof(theme.theme) === "string")
    localStorage.setItem("colorTheme", theme.theme);
  })

  // auth0 goes in header aligned to right side
  return (
    <div id = "headerContainer">
      <div className = {theme.theme ===  "awsui-dark-mode" ? "awsui-dark-mode" : "awsui-light-mode"}>
      <Toggle id = "headerFeatures"
      onChange={({ detail }) =>
        toggleHandler(detail)
      }
      checked={checked}
      
    >
      {theme.theme === 'awsui-dark-mode' ? "🌙" : "☀️"}
      {isAuthenticated? <LogoutButton/> : <LoginButton/>}
    </Toggle>
    <span className = "logButtons">
      
      
      
    </span>
    </div>
    </div>
    
    
  );
}