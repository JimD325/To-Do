import React, { useContext, useEffect } from "react";
import { Toggle } from "@cloudscape-design/components";
import { TypeOfThemeContext, LightDarkContext } from '../../context/settings/context'

export type HeaderProps = {
  setTheme: (newTheme: TypeOfThemeContext) => void
}

export const Header = ({ setTheme }: HeaderProps) => {
  const [checked, setChecked] = React.useState(false);
  const theme = useContext(LightDarkContext);

  const toggleHandler = (detail: any) => {
    setChecked(detail.checked);
    setTheme({ theme: theme.theme === 'awsui-dark-mode' ? 'awsui-light-mode' : 'awsui-dark-mode' });
  }

  useEffect(() => {
    if(typeof(theme.theme) === "string")
    localStorage.setItem("colorTheme", theme.theme);
  })

  // auth0 goes in header aligned to right side
  return (
    <div className = {theme.theme ===  "awsui-dark-mode" ? "awsui-dark-mode" : "awsui-light-mode"}>
      <Toggle
      onChange={({ detail }) =>
        toggleHandler(detail)
      }
      checked={checked}
      description={
        <React.Fragment>Color Theme</React.Fragment>
      }
    >
      {theme.theme === 'awsui-dark-mode' ? "🌙" : "☀️"}
    </Toggle>
    </div>
    
  );
}