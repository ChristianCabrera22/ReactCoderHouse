import React from 'react'
import ItemListContainer from './ItemListContainer'
import MenuNav from './MenuNav/MenuNav'

export const Landing = () => {
  return (
    <React.StrictMode>
        <MenuNav/>
        <ItemListContainer greeting="Bienvenido Papu, aca van los productos"/>
    </React.StrictMode>
  )
}
export default Landing


