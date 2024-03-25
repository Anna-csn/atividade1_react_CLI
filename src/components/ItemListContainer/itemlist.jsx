import React from 'react';
import './itemlist.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p className="greeting">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
