import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { getListOnApi } from '../../fakeServer';
import "./Itemlist.css"


function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = async () => {
      const result = await getListOnApi();
      setTimeout(() => {
        setItems(result);
      }, 2000);
    };
    promise();
  }, []);


  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id}>
        <Item item ={item}/>
        </div>
      ))}
    </div>
  );
      }


export default ItemList;
