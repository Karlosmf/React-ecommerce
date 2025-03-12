//import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardWidget from './cardwidget';



const ItemListContainer = ({ id }) => {
  // get products from fakestoreapi.com/products
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  //fetch products 
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

//retornar todos los productos utilizando el componente CardWidget
  return (
    <div class="container mx-auto md:flex gap-2 md:flex-wrap grid">
      {products.map(product => (
        <CardWidget key={product.id} imageUrl={product.image} title={product.title} description={product.description} price={product.price} />
      ))}
    </div>
  );

 
};

export default ItemListContainer;