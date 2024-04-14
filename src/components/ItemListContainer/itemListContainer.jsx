import React from 'react';
import './itemListContainer.css';
import {useParams} from'react-router-dom';
/*import ItemCount from '../ItemCount/itemCount'; */
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const {id} = useParams();
  /*const handleAddToCart = (count) => {
  };*/

  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      {/*Esse é o Item Count que vai fazer o controle da quantidade em estoque e adiciona-la no carrinho, como a entrega envolve ps cards
      para que fique mais limpo estou comentando essa parte do código*/}
      {/*<ItemCount stock={5} initial={1} onAdd={handleAddToCart} />*/}
      <ItemList categoryId={id}/>
    </div>
  );
};

export default ItemListContainer;