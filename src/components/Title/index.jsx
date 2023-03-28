import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
function Title() {
  return (
    <>
    <div className='container mt-5 scale'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/f4VnGFw/bd1411ac80089ea07d495f277e160131.jpg"
          alt="Abran Paso, tenemos las mejores promos"
        />
        <Carousel.Caption>
          <h3>Tenemos las mejores promos!</h3>
          <p>Sabemos lo que hacemos, por eso te damos ofertas para que disfrutes nuestras remeras.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/d0jWNyh/3.jpg"
          alt="anda pa alla"
        />
        <Carousel.Caption>
          <h3>Que miras?? </h3>
          <p>Anda pa lla...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Lxgb2Sv/2.jpg"
          alt="2023"
        />
        <Carousel.Caption>
          <h3>Comenzamos con todo! </h3>
          <p>
            Bienvenido 2023.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Title;