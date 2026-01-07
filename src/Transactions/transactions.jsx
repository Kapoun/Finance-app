import React, { useState } from 'react'
import './transactions.css'
import Sidebar from '../Sidebar/Sidebar'


function Transactions() {
    const [transactions, setTransactions] = useState([])
    const [newTransaction, setNewTransaction] = useState({
        description: '',
        amount: 0,
        type: 'income'
    })

    const handleAddTransaction = () => {
        setTransactions([...transactions, newTransaction])
        setNewTransaction({ description: '', amount: 0, type: 'income' })
    }

    const handleDeleteTransaction = (index) => {
        const newTransactions = [...transactions]
        newTransactions.splice(index, 1)
        setTransactions(newTransactions)
    }

    return (
        <div className="transactions">
            <h2>Transactions</h2>
            <div>
                <input type="text" placeholder="Description" value={newTransaction.description} onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })} />
                <input type="number" placeholder="Amount" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
                <select value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button onClick={handleAddTransaction}>Add Transaction</button>
            </div>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.description} - {transaction.amount} - {transaction.type}
                        <button onClick={() => handleDeleteTransaction(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Summary</h2>
                <p>Total Income: {transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0)}</p>
                <p>Total Expense: {transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0)}</p>
                <p>Balance: {transactions.reduce((acc, t) => acc + (t.type === 'income' ? t.amount : -t.amount), 0)}</p>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}


export default Transactions;