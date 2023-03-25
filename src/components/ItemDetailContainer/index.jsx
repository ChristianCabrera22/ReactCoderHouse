import React, {useEffect, useState} from 'react'
import {getFirestore,doc,getDoc} from 'firebase/firestore'
import ItemDetail from '../ItemDetail'
import {useParams} from 'react-router-dom'

  
const ItemDetailContainer = () => {

    const [data,setData]=useState({})
    const {detalleId} = useParams()
    useEffect(()=> {
        /* const getData=new Promise(resolve => {
            setTimeout(()=>{
                resolve(productos)
            }, 500)
        })
        getData.then(res=> setData(res.find(prods=>prods.id===parseInt(detalleId)))) */
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', detalleId)
        getDoc(queryDoc)
          .then(res => setData({id: res.id, ...res.data()}))
    }, [detalleId])

      return (
        
                <>
                <ItemDetail data={data}/>
                </>
      )
}

export default ItemDetailContainer