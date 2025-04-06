
import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="card-title">{item.titulo}</h3>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text text-capitalize">Categoría: {item.categoria}</p>
                <p className="card-text">${item.precio}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
