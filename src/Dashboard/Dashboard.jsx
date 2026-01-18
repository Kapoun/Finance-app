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

function Dashboard({ transactions = [] }) {

  const balance = useMemo(() => {
    return transactions.reduce(
      (acc, t) =>
        acc + (t.type === 'income'
          ? Number(t.amount)
          : -Number(t.amount)),
      0
    );
  }, [transactions]);


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
            amount={balance}
            icon="💰"
            color="#4FBC2B"
          />

          <Card
            title="Investments"
            amount="KES 000"
            icon="📈"
            color="#4FBC2B"
          />

          <Card
            title="Expenses"
            amount="KES 000"
            icon="💸"
            color="#4FBC2B"
          />

          <Card
            title="Balance"
            amount="KES 000"
            icon="💸"
            color="#4FBC2B"
          />
        </div>

        <Chart />

        <h2>Transactions</h2>

        <Transactions
          balance={balance}
        />

      </div>

    </div>

  )
};

export default Dashboard;