import React from 'react'
import img1 from "./Images/LoginImage1.png"
import img2 from "./Images/logobg.jpg"
import "./Login.css"
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated} = useAuth0();
  return (
    <div>
    <div class="section">
        <div class="circle"></div>
        <header>
            <img class="image" src={img2} alt=""/>
            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#">Menu</a></li>
                <li> <a href="#"> What's New</a></li>
                <li> <a href="#">Contact</a></li>
            </ul>
        </header>
        <div class="content">
            <div class="textBox">
                <h2 class="h2">It's not just Social Media App<br/> It's <span class="span"> Motion </span></h2>
                <p class="p">YOU ARE WHAT YOU SHARE!!!<br/>
                    <span class="sp">A valuable tool that facilitates the sharing of ideas, thoughts and information through the building of virtual network and communities.
                    We aim at better Customer Experience, capture their feedback and opinions, and
                    Builds trust between businesses and their clients, helps to bridge gap and bringing people closer.</span></p>
                    {/* <a href="http://localhost:3000/" class="button">Explore</a><br/> */}
                    <div>
          {isAuthenticated && (<div><img className="user_image" src={user.picture} alt={user.name} /><span>{user.name}</span></div>)}
          {isAuthenticated ? <button className='button1' onClick={() => logout({ returnTo:window.location.origin})}>
      Log Out
    </button> : <button className='button1' onClick={() => loginWithRedirect()}>Log In</button>}
        </div>
            </div>
            <div class="ImageBox">
                <img src={img1} class="startbucks" alt=""/>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Login;
