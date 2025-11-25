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
import Card from "../Card/Card"

const userName = "Kapoun";

function Dashboard(){
return ( 

<div className="dashboard">
  <Sidebar />

  <div className="main-content">

    <div className="dash-header">
      Welcome back, {userName}!
    </div>

    <div className="card-container">
      
      <Card 
        title="Total Income" 
        amount="KES 000" 
        icon="💰" 
        color="#4FBC2B"
      />

      <Card 
        title="Investments" 
        amount="KES 000" 
        icon="📈" 
        color="#5F52D8"
      />

      <Card 
        title="Expenses" 
        amount="KES 000" 
        icon="💸" 
        color="#DBD523"
      />
    
    <Card 
        title="Balance" 
        amount="KES 000" 
        icon="💸" 
        color="#C085DB"
      />

    </div>

  <Chart />
  </div>

</div>

)};

export default Dashboard;