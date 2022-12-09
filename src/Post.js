import React,{forwardRef} from "react";
import Avatar from '@mui/material/Avatar';
import "./Post.css"
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import InputOption from "./InputOption";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
const Post= forwardRef(({ name, description, message, photoUrl }, ref) => {
    const { user, isAuthenticated} = useAuth0();
  return (
    <div ref={ref} className='post'>
      <div className='post_header'>
        <Avatar src={photoUrl}> </Avatar>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
          <InputOption Icon={ThumbUpOffAltRoundedIcon} title="Like" color="blue"/>
        <InputOption Icon={ChatRoundedIcon} title="Comment" color="gray"/>
          <InputOption Icon={ShareRoundedIcon} title="Share" color="gray"/>
          <InputOption Icon={SendRoundedIcon} title="Send" color="gray"/>
      </div>
    </div>
  )
})

export default Post;
