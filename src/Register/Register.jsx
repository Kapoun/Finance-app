import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Router from '../Router/router.jsx';
import Login from '../Login/Login.jsx';
import './Register.css';
import logo from '../assets/logo.png';

function Register() {

  async function registerUser() {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  function handleChange(e) {
    const { name, value } = e.target;
    SetUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className='register-container'>

      <img src={logo} alt="Finance Tracker Logo" className='logo' />

      <h2>Register Page</h2>
      <form onSubmit={registerUser}>
        <label>Full Name</label>
        <input type="text" placeholder='Enter full name' />

        <label>Email</label>
        <input type="email" placeholder='Enter email' />

        <label>Phone Number</label>
        <input type="number" placeholder='Enter phone number' />

        <label>Password</label>
        <input type="password" placeholder='Enter password' />

        <label>Confirm Password</label>
        <input type="password" placeholder='Enter confirm password' />
      </form>

      <button>Register</button>

      <label>If you already have an account</label>
      <Link to="/">Login Here</Link>

    </div>
  );
}

export default Register;
