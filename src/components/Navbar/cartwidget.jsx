import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import "./cartwidget.css";

const CartWidget = ({ itemCount, incrementItemCount }) => {
  return (
    <div className="cart-widget" onClick={incrementItemCount}> 
      <BsCart3 /> 
      {itemCount > 0 && <Badge bg="danger">{itemCount}</Badge>} 
    </div>
  );
};

export default CartWidget;