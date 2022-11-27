import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar"
import Feed from "./Feed";
import Login from "./Login"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
const user = useSelector(selectUser)

  return (
    <Auth0Provider
    domain="dev-h1d4rxroy6bknice.us.auth0.com"
    clientId="txB0Fm2wu8CD0O64ntHU6AyVThP2AoVH"
    redirectUri={window.location.origin}
  >
    <div className="app">
      <Header />
      {/* {!user ?(<Login /> ):( */}
      <div className='app_body'>
        <Sidebar />
        <Feed />
      </div>
          {/* )}  */}
    </div>
  </Auth0Provider>
    
  );
}

export default App;
