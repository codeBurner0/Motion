import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import img1 from './Images/MainLogo.png'
import img2 from './Images/face.png'
import HeaderOption from './HeaderOption';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import { BusinessCenterRounded, SupervisorAccountRounded } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import { Button } from '@mui/material';
function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src={img1} alt='logo'/>
            <div className='marque'>
              <marquee behavior="alternate" direction="left">
              <span class="multicolortext">Motion! Place where the idea grows!</span></marquee>
            </div>
            <div className='header_search'>
                <SearchIcon />
                <input type='text' placeholder='Search'/>
            </div>
        </div>
        <div className='header_right'>
            <HeaderOption Icon={HouseRoundedIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountRounded} title='My Network' />
            <HeaderOption Icon={BusinessCenterRounded} title='Jobs' />
            <HeaderOption Icon={MessageIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar={img2} title='Ankit Anand' />
        </div>
        <div>
          <form action='http://localhost:4000/'>
            <Button type='submit'>Chat</Button>
          </form>
        </div>
    </div>
  )
}
export default Header