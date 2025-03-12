import CartWidget from './cartwidget';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import Categories from './categories';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold align-middle flex items-center">
          <StorefrontTwoToneIcon className="text-white" />&nbsp; Mi Tienda</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Inicio</a></li>
          {/* <li><a href="#" className="text-white hover:text-gray-300">Productos</a></li> */}
          <Categories />
          <li><a href="#" className="text-white hover:text-gray-300">Contacto</a></li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;