import React, {useState,useEffect} from 'react'
import Swal from 'sweetalert2'
import {getFirestore,doc,getDoc} from 'firebase/firestore'
const ItemOrderDetaill = ({order}) => {

    const [data,setData]=useState({})
//     const querydb = getFirestore()
//     const queryDoc = doc(querydb, 'products', order)
//     getDoc(queryDoc)
//       .then(res => setData({id: res.id, ...res.data()}))

useEffect(()=> {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, 'products', order)
    getDoc(queryDoc)
      .then(res => setData({id: res.id, ...res.data()}))
}, [])
console.log("Orden: "+data.id)
console.log(data)

  return (
    <>
    <a className="link" onClick={() => {
        Swal.fire({
            title: `<strong>${data.nombre}</strong>`,
            html:
              `${data.descripcion}`,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i>Ok!',
                imageUrl: `${data.image}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',

          })

    }}>{data.categoria+" "+data.nombre}</a> --- click para ver el detalle<p></p></>
  )
}

export default ItemOrderDetaill