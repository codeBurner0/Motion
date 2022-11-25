import React from 'react'
import "./HeaderOption.css";
import Avatar from '@mui/material/Avatar';
function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon'/>}
      {avatar && <Avatar className='headerOption'  src={avatar} sx={{ width: 24, height: 24 }}/>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
