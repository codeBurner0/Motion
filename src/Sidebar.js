import React from 'react'
import Avatar from '@mui/material/Avatar';
import bakgroundImage from './Images/background.png'
import "./Sidebar.css"
import { useAuth0 } from "@auth0/auth0-react";
function Sidebar() {
  const { user, isAuthenticated} = useAuth0();
  const recentItem = (topic,link) => (
      <div className='sidebar_recentItem'>
        <span className='sidebar_hash'>#</span>
        <a href={link}><p>{topic}</p> </a>
      </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
          <img src={bakgroundImage} alt=''/>
          {isAuthenticated && <div>
          <img className='AuthenticatedUser' src={user.picture} alt={user.name} /></div>}
          
          <h2>Me</h2>
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
        <p>Popular Technologies</p>
        {recentItem("ReactJs","https://reactjs.org/docs/getting-started.html")}
        {recentItem("Flutter","https://docs.flutter.dev/")}
        {recentItem("Machine Learning","https://learn.microsoft.com/en-us/azure/machine-learning/")}
        {recentItem("Artificial Intelligence","https://learn.microsoft.com/en-us/azure/architecture/data-guide/big-data/ai-overview")}
        {recentItem("Google Cloud","https://cloud.google.com/free?utm_source=bing&utm_medium=cpc&utm_campaign=japac-IN-all-en-dr-bkws-all-all-trial-e-dr-1009882&utm_content=text-ad-none-none-DEV_c-CRE_-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP%20~%20General_%20Core%20Brand-KWID_43700071941776989-kwd-74560901267289%3Aloc-90-userloc_163518&utm_term=KW_google%20cloud-ST_google%20cloud&gclid=87329728629d1991211ef4af6158719c&gclsrc=3p.ds")}
      </div>
    </div>
  )
}
export default Sidebar
