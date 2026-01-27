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
             <Card 
           title="Total Expence"
           amount="KES 25,000"
           icon="💸"
           color="#DBD523"
           className="big-card"
       />

        </div>

        
       
</div>

     
  );
}
 








export default Expenditure;