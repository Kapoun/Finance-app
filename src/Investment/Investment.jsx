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
       <h2 className='header-two'>Your Investment Categories</h2>

  <div className="card-container">

        <Card 
        title="Total Investment" 
        amount="KES 000" 
        icon="💸" 
        color="#e9901dff"
      />
       
       <Card 
        title="Bonds" 
        amount="KES 000" 
        icon="🧾" 
        color="#e9901dff"
      />
      
      <Card 
        title="Money Market" 
        amount="KES 000" 
        icon="🏦" 
        color="#e9901dff"
      />
       
      <Card 
        title="Index Funds" 
        amount="KES 000" 
        icon="📊" 
        color="#e9901dff"
      />

       <Card 
        title="Stocks" 
        amount="KES 000" 
        icon="📈" 
        color="#e9901dff"
      /> 

      <Card 
        title="undifined" 
        amount="KES 000" 
        icon="📈" 
        color="#e9901dff"
      />

      <Card 
        title="undifined" 
        amount="KES 000" 
        icon="📈" 
        color="#e9901dff"
      />


      <Card 
        title="undifined" 
        amount="KES 000" 
        icon="📈" 
        color="#e9901dff"
      />

</div>
    </div>
   
  );
}


export default Investment;