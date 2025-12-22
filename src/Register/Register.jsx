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


  return (
    <div className='register-container'>

      <img src={logo} alt="Finance Tracker Logo" className='logo' />

      <h2>Register Page</h2>

      <label>Full Name</label>
      <input type="name" placeholder='Enter full name' />

      <label>Email</label>
      <input type="email" placeholder='Enter email' />
           
      <label>Phone nummber</label>
      <input type="number" placeholder='Enter phone number' />

      <label>Password</label>
      <input type="password" placeholder='Enter Password' />

      <label>confirm Password</label>
      <input type="password" placeholder='Enter Password' />

      <button>Register</button>

      <label>If you already have an account</label>
      <Link to="/">Login Here</Link>

    </div>
  );
}

export default Register;
