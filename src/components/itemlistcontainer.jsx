//import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{greeting}</h2>
      {/* Aquí puedes agregar la lista de items */}
    </div>
  );
};

export default ItemListContainer;