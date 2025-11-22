import React from 'react';


function Other({title , value}) {
  return (
    <div className="other-card">
         <div><label>{title}</label> </div>  
         <div> <label>{value}</label></div>      
    </div>
  );
}

export default Other;