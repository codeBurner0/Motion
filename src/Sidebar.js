import React from 'react'
import Avatar from '@mui/material/Avatar';
import bakgroundImage from './Images/background.png'
import "./Sidebar.css"
function Sidebar() {
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
          <Avatar className='sidebar_avatar'/>
          <h2>Ankit Anand</h2>
          <h4>codeburner@gmail.com</h4>
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
