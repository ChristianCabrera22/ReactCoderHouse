import React, {useState, useEffect} from 'react'
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore'
import Title from '../Title';
import ItemList from '../ItemList';
import {Link,useParams} from 'react-router-dom'
import Item from '../Item';



const ItemListContainer = (props) => {

  const [data, setData]=useState([])
  const {categoriaId} = useParams()

  useEffect(()=> {

    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products')

     if(categoriaId) {
      if (categoriaId==="oferta") {
        const queryFilter= query(queryCollection, where('oferta','>',0))
        getDocs(queryFilter)
          .then(res => setData(res.docs.map(product=> ({id: product.id, ...product.data()}))))
      } else {
      const queryFilter= query(queryCollection, where('categoria','==',categoriaId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product=> ({id: product.id, ...product.data()}))))
      }
      } else {
        getDocs(queryCollection)
         .then(res => setData(res.docs.map(product=> ({id: product.id, ...product.data()}))))
      }
  }, [categoriaId])

 const select  = (item) => {
  if (item==="mayor")  {
    setData([...data].sort((a, b) => b.precio - a.precio));
  } else {
    setData([...data].sort((a, b) => a.precio - b.precio));
  }
 }


  return (

    <>

    {categoriaId? '':<Title greeting="Bienvenido!"/>}

    <header class="p-3 text-bg-dark mt-2">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link class="nav-link px-2 text-white" to="/">TODOS</Link></li>
          <li><Link class="nav-link px-2 text-white" to="/categoria/remera">Remeras</Link></li>
          <li><Link class="nav-link px-2 text-white" to="/categoria/chomba">Chombas</Link></li>
          <li><p class="nav-link px-2  text-secondary">Ordenar de: </p></li>
          <li><button class="nav-link px-2 text-white" onClick={()=>{select("mayor")}}>Mayor - menor <i class="fa fa-sort-numeric-desc" aria-hidden="true"></i></button></li>
          <li><button class="nav-link px-2 text-white" onClick={()=>{select("menor")}}>Menor - mayor <i class="fa fa-sort-numeric-asc" aria-hidden="true"></i></button></li>
        </ul>
    
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          
          <input type="text" class="form-control form-control-dark text-bg-dark d-none"
           aria-label="Search" spellcheck="false" data-ms-editor="true"/>
        </form>

        <div class="text-end">
          <Link type="button" to="/categoria/oferta" class="btn btn-warning">Ofertas</Link>
        </div>
      </div>
    </div>
  </header>

    <ItemList data={data}/>


    


    </>
  )
}

export default ItemListContainer