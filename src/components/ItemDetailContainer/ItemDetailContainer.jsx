
import React, { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

// Função getItem que retorna uma promessa que resolve com um item em 2 segundos
const getItem = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const item = {
        id: 1,
        title: 'Harry Potter: E a Pedra Filosofal',
        price: 'R$ 1100',
        pictureUrl: "https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_.jpg",
        estoque: 5,
        description: 'Descrição do item 1',
      };
      resolve(item);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null); // Estado para armazenar o item

  useEffect(() => {
    // Chamada da função getItem para obter o item e atualizar o estado
    getItem().then(item => {
      setItem(item);
    });
  }, []); // O segundo parâmetro vazio garante que o efeito seja executado apenas uma vez

  // Renderiza o componente ItemDetail com base no estado do item
  return item ? <ItemDetail item={item} /> : <p>Carregando...</p>;
}

export default ItemDetailContainer;



