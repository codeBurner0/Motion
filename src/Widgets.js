import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecordRounded } from '@mui/icons-material';
function Widgets() {
    const newsArticle=(heading,subtitle,link) =>(
        <div className='widgets_article'>
            <div className='widgets_articleleft'>
                <FiberManualRecordRounded/>
            </div>
            <div className='widgets_articleright'>
                <h4>{heading}</h4>
                <a href={link} className="a"><p>{subtitle}</p></a>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>Motion News</h2>
        <InfoIcon />
      </div>
      {newsArticle("#Artificial Intelligence","Steerable soft robots could enhance medical applications","https://techxplore.com/news/2022-11-steerable-soft-robots-medical-applications.html")}
      {newsArticle("#Digital Image Processing","Building a 900-pixel imaging sensor using an atomically thin material","https://techxplore.com/news/2022-11-pixel-imaging-sensor-atomically-thin.html")}
      {newsArticle("#Reversing battery power","Reversing battery power from electric vehicles to the grid could open a fast lane to a net-zero future","https://techxplore.com/news/2022-11-reversing-battery-power-electric-vehicles.html")}
      {newsArticle("#Online gaming enhances","Online gaming enhances career prospects and develops soft skills, finds new study","https://techxplore.com/news/2022-11-online-gaming-career-prospects-soft.html")}
      {newsArticle("#Robotics","Making 'transport' robots smarter","https://techxplore.com/news/2022-11-robots-smarter.html")}
      <div>      
        <form action='http://localhost:4000/'>
        <button className='button'>Join Now</button>
          </form>
      </div>
    </div>
  )
}
export default Widgets
