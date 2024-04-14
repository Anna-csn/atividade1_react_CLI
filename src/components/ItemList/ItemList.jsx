import React, { useState, useEffect } from 'react';
import { getListOnApi } from '../../fakeServer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'; 
import Item from '../Item/Item';
import "./Itemlist.css";

function ItemList({categoryId}) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para armazenar o item selecionado


  useEffect(() => {
    const fetchItems = async () => {
      const result = await getListOnApi(categoryId);
      setItems(result);
    };
    fetchItems();
  }, [categoryId]);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Define o item selecionado
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





