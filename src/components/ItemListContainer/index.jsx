import React, {useState, useEffect} from 'react'
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore'
import Title from '../Title';
import ItemList from '../ItemList';
import {useParams} from 'react-router-dom'


/* const productos=[
  {id:1,image:"cap.jpg",nombre:"Capitan America",precio:2800, size:"XL", stock:10, categoria:"Remera"},
  {id:2,image:"cap.jpg",nombre:"Mujer Maravilla",precio:1540, size:"L",stock:4, categoria:"Chomba"},
  {id:3,image:"cap.jpg",nombre:"SuperMan",precio:990,size:"S", stock:20, categoria:"Remera"},
  {id:4,image:"cap.jpg",nombre:"SuperMan",precio:990,size:"S", stock:20, categoria:"Remera"}
] */

const ItemListContainer = (props) => {

  const [data, setData]=useState([])
  const {categoriaId} = useParams()

  useEffect(()=> {

    const querydb = getFirestore()
        const queryCollection = collection(querydb, 'products')
    /* const getData=new Promise(resolve=>{
      setTimeout(()=>{
        resolve(productos)
      },500)
    }); */
     if(categoriaId) {
      const queryFilter= query(queryCollection, where('categoria','==',categoriaId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product=> ({id: product.id, ...product.data()}))))
      } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product=> ({id: product.id, ...product.data()}))))
      }
  }, [categoriaId])



  return (
    <>
    {/* <Title greeting="Bienvenido!"/> */}
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer