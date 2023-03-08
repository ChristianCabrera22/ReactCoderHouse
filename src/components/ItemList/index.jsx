import React from 'react'
import Item from '../Item'

const ItemList = ({data=[]}) => {

  return (
    <section class="w-100  p-4">
    <div class="row">
    {data.map(prods=><Item key={data.id}producto={prods}/>)}
    </div>
    </section>
  )
}

export default ItemList