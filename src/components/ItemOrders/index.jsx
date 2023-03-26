import React from 'react'
import './style.css'
import ItemOrderDetaill from '../ItemOrderDetaill'
const ItemOrders = ({order}) => {

    //aca solo renderiza item por item




  return (
      <>
      <div class="row justify-content-center mb-3">
      <div class="col-md-12 col-xl-10">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                    class="w-100" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask bg11"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>Codigo de orden:      {order.idOrder.substr(-6)}</h5>
                <p>Fecha: {order.fecha}</p>
                <div class="d-flex flex-row">
                  <div class="text-danger mb-1 me-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="mt-1 mb-0 text-muted small">
                  
                  {order.item.map((itemAct) => {console.log(itemAct.id);
                  return <ItemOrderDetaill order={itemAct.id}/>})}
                </div>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
              <h6 class="text-success">Total de la compra:</h6>
                <div class="d-flex flex-row align-items-center mb-1">
                  <h4 class="mb-1 me-1">$ {order.total}</h4>
                </div>
                
                <div class="d-flex flex-column mt-4">
                  <button type="button" class={order.status ? "btn btn-success":"btn btn-warning"}>{order.status ? "Entregado":"Pendiente"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

export default ItemOrders