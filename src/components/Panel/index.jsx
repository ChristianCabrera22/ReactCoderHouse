import React, {useEffect, useState} from 'react'
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore'
import ItemOrders from '../ItemOrders';
const Panel = () => {


  const [data, setData]=useState([])

  useEffect(()=> {
       const querydb = getFirestore()
       const queryCollection = collection(querydb, 'orders')
       getDocs(queryCollection)
       .then(res => setData(res.docs.map(orders=> ({...orders.data()}))))
    }, [])
  
  
    console.log("ordenes:")
    console.log(data)




    


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
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

  {data.length ===0 ? "No hay Ordenes":"hay ordenes"}

  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">prof...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">.asd..</div>
</div>
</div>
</>
  )
}

export default Panel