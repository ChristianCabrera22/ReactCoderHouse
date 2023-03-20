import React from 'react'
import {Link} from 'react-router-dom'

const Item = (prods) => {
  return (
    <>
        <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
          <div class="card">
            <div class="d-flex justify-content-between p-3">
              <p class="lead mb-0">{prods.producto.categoria+"     "+prods.producto.nombre}</p>
              <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong cant">
                {/* <p class="text-white mb-0 small">x4</p> */}
              </div>
            </div>
            <img src={prods.producto.image} class="card-img-top" alt=""/>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p class="small"><a href="#!" class="text-muted">{prods.producto.categoria}</a></p>
                <p class="small text-danger"><s>$ {(prods.producto.precio)+500}</s></p>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">{prods.producto.nombre}</h5>
                <h5 class="text-dark mb-0">{prods.producto.precio}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Disponible: <span class="fw-bold">{prods.producto.stock}</span></p>
                <div class="ms-auto text-warning">
                  <Link class="btn-primary" to={`/detalle/${prods.producto.id}`}>Detalles</Link>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Item