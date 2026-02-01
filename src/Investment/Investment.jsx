import React from 'react';
import Card from "../Card/Card"
import "./Investment.css";
import Sidebar from '../Sidebar/Sidebar';


function Investment() {
  return (
    <div> 
        <h1 className='header'>Investment</h1>
    <div className='side-bar-inv'>
       <Sidebar />

     </div>
     <div className='inv-containeer'>
       <div className='inv-card'><label>Personal Investment </label></div>
       <div className='inv-card'><label>Business Investment </label></div>
       <div className='inv-card'><label>Other Investment</label></div>
     </div>  

     <div className='inv-details'>
      <label className='inv-lable'>More features to be added !!!</label>
      
      </div> 
    </div>
   
  );
}


export default Investment;