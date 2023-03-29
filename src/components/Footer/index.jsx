import React from 'react'
import { Link} from 'react-router-dom'
import './style.css'
const index = () => {
  return (
    <>
		<footer class="footer-07 mt-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 text-center">
						<h2 class="footer-heading logo">LaLocura</h2>
						<p class="menu">
							<Link to="/">Inicio</Link>
							<Link to="/">Quienes somos?</Link>
							<Link to="/categoria/remera">Remeras</Link>
							<Link to="/categoria/chomba">Chombas</Link>
							<Link to="/contacto">Contacto</Link>
						</p>
						<ul class="ftco-footer-social p-0">
              <li class="ftco-animate"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="Map"><span class="fa fa-map-marker"></span></a></li>
              <li class="ftco-animate"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="whatsapp"><span class="fa fa-phone"></span></a></li>
              <li class="ftco-animate"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="fa fa-globe"></span></a></li>
            </ul>
					</div>
				</div>
				<div class="row mt-5">
					<div class="col-md-12 text-center">
						<p class="copyright">Copyright 2023 Todos los derechos reservados | Desarrollado por<i class="ion-ios-heart" aria-hidden="true"></i><a href="#" target="_blank"> Christian Cabrera</a></p>
					</div>
				</div>
			</div>
		</footer>
    </>
  )
}

export default index