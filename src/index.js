import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MenuNav from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import CartProvider from './context/CartContext';
import Perfil from './components/Perfil'
// import './components/styles/style.css'
import './firebase/config';
import PerfilNew from './components/PerfilNew';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <MenuNav />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/ReactCoderHouse' element={<ItemListContainer/>}/>
            <Route path='/inicio' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/registro' element={<PerfilNew/>}/>
          </Routes>
          <Footer/>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
