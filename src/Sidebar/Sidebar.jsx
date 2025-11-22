import React from "react";
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
      <ul>
        {links.map((link) => (
          <li
            key={link}
            className={currentPage === link ? "active" : ""}
            onClick={() => setCurrentPage(link)}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
