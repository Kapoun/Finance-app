import React from 'react';



function Avater({icon, title, value}) {
  return (
    <div className="avater-card">
         <div><label>{title}</label> </div>  
         <div> <label>{value}</label></div>      
    </div>
  );
}

export default Avater;