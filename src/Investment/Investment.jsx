import React from 'react';
import "./Investment.css";


function Investment({title , value}) {
  return (
    <div className="investment-card">
         <div><label>{title}</label> </div>  
         <div> <label>{value}</label></div>      
    </div>
  );
}


export default Investment;