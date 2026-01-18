import React, { useState } from 'react'
import './transactions.css'
import Sidebar from '../Sidebar/Sidebar'
import TransactionList from '../TransactionList/TransactionList'
import { useEffect } from 'react'
import { useMemo } from 'react'

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
                user_id,
                account_id,
                category_id,
                type,
                amount,
                description,
                transaction_date

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
        <div className="transactions">
            <h2>Transactions</h2>
            <div className="transactions-form">
                <label htmlFor="user_id">User ID:</label>
                <input id="user_id" type="text" placeholder="user" value={newTransaction.user_id} onChange={(e) => setNewTransaction({ ...newTransaction, user_id: e.target.value })} />
                <label htmlFor="account_id">Account ID:</label>
                <input id="account_id" type="number" placeholder="Amount" value={newTransaction.account_id} onChange={(e) => setNewTransaction({ ...newTransaction, account_id: e.target.value })} />
                <label htmlFor="category_id">Category ID:</label>
                <input id="category_id" type="number" placeholder="Amount" value={newTransaction.category_id} onChange={(e) => setNewTransaction({ ...newTransaction, category_id: e.target.value })} />
                <label htmlFor="type">Type:</label>
                <input id="type" type="text" placeholder="type" value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })} />
                <label htmlFor="amount">Amount:</label>
                <input id="amount" type="number" placeholder="Amount" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
                <label htmlFor="description">Description:</label>
                <input id="description" type="text" placeholder="description" value={newTransaction.description} onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })} />
                <label htmlFor="transaction_date">Transaction Date:</label>
                <input id="transaction_date" type="date" placeholder="transaction_date" value={newTransaction.transaction_date} onChange={(e) => setNewTransaction({ ...newTransaction, transaction_date: e.target.value })} />
                <button onClick={handlePostAddTransaction}>Post Transaction</button>

                <TransactionList
                    transactions={transactions}
                    onDelete={handleDeleteTransaction}
                />

            </div>

            <div>
                <h2>Summary</h2>

                <p>
                    Total Income: {
                        transactions
                            .filter(t => t.type === 'income')
                            .reduce((acc, t) => acc + Number(t.amount), 0)
                    }
                </p>

                <p>
                    Total Expense: {
                        transactions
                            .filter(t => t.type === 'expense')
                            .reduce((acc, t) => acc + Number(t.amount), 0)
                    }
                </p>

                <p>Balance: {balance}</p>

            </div>

            <div>
                <Sidebar />
            </div>
        </div>
    )
}


export default Transactions;
