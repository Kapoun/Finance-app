import React from 'react'
import './transactionform.css'


function TransactionForm({
  newTransaction,
  setNewTransaction,
  onSubmit,
  onCancel
}) {

  function handleChange(e) {
    const { name, value } = e.target
    setNewTransaction(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form className="transactions-form" onSubmit={onSubmit}>
      <label>User ID</label>
      <input name="user_id" value={newTransaction.user_id || ''} onChange={handleChange} />

      <label>Account ID</label>
      <input name="account_id" type="number" value={newTransaction.account_id || ''} onChange={handleChange} />

      <label>Category ID</label>
      <input name="category_id" type="number" value={newTransaction.category_id || ''} onChange={handleChange} />

      <label>Type</label>
      <input name="type" value={newTransaction.type} onChange={handleChange} />

      <label>Amount</label>
      <input name="amount" type="number" value={newTransaction.amount} onChange={handleChange} />

      <label>Description</label>
      <input name="description" value={newTransaction.description} onChange={handleChange} />

      <label>Date</label>
      <input name="transaction_date" type="date" value={newTransaction.transaction_date || ''} onChange={handleChange} />

      <button type="submit">Post Transaction</button>
      <button type="button" className="btn-cancel" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default TransactionForm;
