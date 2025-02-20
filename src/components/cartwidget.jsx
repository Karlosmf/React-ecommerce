//import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const itemCount = 3; // Valor fijo por ahora

  return (
    <div className="flex items-center">
      <ShoppingCartIcon className="text-blue-500" />
      <span className="text-white -ml-4">{itemCount}</span>
    </div>
  );
};

export default CartWidget;