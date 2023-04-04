import React, {useEffect, useState} from 'react'
import {getFirestore,collection,getDocs,query,where,doc,updateDoc} from 'firebase/firestore'
import ItemOrders from '../ItemOrders';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'
const Panel = () => {


  const [data, setData]=useState([])
  const [user, setUsers]=useState([])
  const [product, setProducts]=useState([])
  const [refresh, setRefresh] = useState({})
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
  const imprSelec = (id) => {
	  let ficha = document.getElementById(id);
	  let ventimp = window.open(' ', 'popimpr');
    let encabezado = `
    <h1>Detalle del pedido:</h1>
    `
    ventimp.document.write(encabezado );
	  ventimp.document.write(ficha.innerHTML );
	  ventimp.document.close();
	  ventimp.print( );
	  ventimp.close();
	}
return (

<div className={`row justify-content-center mb-3 ${order.status===status? "enable":"d-none"}`}>
<div class="col-md-12 col-xl-10">
  <div class="card shadow-0 border rounded-3">
    <div class="card-body">
      <div class="row" id={order.order}>
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
          <div class="mt-1 mb-0 text-muted small">Datos de contacto:</div>
          <h6>Direccion: {user.find(user => user.user == order.id).direccion}</h6>
          <h6>DNI: {user.find(user => user.user == order.id).dni}</h6>
          <h6>Email: {user.find(user => user.user == order.id).email}</h6>
          <div class="mt-1 mb-0 text-muted small">
            Productos:
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
                  setRefresh({ref: 1})
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
                  setRefresh({ref: 1})
                  
                  
                }
              })
             }}
            >Volver a marcar pendiente</button>
            <button class="btn btn-outline-dark btn-sm mt-2" type="button" onClick={() => imprSelec(order.order)}>
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

 //map Users
 const mostrarUsuario = (user) => {
  return ( <>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <div class="card text-black">
            <img src="data:image/png;base64,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"
              class="card-img-top" alt="Apple Computer" />
            <div class="card-body">
              <div class="text-center">
                <h5 class="card-title">{user.name}</h5>
                <p class="text-muted mb-4">{user.direccion}</p>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Mail:</span><span>{user.email}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>DNI:</span><span>{user.dni}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>ID unico</span><span>{user.user}</span>
                </div>
              </div>

              <button className='btn btn-success' onClick={()=> {
                Swal.fire({
                  title: 'Coloque nuevo Password',
                  input: 'text',
                  inputAttributes: {
                    autocapitalize: 'off'
                  },
                  showCancelButton: true,
                  confirmButtonText: 'Cambiar',
                  showLoaderOnConfirm: true,
                  preConfirm: (login) => {
                    if (login=="") {
                    Swal.fire({
                      title: `En blanco no permitido`
                    })} else {
                      Swal.fire({
                        title: `Cambiado!`
                      })
                      const querydb = getFirestore()
                      const users = collection(querydb, 'users')
                      const userId = doc(users, user.user)
                          updateDoc(userId, {
                            pw: login
                          })

                      return console.log("pass cambiado")
                    }
                    
                  },
                  })

              }}>
                Modificar Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )

}


  return (
    <>
  

    <div className='px-4'>
    <nav>
  <div class="nav nav-tabs mt-5 px-5" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ORDENES pendientes</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ORDENES completas</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Usuarios</button>
    
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active mt-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

  {data.length ===0 ? "No hay Ordenes": data.map(function(order) { return mostrarOrdenes(order,false)})}
    
  </div>
  <div class="tab-pane fade mt-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  {data.length ===0 ? "No hay Ordenes": data.map(function(order) { return mostrarOrdenes(order,true)})}
  
  </div>
  <div class="tab-pane fade mt-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

  {user.length ===0 ? "No hay Usuarios": user.map(function(user) { return mostrarUsuario(user)})}


    




    </div>
</div>
</div>
</>
  )
}

export default Panel