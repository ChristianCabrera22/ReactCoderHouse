import React, {useState} from 'react'
import './style.css'
import Swal from 'sweetalert2';
import { Link,useNavigate } from 'react-router-dom'
import {getFirestore,collection,getDocs,query,where,addDoc} from 'firebase/firestore'
const PerfilNew = () => {

    const navigate = useNavigate();
      function gotoPerfil() {
        navigate('/perfil');
      }
      function gotoCart() {
        navigate('/cart');
      }
    const [RegData, setLoginData] = useState({name: '', email: '', pass: '', pass1: ''});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...RegData, [name]: value });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("name: "+RegData.name)
        console.log("email: "+RegData.email)
        console.log("pass: "+RegData.direccion)
        console.log("pass1: "+RegData.dni)
        console.log("pass: "+RegData.pass)
        console.log("pass1: "+RegData.pass1)
        if (RegData.pass!=RegData.pass1) {
            Swal.fire({
            title: 'Contraseña de confirmacion incorrecta',
            timer: 1000,
            })
        } else {
            const querydb = getFirestore();
            const queryCollection = collection(querydb, 'users');
            const queryFilter= query(queryCollection, where('email','==',RegData.email))
            getDocs(queryFilter)
                .then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        const user = {
                            direccion: RegData.direccion,
                            dni: RegData.dni,
                            email: RegData.email,
                            name: RegData.name,
                            pw: RegData.pass
                        }

                        
                        const ordersCollection = collection(querydb, 'users')
                        addDoc(ordersCollection,user)
                            .then(({idAuto})=> (console.log("Usuario agregado: ")))
                            gotoCart()


                        Swal.fire(
                            'Exito!',
                            'Bienvenido a LaLocu.AR',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            'Usuario ya registrado!',
                            'Prueba recuperando contraseña o inciando sesion',
                            'error'
                          )
                          Swal.fire({
                            title: 'Usuario ya registrado!',
                            text: "Prueba recuperando contraseña o inciando sesion",
                            icon: 'error',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Recuperar contraseña'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                gotoPerfil() 
                            }
                          })  
                    }
                })
            
            }
    }

  return (
    <>
    <section className="vh-100 bg1 mt-5">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black br25">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro</p>

                <form className="mx-1 mx-md-4 validate-form" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder=""
                          required
                          value={RegData.name}
                          onChange={handleInputChange}
                        />
                      <label className="form-label" for="name">Nombre y Apellido</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input
                          className="form-control"
                          type="text"
                          name="direccion"
                          placeholder=""
                          required
                          value={RegData.direccion}
                          onChange={handleInputChange}
                        />
                      <label className="form-label" for="direccion">Direccion completa</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input
                          className="form-control"
                          type="number"
                          name="dni"
                          placeholder=""
                          required
                          value={RegData.dni}
                          onChange={handleInputChange}
                        />
                      <label className="form-label" for="dni">DNI <small>(para facturacion)</small></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">

                      <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder=""
                          required
                          value={RegData.email}
                          onChange={handleInputChange}
                        />
                      <label className="form-label" for="email">Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input
                          className="form-control"
                          type="password"
                          name="pass"
                          placeholder=""
                          required
                          value={RegData.pass}
                          onChange={handleInputChange}
                        />

                      <label className="form-label" >Contraseña</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input
                          className="form-control"
                          type="password"
                          name="pass1"
                          placeholder=""
                          required
                          value={RegData.pass1}
                          onChange={handleInputChange}
                        />
                      <label className="form-label" >Repita su contraseña</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" name="check" required/>      
                    <label className="form-check-label" for="fokTerminos">
                      Yo acepto todos los <a href="#!">Terminos de uso</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Registrar!</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default PerfilNew