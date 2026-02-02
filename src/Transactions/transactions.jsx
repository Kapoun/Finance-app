import React, { useState } from 'react'
import './transactions.css'
import Sidebar from '../Sidebar/Sidebar'
import TransactionList from '../TransactionList/TransactionList'
import { useEffect } from 'react'
import { useMemo } from 'react'
import TransactionForm from '../Transactionform/transactionform.jsx'

function Transactions() {
    const [transactions, setTransactions] = useState([])
    const [openForm, setOpenForm] = useState(false)
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
            <div>
                <Sidebar />

       <div className="transaction-container">
        <h1>Transactions</h1>

        <button onClick={() => setOpenForm(true)}>
          + Add Transaction
        </button>

        {openForm && (
    <div className="modal-overlay">
    <div className="modal-content">
      <TransactionForm
        newTransaction={newTransaction}
        setNewTransaction={setNewTransaction}
        onSubmit={handlePostAddTransaction}
        onCancel={() => setOpenForm(false)}
      />
    </div>
  </div>
)}


        <p>Balance: {balance}</p>
      </div>

      <div className='trans-container'></div>
            </div>
        
    )
}
export default Transactions;
