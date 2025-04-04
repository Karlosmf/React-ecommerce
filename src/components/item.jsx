import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} />
        <div>
            <img src={producto.image} alt={producto.title} />
            <h4>{producto.title}</h4>
            <p>Precio: ${producto.price}</p>
            <p className='text-capitalize'>Categoría: {producto.categoryId}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item