import React,{useEffect} from 'react'
import { useCartContext } from '../../context/CartContext'
import './style.css'
import { Link,useNavigate } from 'react-router-dom'
import ItemCart from '../itemCart'
import {addDoc,collection,getFirestore, updateDoc, doc} from 'firebase/firestore'
import Swal from 'sweetalert2'

export const Cart = (product) => {
  const {cart, totalPrice,clearCart,loginOK,login} =useCartContext()
    useEffect(() => {
        window.scrollTo(0, 230);
        const storedLoginData = localStorage.getItem('cart');
        if (storedLoginData) {
          const parsedLoginData = JSON.parse(storedLoginData);
        }
      }, []);
      const navigate = useNavigate();
      function handleInicioSesionClick() {
        navigate('/perfil');
      }
      
    const order= {
            id: login,
            status: false,
            item: cart.map(product => ({id: product.id, cant: product.cant})),
            total: totalPrice(),
            fecha: new Date().toLocaleString()
    }
    loginOK? console.log("login: "+loginOK+" ID:"+login):console.log("sin login")
    const orderClick = () => {

      if (login) {
        //compra con LOGIN
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success px-4',
              cancelButton: 'btn btn-danger px-4'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Confirmar compra',
            text: "Prepararemos los productos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              // guardar en orders
                const db = getFirestore();
                const ordersCollection = collection(db, 'orders')
                addDoc(ordersCollection,order)
                    .then(({idAuto})=> (console.log("Compra realizada: "+idAuto)))
                    //quiar el stock lo comprado
                    const productsCollection = collection(db, 'products')
                    for (const item of cart) {
                      const productDoc = doc(productsCollection, item.id)
                      updateDoc(productDoc, {
                        stock: item.stock - item.cant
                      })}
                      // --->
                clearCart()
                localStorage.removeItem('cart');
              swalWithBootstrapButtons.fire(
                'Compra realizada',
                'puede revisarla desde su perfil',
                'success'
              )
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Sigue revisando el carrito de compras :)',
                'error'
              )
            }
          })
          //<<--- compra con login
      } else {
        Swal.fire({
          title: 'Usuario no registrado</u></strong>',
          icon: 'info',
          html:
            'Para continuar con la compra <b>debe</b>, ' +
            'tener un usuario registrado',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Iniciar Sesion',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>Cancelar',
          cancelButtonAriaLabel: 'Thumbs down'
        }).then((result) => {
          if (result.isConfirmed) {
            handleInicioSesionClick();
          }
        });
      }


    }

    if (cart.length === 0) {
return (
    <>
    <h2 className='mt-5 px-4'>Hola, estoy vacio como tu billetera</h2>
    <Link className='mt-5 px-3' to="/">Continuar comprando</Link>
    </>
    )
} else {


  return (
    <>
    <body className='snippet-body'>
    <div className="container-fluid">
    
<div className="row">
<aside className="col-lg-9">
<div className="card">
<div className="table-responsive">
<table className="table table-borderless table-shopping-cart">
<thead className="text-muted">
    <tr className="small text-uppercase">
        <th scope="col">Productos</th>
        <th scope="col" width="120">Cantidad</th>
        <th scope="col" width="120">Precio</th>
        <th scope="col" className="text-right d-none d-md-block" width="200"></th>
    </tr>
</thead>
<tbody>



    {cart.map(product => <ItemCart key={product.id} product={product}/>)}




</tbody>
</table>
</div>
</div>
</aside>
<aside className="col-lg-3">
<div className="card mb-3">
<div className="card-body">
<form>
<div className="form-group"> <label>Tienes un CUPON?</label>
    <div className="input-group"> <input type="text" className="form-control coupon" name="" placeholder="Codigo"/> <span className="input-group-append px-3"> <button disabled className="btn btn-primary btn-apply coupon">Aplicar</button> </span> </div>
</div>
</form>
</div>
</div>
<div className="card">
<div className="card-body">
<dl className="dlist-align">
<dt>Sub Total: </dt>
<dd className="text-right ml-3 px-2"> ${totalPrice()}</dd>
</dl>
<dl className="dlist-align">
<dt>Descuento:</dt>
<dd className="text-right text-danger ml-3 px-2">- ${totalPrice()*.25}</dd>
</dl>
<dl className="dlist-align">
<dt>Total:</dt>
<dd className="text-right text-dark b ml-3 px-2"><strong>${totalPrice()*.75}</strong></dd>
</dl>
<hr/> <button onClick={orderClick} className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Terminar compra </button> 
<Link to="/" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continuar comprando</Link>
</div>
</div>
</aside>
</div>
</div>

    </body>








    </>
  )
}
}
export default Cart;