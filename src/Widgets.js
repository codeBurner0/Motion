import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecordRounded } from '@mui/icons-material';
function Widgets() {
    const newsArticle=(heading,subtitle) =>(
        <div className='widgets_article'>
            <div className='widgets_articleleft'>
                <FiberManualRecordRounded/>
            </div>
            <div className='widgets_articleright'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Corona Virus","top news - 999 readers")}
      {newsArticle("Wish Birthday","top news - 999 readers")}
      {newsArticle("500 new connections","top news - 999 readers")}
      {newsArticle("Manvi follows you","top news - 999 readers")}
      {newsArticle("#Artificial Intelligence","top news - 999 readers")}
      {newsArticle("#Join Chat","top news - 999 readers")}
      <div>
       
        <form action='http://localhost:4000/'>
        <button className='button'>Join Now</button>
          </form>
      </div>
      
    </div>
  )
}

export default Widgets
