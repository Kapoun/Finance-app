import React from 'react';
import './Accounts.css';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import { useState } from 'react';


function AccountsPage({ }) {
    const [account, setAccount] = useState([]);
    const [formOpen, setFormOpen] = useState(false);
    const [accountName, setAccountName] = useState(''); 
    const [accountType, setAccountType] = useState('');
    const [userId, setUserId] = useState('');

    const [viewTableOpen, setViewTableOpen] = React.useState(false);


    function handleClick() {
    setFormOpen(true);
              }


 async function handlesubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId, name: accountName, type: accountType }),
      });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to add account.');
        }
        setFormOpen(false);
        // Optionally, refresh the account list or give user feedback here
      } catch (err) {
        console.error('Error adding account:', err);
      }
    }



    return (
        <div >
            <h1>Account</h1>
            <Sidebar />

          <button onClick={handleClick} className="btn-open-form">
                  + Add New Account
          </button>

             {formOpen && (
            <div className="add-account-form">
            <div className="modal-content">
            <h3>Create Auccount</h3>

            <input id='useId' type="text" placeholder="User_id" required  value={userId} onChange={(e) => setUserId(e.target.value)}/>
              
            <input id='name' type="text" placeholder="name" required value={accountName} onChange={(e) => setAccountName(e.target.value)} />
        
            <input id='type' type="text" placeholder="type" required value={accountType} onChange={(e) => setAccountType(e.target.value)} />
            <div className="button-group">
              <button onClick={() => setFormOpen(false)} className="btn-cancel">
                Cancel
              </button>
              <button className="btn-submit" onClick={handlesubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
            </div>

      
    )
}






export default AccountsPage;