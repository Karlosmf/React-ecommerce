//import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { itemCount } = useContext(CartContext);
  alert(itemCount);


  return (
    <div className="flex items-center">
      <ShoppingCartIcon className="text-blue-500" />
      <span className="text-white -ml-4">{itemCount}</span>
    </div>
  );
};

export default CartWidget;