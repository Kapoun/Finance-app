import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import logo from '../assets/logo.png';

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: ""
  });

  async function registerUser(e) {
    e.preventDefault();

    console.log("🚀 Sending:", user);

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      navigate('/');
    } catch (err) {
      console.error("Registration error:", err);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className='register-container'>
      <img src={logo} alt="Finance Tracker Logo" className='logo' />

      <h2>Register Page</h2>

      <form onSubmit={registerUser}>
        <label>Full Name</label>
        <input
          placeholder="Enter your full name"
          type="text"
          name="full_name"
          value={user.full_name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          placeholder="Enter your phone number"
          type="text"
          name="phone_number"
          value={user.phone_number}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          placeholder="Enter your confirm password"
          type="password"
          name="confirm_password"
          value={user.confirm_password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      <label>If you already have an account</label>
      <Link to="/">Login Here</Link>
    </div>
  );
}

export default Register;
