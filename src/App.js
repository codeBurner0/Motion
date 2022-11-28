import React from 'react';
import './App.css';
import Header from './Header';
import Widgets from './Widgets';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Auth0Provider } from "@auth0/auth0-react";
import { app } from 'firebase/app';
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
        <Widgets />
        
      </div>
          {/* )}  */}
    </div>
  </Auth0Provider>
    
  );
}
export default App;
