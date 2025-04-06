import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="columns-2 gap-4">
        <img className="rounded-md shadow-md" src={producto.imagen} alt={producto.titulo} />
        <div>
            <img src={producto.image} alt={producto.title} />
            <h4 className ='className="text-lg font-bold'>{producto.title}</h4>
            <p className="mt-2 text-sm text-gray-600">Precio: ${producto.price}</p>
            <p className='className="text-xs font-bold text-sky-500 text-capitalize'>Categoría: {producto.categoryId}</p>
            <br />
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-light py-0 px-1 rounded-full" href="" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item