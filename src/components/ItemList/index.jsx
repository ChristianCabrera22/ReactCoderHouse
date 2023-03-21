import React from 'react'
import Item from '../Item'

const ItemList = ({data=[]}) => {

  return (
    <section className="w-100  p-4">
    <div className="row">
    {data.map(prods=><Item key={data.id}producto={prods}/>)}
    </div>
    </section>
  )
}

export default ItemList