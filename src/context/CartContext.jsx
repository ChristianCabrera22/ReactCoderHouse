import React, {useState, useContext} from 'react'
import Swal from 'sweetalert2'


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

  const removeProduct = (id) => {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "se eliminara del carrito!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'puedes seguir comprando y agregando articulos',
        )
        setCart(cart.filter(product => product.id !== id))
      }
    })
    
  }
  
  const addProduct = (data,cant) => {
    console.log("add+:")
    console.log(data)
    if (isInCart(data.id)) {
      if(data.stock>data.cant) {
      setCart(cart.map(product => {
        return product.id === data.id ? {...product, cant: product.cant + cant} : product
      }
      ))
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay mas stock',
      })
    }
    } else {
      setCart([...cart, {...data, cant}])
    }
  }


  const decreaseCant = (id) => {
    if (isInCart(id)) {
      const existingProduct = cart.find(product => product.id === id);
      if (existingProduct && existingProduct.cant > 1) {
        setCart(cart.map(product => {
          return product.id === id ? {...product, cant: product.cant - 1} : product
        }));
      } else {
        removeProduct(id);
      }
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
      decreaseCant,
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