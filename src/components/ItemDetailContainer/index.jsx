import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail'
import {useParams} from 'react-router-dom'

const productos=[
  {id:1,image:"https://http2.mlstatic.com/D_NQ_NP_685332-MLA47374032917_092021-O.webp",nombre:"Capitan America",precio:2800, size:"XL", stock:10, categoria:"Remera"},
  {id:2,image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/898/050/products/remera-diana-in-black-flyer1-5caf7bc1dd47ad2d7f16400002991478-480-0.jpg",nombre:"Mujer Maravilla",precio:1540, size:"L",stock:4, categoria:"Chomba"},
  {id:3,image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/944/335/products/superman1-d542f032f3ff91087e15510407198330-640-0.jpg",nombre:"SuperMan",precio:990,size:"S", stock:20, categoria:"Remera"}
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