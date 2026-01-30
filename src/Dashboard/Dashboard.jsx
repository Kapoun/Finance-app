import React, { useState } from 'react';
import AccountsPage from '../Accounts/Accounts';
import './Dasboard.css';
import Income from '../Income/Income';
import Investment from '../Investment/Investment';
import Expenditure from '../Expenditure/Expenditure';
import Sidebar from '../Sidebar/Sidebar';
import Chart from '../charts/charts';
import Card from "../Card/Card"
import Transactions from '../Transactions/transactions';
import TransactionList from '../TransactionList/TransactionList'
import { useEffect } from 'react';
import { useMemo } from 'react';


const userName = "Kapoun";

function Dashboard() {



  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className='main-dashboard'>
        <h1 className='welcome-message'>Welcome back, {userName}!</h1>
          <div className='main-container'>
            <label className='total-balance'>Total balance</label>
            <label className='balance-amount'>KES 250,000</label>
            <div className='more-details'>
            <button className='add-amount'>+ Detail Received Amount</button>
            <button className='Send-amunt'> - Detail send Amount</button>
            </div>
<hr />
            <div className='all-accounts'>
              <label className='accounts-label'>Your Accounts</label>
              <div className='cards-container'>
                <div className='card-details'>
                  <label>Saving account</label>
                </div>
                <div className='card-details'>
                  <label>Business account </label>
                </div>
                <div className='card-details'>
                  <label>Personal account </label>
                </div>
                </div>
            </div>
          </div>
        </div>

        <div className='more-details-container'>
          <div className='details'> 
            <label>Income</label>
          </div>
          <div className='details'> 
            <label>Expenditure</label>
          </div>
          <div className='details'> 
            <label>Investment</label>
          </div>
          <div className='details'>
            <label>Transactions</label>
             </div>
          </div>
               <div className='new-container'>
                <div className='news'>
                  News
                </div>
               </div>

        </div>
   
  );
}


export default Dashboard;