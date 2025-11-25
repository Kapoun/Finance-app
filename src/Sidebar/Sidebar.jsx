import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar({ currentPage, setCurrentPage }) {
  const links = [
    "Dashboard",
    "Accounts",
    "Income",
    "Expenditure",
    "Investments",
    "Settings",
  ];

  return (
    <div className="sidebar">
      <h2>Finance Tracker</h2>
      <Link to="/">Dashboard</Link> 
      <Link to="/investments">investments</Link> 
      <Link to="/income">Income</Link> 
      <Link to="/expenditure">Expenditure</Link>
      <Link to="/Accounts">Accounts</Link>
      <Link to="/settings">settings</Link> 
    </div>
  );
}

export default Sidebar;
