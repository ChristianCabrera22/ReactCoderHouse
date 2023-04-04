import React, {useEffect, useState} from 'react'
import {getFirestore,collection,getDocs,query,where,doc,updateDoc} from 'firebase/firestore'
import ItemOrders from '../ItemOrders';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'
const Panel = () => {


  const [data, setData]=useState([])
  const [user, setUsers]=useState([])
  const [product, setProducts]=useState([])
  const refresh = 0
  useEffect(()=> {
       const querydb = getFirestore()

       const queryOrders = collection(querydb, 'orders')
       getDocs(queryOrders)
       .then(res => setData(res.docs.map(orders=> ({order: orders.id, ...orders.data()}))))

       const queryUsers = collection(querydb, 'users')
       getDocs(queryUsers)
       .then(res => setUsers(res.docs.map(user=> ({user: user.id, ...user.data()}))))

       const queryProducts = collection(querydb, 'products')
       getDocs(queryProducts)
       .then(res => setProducts(res.docs.map(product=> ({product: product.id, ...product.data()}))))

    }, [refresh])
  
  
    console.log("ordenes:")
    console.log(data)
    
    console.log("users:")
    console.log(user)

    console.log("products:")
    console.log(product)
 //map ordenes
 const mostrarOrdenes = (order,status) => {
  const lista = (item) => {
    const prod =product.find(product => product.product == item.id)
    return (
      <>
      <p>{prod.nombre} // <span>Cantidad: {item.cant}</span>
        </p>
         
         </>
    )

  }

return (

<div className={`row justify-content-center mb-3 ${order.status===status? "enable":"d-none"}`}>
<div class="col-md-12 col-xl-10">
  <div class="card shadow-0 border rounded-3">
    <div class="card-body">
      <div class="row">
        <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
          <div class="bg-image hover-zoom ripple rounded ripple-surface">
            <img src="https://i.ibb.co/kgSjt8d/orden.jpg"
              class="w-100" />
            <a href="#!">
              <div class="hover-overlay">
                <div class="mask"></div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <h4>Codigo de Orden: ....{order.order.substr(-6)}</h4>
          <h5>Usuario: {user.find(user => user.user == order.id).name}</h5>
          <div class="mt-1 mb-0 text-muted small">
            {order.item.map(function(item) {
               return lista(item)
               })}
          </div>

        </div>

        <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
          <div class="d-flex flex-row align-items-center mb-1">
            <h4 class="mb-1 me-1">$ {order.total}</h4>
          </div>


          <div class="d-flex flex-column mt-4">
            <button className={`btn btn-success btn-sm ${order.status===false? "enable":"d-none"}`}
             type="button" onClick={()=>{
              Swal.fire({
                title: 'Desea marcar como completo?',
                showCancelButton: true,
                confirmButtonText: 'Marcar completo',
              }).then((result) => {
                if (result.isConfirmed) {
                  const querydb = getFirestore()
                  const orderStatus = collection(querydb, 'orders')
                  const orderDoc = doc(orderStatus, order.order)
                      updateDoc(orderDoc, {
                        status: true
                      })
                  Swal.fire('Marcado completo!', '', 'success')
                  
                }
              })
             }}>Marcar como completo</button>

            <button className={`btn btn-danger btn-sm ${order.status===true? "enable":"d-none"}`} type="button"
            onClick={()=>{
              Swal.fire({
                title: 'Desea marcar PENDIENTE?',
                showCancelButton: true,
                confirmButtonText: 'Marcar pendiente',
              }).then((result) => {
                if (result.isConfirmed) {
                  const querydb = getFirestore()
                  const orderStatus = collection(querydb, 'orders')
                  const orderDoc = doc(orderStatus, order.order)
                      updateDoc(orderDoc, {
                        status: false
                      })
                  Swal.fire('Marcado pendiente!', '', 'success')
                  
                  
                }
              })
             }}
            >Volver a marcar pendiente</button>
            <button class="btn btn-outline-dark btn-sm mt-2 disabled" type="button">
              Imprimir orden
            </button>
          </div>


        </div>
      </div>
    </div>
  </div>
</div>
</div>)

 }

    


  return (
    <>
  

    <div className='px-4'>
    <nav>
  <div class="nav nav-tabs mt-5 px-5" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ORDENES pendientes</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ORDENES completas</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Usuarios</button>
    <button class="btn" onClick={()=>{window.location.href = window.location.href}}>Actualizar</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active mt-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

  {data.length ===0 ? "No hay Ordenes": data.map(function(order) { return mostrarOrdenes(order,false)})}
    
  </div>
  <div class="tab-pane fade mt-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  {data.length ===0 ? "No hay Ordenes": data.map(function(order) { return mostrarOrdenes(order,true)})}
  
  </div>
  <div class="tab-pane fade mt-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Usuarios..</div>
</div>
</div>
</>
  )
}

export default Panel