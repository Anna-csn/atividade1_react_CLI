
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { getListOnApi } from '../../fakeServer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'; 
import "./Itemlist.css"

function ItemList() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para armazenar o item selecionado

  useEffect(() => {
    const promise = async () => {
      const result = await getListOnApi();
      setTimeout(() => {
        setItems(result);
      }, 2000);
    };
    promise();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Define o item selecionado e abre os detalhes do produto/item
  };

  return (
    <div className="item-list">
      {selectedItem ? (
        <ItemDetailContainer item={selectedItem} onClose={() => setSelectedItem(null)} />
      ) : (
        items.map((item) => (
          <div key={item.id} onClick={() => handleItemClick(item)}>
            <Item item={item} />
          </div>
        ))
      )}
    </div>
  );
}

export default ItemList;
