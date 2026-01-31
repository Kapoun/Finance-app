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
    "Transactions",
    "Reports",
    "Settings",

  ];

  return (
    <div className="sidebar">
      <h2>Finance Tracker</h2>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/Accounts">Accounts</Link>
      <Link to="/investments">investments</Link>
      <Link to="/income">Income</Link>
      <Link to="/expenditure">Expense</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/Reports">Reports</Link>
      <Link to="/settings">Settings</Link>

    </div>
  );
}

export default Sidebar;
