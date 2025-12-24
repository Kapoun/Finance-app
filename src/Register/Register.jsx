import React from 'react';
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import Router from '../Router/router.jsx';
import Login from '../Login/Login.jsx';
import './Register.css';
import logo from '../assets/logo.png';

function Register() {
 const links = [
    "Dashboard",
    "Accounts",
    "Income",
    "Expenditure",
    "Investments",
    "Settings",
  ];
}

function registerUser(e){

  const [user , SetUser] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });
}

  function handleChange(e){
    const {name , value} = e.target;
    SetUser(prevState => ({
      ...prevState,
      [name]: value
    }));

  return (
    <div className='register-container'>

      <img src={logo} alt="Finance Tracker Logo" className='logo' />

      <h2>Register Page</h2>

      <label>Full Name {user.fullName}</label>
      <input type="name" value={user.fullName}  placeholder='Enter full name' onChange={handleChange} />

      <label>Email {user.email}</label>
      <input type="email" value={user.email} placeholder='Enter email' onChange={handleChange}/>
           
      <label>Phone nummber {user.phoneNumber}</label>
      <input type="number" value={user.phoneNumber} placeholder='Enter phone number' onChange={handleChange} />

      <label>Password {user.password}</label>
      <input type="password" value={user.password} placeholder='Enter Password' onChange={handleChange}/>

      <label>confirm Password {user.confirmPassword}</label>
      <input type="password" value={user.confirmPassword} placeholder='Enter Password' onChange={handleChange} />

      <button>Register</button>

      <label>If you already have an account</label>
      <Link to="/">Login Here</Link>

    </div>
  );
}

export default Register;
