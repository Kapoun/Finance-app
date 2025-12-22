import React from 'react';
import "./Expenditure.css";
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';


function Expenditure({title , value}) {
  return (
     <div >
             <h1>EXPENCE</h1>
             <Sidebar />

          <div className="card-container">   
             <Card 
           title="Total Expence"
           amount="KES 25,000"
           icon="💸"
           color="#DBD523"
           className="big-card"
       />

        </div>

         <div className="trans-container">
        {data.map((item) => (
          <div key={data.id} className="transaction-card"> 
            <h3>{data.name}</h3>
            <p>Amount: KES {data.amount}</p>
            <p>{data.icon}</p>
        </div>
        ))}
</div>

        </div>

  );
}
 


const data = [
    { id: 1, name: 'Food & Dining', amount: 5000, icon: '🍔' },
    { id: 2, name: 'Transportation', amount: 3000, icon: '🚗' },
    { id: 3, name: 'Utilities', amount: 2000, icon: '💡' },
    { id: 4, name: 'Entertainment', amount: 1500, icon: '🎬' },
    { id: 5, name: 'Healthcare', amount: 2500, icon: '🏥' },
];





export default Expenditure;