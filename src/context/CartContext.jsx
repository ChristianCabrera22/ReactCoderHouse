import React, {useState} from 'react'
export const CartContext = React.createContext([])

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const clearCart=() => setCart([]) //limpia el carro, lo deja sin productos

  const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false
  



  return (
    <CartContext.Provider>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider