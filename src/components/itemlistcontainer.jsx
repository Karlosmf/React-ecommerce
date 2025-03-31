import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Item from './item';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/client';

const ItemListContainer = () => {
  //estado para los productos
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('Productos');
  const [error, setError] = useState(null);
  //estado para el loading
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

// obtener los productos de la base de datos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => doc.data(), where("categoryId", "==", categoryId));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();

  }, [categoryId]);

//retornar todos los productos utilizando el componente Item
  return (
    <div className="container mx-auto md:flex gap-2 md:flex-wrap grid">
      Categoría: {categoryId}
      {products.map(product => (
        <Item key={product.id} id={product.id} imageUrl={product.image} title={product.title} description={product.description} price={product.price} />
      ))}
    </div>
  );
};

export default ItemListContainer;