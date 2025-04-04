import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Navbar = () => {
  const { categorias } = useContext(CartContext);
  console.log(categorias);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center ">
        <Link to="/" className="logo">
        <h1 className="text-white text-2xl font-bold align-middle flex items-center">
        <StorefrontIcon className="text-white" />&nbsp;Tiendita</h1></Link>
        <ul className="flex space-x-4 gap-x-2">
          <li><Link className="text-white hover:text-gray-300" to="/">Inicio</Link></li>
          {categorias.map((categoria) => (
            <li key={categoria.id}>
            <Link to={`/productos/${categoria.id}`}>{categoria.nombre}</Link>
            </li>
          ))}
          <li><Link className="text-white hover:text-gray-300" to="/nosotros">Nosotros</Link></li>
          <li><Link className="text-white hover:text-gray-300" to="/contacto">Contacto</Link></li>
          <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar