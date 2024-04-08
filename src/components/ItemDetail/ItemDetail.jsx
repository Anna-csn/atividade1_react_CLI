import React from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/itemCount';

function ItemDetail({ item }) {
  

  const handleAddToCart = () => {
    
   
  };

  return (
    <div className="item-detail-container">
      <h2 className='h2-title'>{item.title}</h2>
      <div className="item-detail">
        <img className="item-image" src={item.pictureUrl} alt={item.title} />
        <div className="details">
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>Estoque:</strong> {item.estoque}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

