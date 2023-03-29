import React, {useEffect,useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import {getFirestore,collection,getDocs,query,where, doc} from 'firebase/firestore'
import Swal from 'sweetalert2';
import './css/style.css'
import PerfilOrders from '../PerfilOrders'
import {Link} from 'react-router-dom'

const Perfil = () => {

    const [loginData, setLoginData] = useState({ email: '', pass: '' });
    let {loginOK,setLoginON,setLoginOFF,login,setLogin} = useCartContext()
    const [idlogin, setID] = useState()
    const [nameUser, setName] = useState()
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setLoginData({ ...loginData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
const querydb = getFirestore();
const queryCollection = collection(querydb, 'users');
const queryFilter= query(queryCollection, where('email','==',loginData.email), where ('pw','==',loginData.pass));
getDocs(queryFilter)
  .then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      console.log("Usuario NO encontrado")
      Swal.fire({
        icon: 'error',
        title: 'Error...!',
        text: 'Verifique datos colocados',
      })
    } else {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " Login Correcto ", doc.data())
        setLoginON()
        setID(doc.id)
        setLogin(doc.id)
        setName(doc.data().name)
        login=doc.id
        console.log("Inicio sesion:"+loginOK)
        localStorage.setItem('loginData', JSON.stringify(doc.id))
        Swal.fire({
          icon: 'success',
          title: 'Perfecto...!',
          text: 'Iniciaste sesion!',
        })
      })
    }
  })

      
      //datos

    }

    useEffect(() => {
        window.scrollTo(0, 230);
        const storedLoginData = localStorage.getItem('loginData');
  if (storedLoginData) {
    const parsedLoginData = JSON.parse(storedLoginData);
    setLoginData(parsedLoginData);
    loginOK=true
    setLoginON()
    setLogin(parsedLoginData)
    login=parsedLoginData

  }
      }, []);

  if(loginOK) {

    const logOff = () => {
        setLoginOFF()
        loginOK=false
        setLogin("")
        login=""
        localStorage.removeItem('loginData');
        console.log("sesion cerrada")
    }
    console.log("doc.name")
    console.log(nameUser)

    return (
        <>
    <button className="btn btn-primary mt-5" onClick={logOff}>Cerrar Sesion</button>
    <PerfilOrders 
      idUser={localStorage.getItem('loginData')}
      name={nameUser}/>
    </>
    )

    } else {
      const lossUser = () =>{
        Swal.fire({
          title: 'Ingrese su correo',
          input: 'email',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Enviar',
          showLoaderOnConfirm: true,
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: `Se envio un correo para recuperar su usuario/contraseña`
            })
          }
        })
      }
        return (
            <>
              <div className="limiter">
                <div className="container-login100">
                  <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                      <img src={require('./img-01.png')} alt="IMG" />
                    </div>
        
                    <form className="login100-form validate-form" onSubmit={handleSubmit}>
                      <span className="login100-form-title">Hola! Inicie Sesion</span>
        
                      <div
                        className="wrap-input100 validate-input"
                        data-validate="Valid email is required: ex@abc.xyz"
                      >
                        <input
                          className="input100"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={loginData.email}
                          onChange={handleInputChange}
                        />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                      </div>
        
                      <div
                        className="wrap-input100 validate-input"
                        data-validate="Password is required"
                      >
                        <input
                          className="input100"
                          type="password"
                          name="pass"
                          placeholder="Contraseña"
                          required
                          value={loginData.pass}
                          onChange={handleInputChange}
                        />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                      </div>
        
                      <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type="submit">
                          Login
                        </button>
                      </div>
        
                      <div className="text-center p-t-12">
                        <span className="txt1">Perdio:</span>
                        <a className="px-1 txt2" onClick={()=>{lossUser()}}>
                          Usuario / Contraseña?
                        </a>
                      </div>
        
                      <div className="text-center p-t-136">
                        <a  href="#">
                          <Link to="/registro" className="txt2">Crear cuenta nueva</Link>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          );



        
    }

  };
  

export default Perfil