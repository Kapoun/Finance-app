import React from "react"
import "./Card.css"



function Card({ title, amount, icon, color }) {
  return (
    <div className="card" style={{ background: color }}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{amount}</p>
    </div>
  );
}

export default Card;
