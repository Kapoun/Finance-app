import React from "react";
import "./Income.css";
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';


function Income({title , value}) {
  return (
     <div >

             <h1>Income</h1>
        
           <Sidebar />
      <div className="card-container">       
        <Card 
        title="Total Income" 
        amount="KES 000" 
        icon="💰" 
        color="#4FBC2B"
        />
      </div>
      
        </div>
  );
}

export default Income;