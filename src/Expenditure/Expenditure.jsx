import React from 'react';
import "./Expenditure.css";


function Expenditure({title , value}) {
  return (
    <div className="expenditure-card">
         <div><label>{title}</label> </div>  
         <div> <label>{value}</label></div>      
    </div>
  );
}

export default Expenditure;