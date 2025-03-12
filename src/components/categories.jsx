import React, { useState, useEffect } from "react";
import axios from "axios";
// import {link} from "react-router-dom";

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
    // <select onChange={onSelect} className="text-white bg-gray-800 px-2 rounded">
    //   <option value="">Todas</option>
    //   {categories.map(category => (
    //     <option key={category} value={category}>{category}</option>
    //   ))}
    // </select>

      categories.map(category => (
        <li><a href={`/category/${category}`} className="text-white hover:text-gray-300">{category}</a></li>
      ))
    

  );
};

export default Categories;