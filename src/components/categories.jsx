import React, { useState, useEffect } from "react";
import { db } from "../../firebase/client"; 
import { collection, getDocs } from "firebase/firestore"; // Importa las funciones necesarias de Firebase Firestore
//traer las categorias de la base de datos
const Categories = () => {
  const [categories, setCategories] = useState([]); //estado para las categorias
  const [loading, setLoading] = useState(true); //estado para el loading

  useEffect(() => {
    const fetchCategories = async () => {
      // get categories from column categoryId from firestore
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const categoriesData = querySnapshot.docs.map(doc => doc.data().categoryId);
        const uniqueCategories = Array.from(new Set(categoriesData));
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      } 
    };
    fetchCategories();
    console.log(categories);
  })  


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    categories.map((category, index) => (
        <li key={index}>
          <a href={`/category/${category}`} className="text-white hover:text-gray-300">
            {category}
          </a>
        </li>
      )
    
  ));

};

export default Categories;


// console.log(getMaxNumber([1,2,3,4,5,6,7,8,9,10]));
// function getMaxNumber(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log (max)

