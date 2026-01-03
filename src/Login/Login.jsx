import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';


function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    setLoading(true)
    setError("")

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed due to an unknown error.');
      }

      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="login-container">
        <img src={logo} alt="Finance Tracker Logo" className='logo' />
        <h2>Login Page</h2>
        <p>Welcome back loging to continue where you left</p>

        <form className="login-form" onSubmit={handlesubmit}>
          <label>Username</label>
          <input id="username" type="text" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Password</label>
          <input id="password" type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" >Login</button>
          <label>If you don't have an account</label>
          <Link to="/register">Register Here</Link>
        </form>
      </div>
    </div>
  );
}




export default Login;