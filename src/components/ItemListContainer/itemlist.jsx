import React from 'react';
import './itemlist.css';
import ItemCount from '../ItemCount/itemCount'; 


const ItemListContainer = ({ greeting }) => {
  const handleAddToCart = (count) => {
    console.log(`Adicionando ${count} itens ao carrinho...`);
  };

  return (
    <div className="item-list-container">
      <p className="greeting">{greeting}</p>
      {/* Passando props para o ItemCount */}
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemListContainer;