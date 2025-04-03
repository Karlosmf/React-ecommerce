import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import "./css/styles.css";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

   

    
    // <div class="bg-gray-100">
    //   <ItemListContainer greeting="Bienvenido a mi tienda!" />
    //   <div class="container mx-auto md:flex gap-2 md:flex-wrap grid">
    //     <Item imageUrl="https://picsum.photos/seed/10/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
    //     <Item imageUrl="https://picsum.photos/seed/9/200/300" title="Compra esto" description="Esto es una descripción" price="10.99"  />
    //     <Item imageUrl="https://picsum.photos/seed/8/200/300" title="Producto" description="Esto es una descripción" price="10.99"  />
    //     <Item imageUrl="https://picsum.photos/seed/7/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
    //     <Item imageUrl="https://picsum.photos/seed/6/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
    //     <Item imageUrl="https://picsum.photos/seed/5/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
    //     <Item imageUrl="https://picsum.photos/seed/4/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
    //     <Item imageUrl="https://picsum.photos/seed/3/200/300" title="Mi Card" description="Esto es una descripción" price="10.99"  />
    //   </div>
   

    // </div>