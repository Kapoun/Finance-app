import React from "react";


function TransactionList({ transactions = [], onDelete }) {
    return (
        <ul>
            {transactions.map((transaction, index) => (
                <li key={index}>
                    {transaction.description} - {transaction.amount} - {transaction.type}
                    {onDelete && (
                        <button onClick={() => onDelete(transaction.id)}>Delete</button>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TransactionList;
