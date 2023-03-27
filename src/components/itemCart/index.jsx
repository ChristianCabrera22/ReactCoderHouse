import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemCart = ({product}) => {
    const {removeProduct,decreaseCant,addProduct} = useCartContext()
  return (
    <>
        <tr>
  <td>
    <figure className="itemside align-items-center">
      <div className="aside"><img src={product.image} className="img-sm"/></div>
      <figcaption className="info">
        <a href="#" className="title text-dark" data-abc="true">{product.categoria+"   "+product.nombre}</a>
        <p className="text-muted small">TAMAÑO: {product.size} <br/> <Link to={`/detalle/${product.id}`}>Ver detalle</Link></p>
      </figcaption>
    </figure>
  </td>
  <td> 
    <div className="input-group">
      <button className="btn btn-outline-secondary" type="button" onClick={() => decreaseCant(product.id)}>-</button>
      <input type="text" className="form-control" value={product.cant} readOnly/>
      <button className="btn btn-outline-secondary" type="button" onClick={() => addProduct(product, 1)}>+</button>
    </div>
  </td>
  <td>
    <div className="price-wrap"> 
      <var className="price text-danger"><s>${product.precio*1.25}</s></var> 
      <small className="text-muted">Final: ${product.precio} c/unidad</small> 
    </div>
  </td>
  <td className="text-right d-none d-md-block"> 
    <button className="btn btn-light" onClick={() => removeProduct(product.id)}>Eliminar</button>
  </td>
</tr>

    </>
  )
}

export default ItemCart