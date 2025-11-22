import React from "react";
import "./Income.css";


function Income({title , value}) {
  return (
    <div className="income">
         <div><label>{title}</label> </div>  
         <div> <label>{value}</label></div>
    </div>
  );
}

export default Income;