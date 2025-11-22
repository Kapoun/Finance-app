import React from 'react';
import Accounts from "./Accounts";
import './Accounts.css';

function AccountsPage({title, value}) {
    return (
        <div className='accounts-card'>
           <div><label>{title}</label> </div>  
           <div> <label>{value}</label></div>
        </div>
    );
}


export default AccountsPage;