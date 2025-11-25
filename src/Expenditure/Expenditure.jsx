import React from 'react';
import "./Expenditure.css";
import Sidebar from '../Sidebar/Sidebar';


function Expenditure({title , value}) {
  return (
     <div >
             <h1>EXPENCE</h1>
             <Sidebar />
             
        </div>
  );
}

export default Expenditure;