import React, {useState, useContext} from 'react'
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)
export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  const imagesList = require.context('../assets/images', true)
//funciones 

  

  
  const clearCart=() => setCart([]) //limpia el carro, lo deja sin productos
  const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false //esta en el carro?

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
  
  const addProduct = (data,cant) => {
    if (isInCart(data.id)) {
      setCart(cart.map(product => {
        return product.id === data.id ? {...product, cant: product.cant + cant} : product
      }))
    } else {
      setCart([...cart, {...data, cant}])
    }
  }
  const totalPrice = () => { 
    return cart.reduce((prev,act) => prev + act.cant * act.precio, 0)
  }

  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cant,0)
  console.log('Articulos en el carrito: ',cart)

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts,
      cart,
      imagesList
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider