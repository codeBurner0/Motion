import React, {useEffect, useState} from 'react'
import "./Feed.css"
import Post from "./Post"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption"
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './FireBase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { useAuth0 } from "@auth0/auth0-react";

export default function Feed() {
  const [input,setInput] = useState([]);
  const [posts,setPosts] = useState([]);
  const { user, isAuthenticated} = useAuth0();
  useEffect(() =>{
    db.collection("post").orderBy('timestamp','desc').onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc =>(
        {id: doc.id, data:doc.data()}
      )))
    ))
  },[]);

  const sendPost= (e) => {
    e.preventDefault();
    db.collection('post').add({
      name:user.name,
      description:'this is text',
      message:input,
      photoUrl:user.picture,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
            <CreateIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type='Submit'>Send</button>
            </form>
        </div>
        <div className='feed_inputOption'>
           <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
           <InputOption Icon={SubscriptionsIcon} title="Video" color="orange"/>
           <InputOption Icon={EventNoteIcon} title="Event" color="gray"/>
           <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="green"/>
        </div>
      </div>
      <FlipMove>
      {posts.map(({id, data:{name, description, message,photoUrl}}) =>(
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
      <Post name='Ankit Anand' description='This is a test' message='Wow! This worked'/>

      
    </div>
  )
}
