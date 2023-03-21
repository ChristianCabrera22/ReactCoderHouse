import React, {useState, useEffect} from 'react'
import Title from '../Title';
import ItemList from '../ItemList';
import {useParams} from 'react-router-dom'


const productos=[
  {id:1,image:"cap.jpg",nombre:"Capitan America",precio:2800, size:"XL", stock:10, categoria:"Remera"},
  {id:2,image:"cap.jpg",nombre:"Mujer Maravilla",precio:1540, size:"L",stock:4, categoria:"Chomba"},
  {id:3,image:"cap.jpg",nombre:"SuperMan",precio:990,size:"S", stock:20, categoria:"Remera"},
  {id:4,image:"cap.jpg",nombre:"SuperMan",precio:990,size:"S", stock:20, categoria:"Remera"}
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