import React from 'react'
import "./HeaderOption.css";
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";
function HeaderOption({avatar, Icon, title}) {
  // const { user, isAuthenticated} = useAuth0();
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon'/>}
      {avatar && <Avatar className='headerOption'  src={avatar} sx={{ width: 24, height: 24 }}/>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
    
  )
}

export default HeaderOption
