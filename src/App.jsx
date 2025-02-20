//import { useState } from 'react'

//import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';
import CardWidget from './components/cardwidget';

const App = () => {
  return (
    <div class="bg-gray-100">
      <Navbar />
      <ItemListContainer greeting="Bienvenido a mi tienda!" />
      <div class="container mx-auto md:flex gap-2 md:flex-wrap grid">
        <CardWidget imageUrl="https://picsum.photos/seed/10/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
        <CardWidget imageUrl="https://picsum.photos/seed/9/200/300" title="Compra esto" description="Esto es una descripción" price="10.99"  />
        <CardWidget imageUrl="https://picsum.photos/seed/8/200/300" title="Producto" description="Esto es una descripción" price="10.99"  />
        <CardWidget imageUrl="https://picsum.photos/seed/7/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
        <CardWidget imageUrl="https://picsum.photos/seed/6/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
        <CardWidget imageUrl="https://picsum.photos/seed/5/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
        <CardWidget imageUrl="https://picsum.photos/seed/4/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
        <CardWidget imageUrl="https://picsum.photos/seed/3/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
      </div>
    </div>
  );
};

export default App
