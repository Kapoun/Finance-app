import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import Router from '../Router/router.jsx';
import Register from '../Register/Register.jsx';
import logo from '../assets/logo.png';


function Login() {
const [username , setUsername] = useState("")
const [password , setPassword] = useState("")

function userdata(e){
  setUsername(e.target.value)
  
}

function passworddata(e){
  setPassword(e.target.value)
  
}

function onSubmit(e){
  e.preventDefault();
}

 
  return (

    <div>
        <div className='login-container'>
          <img src={logo} alt="Finance Tracker Logo" className='logo' />
          <h2>Login Page</h2>
            <p>Welcome back loging to continue where you left</p> 
          <form >
            <label>Username {username}</label>
            <input type="email" placeholder='Enter username' value={username} onChange={userdata} />
            <label>Password {password}</label>
            <input type="password" placeholder='Enter Password' value={password} onChange={passworddata} />

            <button type="submit" onSubmit={onSubmit}>Login</button>
            <label>If you don't have an account</label>
            <Link to="/register">Register Here</Link>
           </form>  
            
        </div>
    </div>
  );
}




export default Login;