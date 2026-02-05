import React from 'react';
import "./Expenditure.css";
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';


function Expenditure({title , value}) {
  return (
     <div className='exp-container' >
             <h1>EXPENCE</h1>
             <Sidebar />

          <div className="card-container">   
           <label>Items</label>

           <div className='exp-details'>
            <label>Details:</label>
           </div>

           <div className='exp-details'>
            <label>Amount:</label>
           </div>
        </div>

        
       
</div>

     
  );
}
 








export default Expenditure;