import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Detailcontainer from './detailcontainer';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto">
      {product ? (
        <Detailcontainer
          imageUrl={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;

