import React from 'react';
import Accounts from "./Accounts";
import './Accounts.css';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';

function AccountsPage({}) {
    return (
        <div >
             <h1>Account</h1>
             <Sidebar />
          
    <div className="card-container">
       <Card 
       title="Total Account Balance"
      amount="KES 25,000"
      icon="💸"
      color="#e9901dff"
      className="big-card"
       />

    </div>    
        </div>
       
)}


export default AccountsPage;