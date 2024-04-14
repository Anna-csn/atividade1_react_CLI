
import React, { useState } from 'react';
import './itemCount.css';

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial || 1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    // Emitindo o evento onAddToCart com a quantidade de itens selecionados
    const event = new CustomEvent('onAddToCart', { detail: count });
    window.dispatchEvent(event);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      {/* Botão "Adicionar ao Carrinho" desabilitado se a quantidade selecionada for maior que o estoque */}
      <button className='add-button' onClick={handleAddToCart} disabled={count > stock}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ItemCount;
