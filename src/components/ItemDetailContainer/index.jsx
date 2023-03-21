import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail'
import {useParams} from 'react-router-dom'



const productos=[
  {id:1,image:"cap.jpg",nombre:"Capitan America",precio:2800, size:"XL", stock:10, categoria:"Remera"},
  {id:2,image:"cap.jpg",nombre:"Mujer Maravilla",precio:1540, size:"L",stock:4, categoria:"Chomba"},
  {id:3,image:"cap.jpg",nombre:"SuperMan",precio:990,size:"S", stock:20, categoria:"Remera"},
  {id:4,image:"cap.jpg",nombre:"Test",precio:990,size:"S", stock:20, categoria:"Remera"}
]

  
const ItemDetailContainer = () => {

    const [data,setData]=useState({})
    const {detalleId} = useParams()
    useEffect(()=> {
        const getData=new Promise(resolve => {
            setTimeout(()=>{
                resolve(productos)
            }, 500)
        })
        getData.then(res=> setData(res.find(prods=>prods.id===parseInt(detalleId))))
    }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer