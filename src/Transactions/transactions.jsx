import React, { useState } from 'react'
import './transactions.css'
import Sidebar from '../Sidebar/Sidebar'
import TransactionList from '../TransactionList/TransactionList'
import { useEffect } from 'react'

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

    useEffect(() => {
        fetch("http://localhost:5000/api/transactions")
            .then(res => res.json())
            .then(data => setTransactions(data));
    }, []);



    async function handlePostAddTransaction(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTransaction),
            });

            const savedTransaction = await response.json();

            // to avoid realod of the page 
            setTransactions(prev => [...prev, savedTransaction]);

            setNewTransaction({
                description: "",
                amount: 0,
                type: "income",
            });

        } catch (error) {
            console.error("Error adding transaction:", error);
        }
    }


    function handleChange(e) {
        const { name, value } = e.target;
        setNewTransaction(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleDeleteTransaction(id) {
        try {
            await fetch(`http://localhost:5000/transactions/${id}`, {
                method: 'DELETE',
            });

            // ✨ remove from UI instantly
            setTransactions(prev =>
                prev.filter(transaction => transaction.id !== id)
            );

        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    }


    return (
        <div className="transactions">
            <h2>Transactions</h2>
            <div>
                <input id="description" type="text" placeholder="Description" value={newTransaction.description} onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })} />
                <input id="amount" type="number" placeholder="Amount" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
                <select id="type" value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button onClick={handlePostAddTransaction}>Post Transaction</button>

                <TransactionList
                    transactions={transactions}
                    onDelete={handleDeleteTransaction}
                />

            </div>

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