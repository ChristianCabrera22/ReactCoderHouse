import React, {useEffect}from 'react'
import {Link} from 'react-router-dom'
import './Item.css'



const Item = (prods) => {
  useEffect(() => {
    window.scrollTo(0, 230);
  }, []);
    return (
    <>
        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 mt-4">
          <div className="card">
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0 text-capitalize">{prods.producto.categoria+"     "+prods.producto.nombre}</p>
              <div className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong cant">
                {/* <p className="text-white mb-0 small">x4</p> */}
              </div>
            </div>
            {prods.producto.stock === 0 && (
            <img src="https://i.ibb.co/7bkdLxv/sinStock.png" className="sin-stock" alt="Sin stock"/>
        )}
        {prods.producto.oferta !== 0 && (
            <span class="badge rounded-pill text-bg-danger oferta">{prods.producto.oferta}%off</span>
        )}
            <img src={prods.producto.image} className="card-img-top" alt={prods.producto.image}/>
            
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="small"><a href="#!" className="text-muted">{prods.producto.categoria}</a></p>
                <p className="small text-danger"><s>$ {(prods.producto.precio)*1.25}</s></p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{prods.producto.nombre}</h5>
                <h5 className="text-dark mb-0">$ {prods.producto.precio}</h5>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">Disponible: <span className="fw-bold">{prods.producto.stock}</span></p>
                <div className="ms-auto text-warning">
                  <Link className="btn-primary" to={`/detalle/${prods.producto.id}`}>Detalles</Link>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Item