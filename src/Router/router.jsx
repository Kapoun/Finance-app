import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import Dashboard from "../Dashboard/Dashboard";
import Accounts from "../Accounts/Accounts";
import Income from "../Income/Income";
import Expenditure from "../Expenditure/Expenditure";
import Investments from "../Investment/Investment";
import Settings from "../Setting/Setting";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenditure" element={<Expenditure />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
