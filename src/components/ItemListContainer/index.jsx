import React, {useState, useEffect} from 'react'
import Title from '../Title';
import ItemList from '../ItemList';
import {useParams} from 'react-router-dom'


const productos=[
  {id:1,image:"https://http2.mlstatic.com/D_NQ_NP_685332-MLA47374032917_092021-O.webp",nombre:"Capitan America",precio:2800, size:"XL", stock:10, categoria:"Remera"},
  {id:2,image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/898/050/products/remera-diana-in-black-flyer1-5caf7bc1dd47ad2d7f16400002991478-480-0.jpg",nombre:"Mujer Maravilla",precio:1540, size:"L",stock:4, categoria:"Chomba"},
  {id:3,image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/944/335/products/superman1-d542f032f3ff91087e15510407198330-640-0.jpg",nombre:"SuperMan",precio:990,size:"S", stock:20, categoria:"Remera"}
]

const ItemListContainer = (props) => {

  const [data, setData]=useState([])
  const {categoriaId} = useParams()

  useEffect(()=> {
    const getData=new Promise(resolve=>{
      setTimeout(()=>{
        resolve(productos)
      },500)
    });
    if(categoriaId) {
      if(categoriaId.toLowerCase()==="remera" || categoriaId.toLowerCase()==="chomba") {
        getData.then(res=>setData(res.filter(prods=> prods.categoria.toLowerCase()===categoriaId.toLowerCase())))
      } else {
        getData.then(res=>setData(res))
      }
    } else {
      getData.then(res=>setData(res))
    }
  }, [categoriaId])



  return (
    <>
    <Title greeting="Bienvenido!"/>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer