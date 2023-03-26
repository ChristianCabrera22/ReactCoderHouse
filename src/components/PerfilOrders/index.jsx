import React, {useState, useEffect} from 'react'
import ItemOrders from '../ItemOrders';
import {getFirestore,collection,getDocs,query,where,orderBy} from 'firebase/firestore'

const PerfilOrders = ({idUser}) => {
const id=idUser.replace(/['"]+/g, '') //el id viene con comillas, "Christian" .. se retiran ""
window.scrollTo(0, 230);
const [data, setData]=useState([])

useEffect(()=> {

    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'orders')
    const queryFilter= query(queryCollection, where('id','==',id))
    getDocs(queryFilter)
     .then(res => setData(res.docs.map(orders=> ({id: id,idOrder: orders.id, ...orders.data()}))))

     console.log(queryFilter)
  }, [])
  console.log("Ordenes del usuario: "+id)
  console.log(data)
  return (
    <>
    <h1 class="mt-2">Hola {id}, aqui estan tus ordenes:</h1>
    <section class='sec'>
  <div class="container py-5">
    
{/* aca se hace el map y envia  */}
    
    {data.length ===0 ? "No hay Ordenes":data.map(orders=><ItemOrders order={orders}/>)}


    
  </div>
</section>
    </>
  )
}

export default PerfilOrders