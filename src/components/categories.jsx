import React, { useState, useEffect } from "react";
import axios from "axios";

//crear link de categorias desde fakestoreapi.com
const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

//crear componente Categories
const Categories = ({ onSelect }) => {
  //crear estado para guardar las categorias
  const [categories, setCategories] = useState([]);
  
  //fetch categorias
  useEffect(() => {
    axios.get(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  //retornar un select con las categorias
  return (
    <select onChange={onSelect} className="text-white bg-gray-800 px-2 rounded">
      <option value="">Todas</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default Categories;