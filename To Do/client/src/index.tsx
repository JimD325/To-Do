import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import "@cloudscape-design/global-styles/index.css";
import { Auth0Provider, withAuth0 } from "@auth0/auth0-react";
import { SettingsProvider} from './context/settings/context'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(

  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </Auth0Provider>
  </React.StrictMode>
)

