import React, { useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/itemCount';

function ItemDetail({ item }) {
  const [stock, setStock] = useState(item.estoque); // Estado para o estoque disponível

  const handleAddToCart = (event) => {
    const count = event.detail;
    // Lógica para adicionar o item ao carrinho
    alert(`${count} item(s) adicionado(s) ao carrinho`);
    
    // Atualizar o estoque
    setStock(prevStock => prevStock - count);
  };

  const handleFinalizarCompra = () => {
    alert("Finalizando compra ...");
    // Aqui você pode adicionar a lógica para redirecionar para a página do carrinho
    // Ou exibir uma mensagem confirmando a finalização da compra
  };

  React.useEffect(() => {
    window.addEventListener('onAddToCart', handleAddToCart);
    return () => {
      window.removeEventListener('onAddToCart', handleAddToCart);
    };
  }, []);

  return (
    <div className="item-detail-container">
      <h2 className='h2-title'>{item.title}</h2>
      <div className="item-detail">
        <img className="item-image" src={item.pictureUrl} alt={item.title} />
        <div className="details">
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>Estoque:</strong> {stock}</p> {/* Atualizando o estoque exibido */}
          <p><strong>Description:</strong> {item.description}</p>
          <ItemCount stock={stock} initial={1} />
        </div>
      </div>
      <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
    </div>
  );
}

export default ItemDetail;

