import React, {useState, useEffect} from 'react'
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore'
import Title from '../Title';
import ItemList from '../ItemList';
import {useParams} from 'react-router-dom'



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