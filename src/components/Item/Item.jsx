import React from "react";
import "./Item.css"

function Item({ item }) {
    const handleButtonClick = () => {
        alert(` Detalhes do ${item.title} em breve!!! `);
    };
  
    return (
      <div className="item-details">
        <img src={item.pictureUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>ID: {item.id}</p>
        <p>Price: {item.price}</p>
        <button onClick={handleButtonClick}>Veja detalhes do produto</button>
        <p> Estoque: {item.estoque}</p>
      </div>
    );
  }
  
export default Item;