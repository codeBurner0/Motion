import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Login from "./Login";
import { Auth0Provider } from "@auth0/auth0-react";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain="dev-h1d4rxroy6bknice.us.auth0.com"
    clientId="txB0Fm2wu8CD0O64ntHU6AyVThP2AoVH"
    redirectUri={window.location.origin}>
      <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
