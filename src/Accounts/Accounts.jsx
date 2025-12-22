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
      color="#7E7C70"
      className="big-card"
       />

       {data.map((account) => (
            <Card
                key={account.id}
                title={account.name}
                amount={`KES ${account.balance.toLocaleString()}`}
                icon={account.icon}
                color="#7E7C70"
            />
        ))}
  
</div>
    <div className="accounts-section">

     <div className="transaction-section">
        <h2>Recent Transactions</h2>
     {transactionData.map((transaction) => (
        <div key={transaction.id} className="transaction-card"> 
            <h3>{transaction.description}</h3>
            <p>Amount: KES {transaction.amount.toLocaleString()}</p>
            <p>Date: {transaction.date}</p>
    
        </div>
     ))}


    </div>    
        </div>
   </div>    
)}

const data = [
    { id: 1, name: 'Savings Account', balance: 15000, icon: '🏦' },
    { id: 2, name: 'Checking Account', balance: 8000, icon: '🏧' },
    { id: 3, name: 'Credit Card', balance: -2000, icon: '💳' },
];


const transactionData = [
    { id: 1, description: 'Grocery Shopping', amount: -1500, date: '2024-06-01' },
    { id: 2, description: 'Salary Deposit', amount: 50000, date: '2024-06-05' },
    { id: 3, description: 'Electricity Bill', amount: -3000, date: '2024-06-10' },
    { id: 4, description: 'Dining Out', amount: -1200, date: '2024-06-12' },
    { id: 5, description: 'Gym Membership', amount: -800, date: '2024-06-15' },
    { id: 6, description: 'Freelance Project', amount: 10000, date: '2024-06-18' },
    { id: 7, description: 'Internet Bill', amount: -2500, date: '2024-06-20' },
    { id: 8, description: 'Movie Night', amount: -600, date: '2024-06-22' },
];



export default AccountsPage;