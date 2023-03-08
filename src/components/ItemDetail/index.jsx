import React from 'react'
import './ItemDetail.css'
const ItemDetail= ({data}) => {
  return (
    <div>
        {/* detalle: {data.nombre} */}

        <section>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card br15">
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={data.image}
               class="br15 br20 img-fluid"
              alt="" />
            <a href="#!">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p><a href="#!" class="text-dark">{data.nombre}</a></p>
                <p class="small text-muted">{data.categoria}</p>
              </div>
              <div>
                <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="small text-muted">Calificacion 4.0/5</p>
              </div>
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <p><a href="#!" class="text-dark">$ {data.precio}</a></p>
              <p class="text-dark">{data.size}</p>
            </div>
            <p class="small text-muted">Todos los medios de pagos</p>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <a href="#!" class="text-dark fw-bold">Cancelar</a>
              <button type="button" class="btn btn-primary">Agregar al Carrito</button>
            </div>
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