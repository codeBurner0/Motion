import React from 'react'
import Avatar from '@mui/material/Avatar';
import bakgroundImage from './Images/background.png'
import "./Sidebar.css"
import { useAuth0 } from "@auth0/auth0-react";
function Sidebar() {
  const { user, isAuthenticated} = useAuth0();
  const recentItem = (topic) => (
      <div className='sidebar_recentItem'>
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
      </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
          <img src={bakgroundImage} alt=''/>
          {isAuthenticated && <div>
          <img className='AuthenticatedUser' src={user.picture} alt={user.name} /></div>}
          
          <h2>Me</h2>
          {/* <h4>codeburner@gmail.com</h4> */}
      {isAuthenticated && <div>
    <h4>{user.name}</h4></div>}
      
      </div>
      <div className='sidebar_stats'>
          <div className='sidebar_stat'>
              <p>Who viewed you</p>
              <p className='sidebar_statNumber'>2,543</p>
          </div>
          <div className='sidebar_stat'>
              <p>views on post</p>
              <p className='sidebar_statNumber'>3,147</p>
          </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("SoftwareEngineering")}
        {recentItem("Design")}
        {recentItem("Developer")}
      </div>
    </div>
  )
}
export default Sidebar
