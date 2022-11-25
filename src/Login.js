import React, { useState } from 'react'
import {auth} from "react";
import './Login.css'
import {login} from "./features/userSlice";
import LoginImage from './Images/login.png'
import { useDispatch } from 'react-redux';
function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[profilePic,setProfilePic]=useState("");
    const dispatch =useDispatch();
const loginToApp =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(
      (userAuth) =>{
        dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.uid,
        photoUrl:userAuth.user.photoURL,
        })
        );
      }
    )
};
const register = () => {
  if(!name){
    return alert("Please enter a full name!");
  }

  auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
    userAuth.user.updateProfile(
      {displayName:name,
      photoURL:profilePic,}
    )
    .then(()=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:name,
        photoUrl:profilePic
      }));
    })
  }).catch((error) => alert(error));
};

  return (
    <div className='login'>
      <img src={LoginImage}/>
      <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name {required if registering}" />
        <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (Optional)" />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Email" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder="Password" />
        <button type="submit" onClick={loginToApp} >Sign In</button>
      </form>

      <p>Not a member?
        <span className='login_register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
