import React, { useState } from "react";
import "./Income.css";
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';


function Income() {
  const [income, setIncome] = useState([]);
  const [newIncome, setNewIncome] = useState({
    description: '',
    amount: 0,
    type: 'income'
  });

  const handleAddincome = () => {
    setIncome([...income, newIncome])
    setNewIncome({ description: '', amount: 0, type: 'income' })
  }

  const handleDeleteincome = (index) => {
    const newTransactions = [...income]
    newTransactions.splice(index, 1)
    setIncome(newTransactions)
  }

  return (
    <div className="income">
      <h1>Income</h1>
      <Sidebar />
      <div className="income-container">
        <input type="text" placeholder="Description" value={newIncome.description} onChange={(e) => setNewIncome({ ...newIncome, description: e.target.value })} />
        <input type="number" placeholder="Amount" value={newIncome.amount} onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })} />
        <select value={newIncome.type} onChange={(e) => setNewIncome({ ...newIncome, type: e.target.value })}>
          <option value="income">Investment</option>
          <option value="income">Salary</option>
          <option value="income">Other</option>

        </select>
        <button onClick={handleAddincome}>Add Income</button>
      </div>
      <ul>
        {income.map((income, index) => (
          <li key={index}>
            {income.description} - {income.amount} - {income.type}
            <button onClick={() => handleDeleteincome(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>




  );
}

export default Income;