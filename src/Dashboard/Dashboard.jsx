import React from 'react';
import AccountsPage from '../Accounts/Accounts';
import './Dasboard.css';
import Income from '../Income/Income';
import Investment from '../Investment/Investment';
import Expenditure from '../Expenditure/Expenditure';
import Sidebar from '../Sidebar/Sidebar';
import Ohter from '../Other/Other';
import Setting from '../Setting/Setting';
import Chart from '../charts/charts';

const userName = "Kapoun";

function Dashboard(){
return (

<div className="dashboard">

  {/* Sidebar stays on the left */}
  <Sidebar />

  {/* Right side content */}
  <div className="main-content">

    <div className="dash-header">
      Welcome back, {userName}!
    </div>

    <div className="cards-grid">

      <AccountsPage
        icon="🏦"
        title="Account Balance" 
        value="$150,000"
      />

      <Expenditure 
        icon="💸"
        title="Monthly Expenditure" 
        value="$5,000"
      />

      <Investment
        icon="📈"
        title="Total Investments" 
        value="$75,000"
      />

      <Income 
        icon="💰"
        title="Monthly Income" 
        value="$10,000"
      />

      <Ohter />

   
    <Chart />
     
    </div>

  </div>

</div>

)};

export default Dashboard;