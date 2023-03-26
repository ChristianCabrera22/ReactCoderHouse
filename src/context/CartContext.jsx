import React, {useState, useContext} from 'react'
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)
export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  
  const imagesList = require.context('../assets/images', true)
  const [loginOK, setLoginOK] = useState(false)
  const [login, setLoginName] = useState()
//funciones 

const setLoginON=() => setLoginOK(true)
const setLoginOFF=() => setLoginOK(false)
const setLogin=(name) => setLoginName(name)
  
  const clearCart=() => setCart([]) //limpia el carro, lo deja sin productos
  const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false //esta en el carro?

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
  
  const addProduct = (data,cant) => {
    if (isInCart(data.id)) {
      setCart(cart.map(product => {
        const cartRet = product.id === data.id ? {...product, cant: product.cant + cant} : product
        localStorage.setItem('cart', JSON.stringify(cartRet));
        return cartRet
      }
      ))
    } else {
      const cartRet= [...cart, {...data, cant}]
      localStorage.setItem('cart', JSON.stringify(cartRet));
      setCart(cartRet)
    }
  }
  const totalPrice = () => { 
    return cart.reduce((prev,act) => prev + act.cant * act.precio, 0)
  }

  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cant,0)


  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts,
      cart,
      imagesList,
      setLoginON,
      setLoginOFF,
      loginOK,
      login,
      setLogin
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider