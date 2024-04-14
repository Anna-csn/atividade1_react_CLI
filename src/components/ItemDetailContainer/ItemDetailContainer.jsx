import React from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({ item, onClose }) {
  return (
    <div>
      {item && <ItemDetail item={item} onClose={onClose} />}
    </div>
  );
}

export default ItemDetailContainer;


