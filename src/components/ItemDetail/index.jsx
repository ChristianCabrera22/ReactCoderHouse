import React, {useState} from 'react'
import {useCartContext} from '../../context/CartContext';
import './ItemDetail.css'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'



export const ItemDetail= ({data}) => {
  
  
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext()
  const onAdd=(cant)=>{
    setGoToCart(true)
    addProduct(data,cant)
  }

  
  return (
    <div>
        <section>
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card br15">
        <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0"></p>
            <div className="  d-flex align-items-center justify-content-center shadow-1-strong">
            <a href="javascript:window.history.back()" className="btn-close" aria-label="Close"></a>
            </div>
          </div>
          <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img className="br15 br20 img-fluid" src={data.image} alt="" />
            <a href="#!">
              <div className="mask"></div>
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p><a href="#!" className="text-dark">{data.nombre}</a></p>
                <p className="small text-muted">{data.categoria}</p>
              </div>
              <div>
                <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="small text-muted">Calificacion 4.0/5</p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p><a href="#!" className="text-dark">$ {data.precio}</a></p>
              <p className="text-dark">{data.size}</p>
            </div>
            <p className="small text-muted">Todos los medios de pagos</p>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
            </div>
            { goToCart ? <Link to='/cart' className='btn btn-success px-2 mt-1 text-center'>Ver Carrito</Link> : <ItemCount i={1} stock={data.stock} onAdd={onAdd}/>}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







    </div>
  )
}

export default ItemDetail