import React from "react";
import "./Item.css"

function Item({ item }) {
   
  
    return (
      <div className="item-card">
      <div className="item-details">
       <img src={item.pictureUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>ID: {item.id}</p>
        <p>Price: {item.price}</p>
        <p> Estoque: {item.estoque}</p>
      </div>
      </div>
    );
  }
  
export default Item;



