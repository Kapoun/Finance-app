import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import logo from '../assets/logo.png';


function Login() {
const [username , setUsername] = useState("")
const [password , setPassword] = useState("")
const [error , setError] = useState("")
const [loading , setLoading] = useState(false)
const [data , setData] = useState([])


// the function handles username input
function userdata(e){
  setUsername(e.target.value)
  
}

// the function handles password input
function passworddata(e){
  setPassword(e.target.value)
  
}

// the function handles the form submission

function onSubmit(e){
  e.preventDefault();
  console.log("Username:", username);
  console.log("Password:", password);
}

  return (


    <div>
        <div className='login-container'>
          <img src={logo} alt="Finance Tracker Logo" className='logo' />
          <h2>Login Page</h2>
            <p>Welcome back loging to continue where you left</p> 

      <form className='login-form' onSubmit={onSubmit}>
            <label>Username {username}</label>
            <input id='email' type="email" placeholder='Enter username' value={username} onChange={userdata} />
            <label>Password {password}</label>
            <input id='password'  type="password" placeholder='Enter Password' value={password} onChange={passworddata} />

            <button type="submit" onSubmit={onSubmit}>Login</button>
            <label>If you don't have an account</label>
            <Link to="/register">Register Here</Link>
           </form>  
        </div>
    </div>
  );
}




export default Login;