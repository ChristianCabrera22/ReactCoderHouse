import React, { useState } from 'react'
//import MenuNav from './MenuNav/MenuNav'
const Landing = () => {

  const [contador, setContador] = useState(0)
  const [ultimo, setUltimo] = useState()
  
  const hizoClick = () => {
    setContador(contador+1);
    setUltimo(new Date().toLocaleString())
  }
  return (
    // <MenuNav/>
    <div>
    
    <p>Has clickeando: {contador}</p>
    {ultimo ?
    <p>Ultimo Click: {ultimo}</p>
    :
    <p>No hay Clicks</p>
    }
    
    
    <button onClick={hizoClick}>Clickeame!!</button>
    </div>
  )
}

export default Landing