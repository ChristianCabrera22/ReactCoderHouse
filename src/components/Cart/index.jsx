import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './style.css'
import { Link } from 'react-router-dom'
import ItemCart from '../itemCart'
export const Cart = (product) => {
    const {cart, totalPrice} =useCartContext()
 


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
<hr/> <a href="#" className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Terminar compra </a> 
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