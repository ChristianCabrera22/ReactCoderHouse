import React, {useEffect} from 'react'
import './style.css'
const contacto = () => {
	window.scrollTo(0, 230);
  return (   
    <section className="ftco-section">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h1 className="heading-section">Queremos saber mas de vos!</h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row mb-5">
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-map-marker"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Map:</span> San Javier 1037, Garin</p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-phone"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Whatsapp:</span> <a href="https://wa.me/+5491153440237" target="_blank">1153440237</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-paper-plane"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Mail:</span> <a href="mailto:ccabrera.cd@gmail.com">ccabrera.cd@gmail.com</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-globe"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Instagram</span> <a href="#">LaLocura</a></p>
				          </div>
			          </div>
							</div>
						</div>
						<div className="row no-gutters">
							<div className="col-md-7">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Escribenos!</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Mensaje enviado, gracias! 
				      		</div>
									<form method="#" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" for="name">Nombre completo</label>
													<input type="text" className="form-control" name="name" id="name" placeholder="Ermeregildo Ribarola"/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" for="email">Mail</label>
													<input type="email" className="form-control" name="email" id="email" placeholder="Ermel@asdasd.com"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="subject">Asunto</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Me encantan sus productos"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="#">Mensaje</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Escribi aca tu mensaje"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Enviar" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-5 d-flex align-items-stretch">
								<div className="info-wrap w-100 p-5 img"> 
								<img className="img" src="https://moritzu.com.ar/wp-content/uploads/2021/04/vinilo_textil_imprimible_con_tinta_comun_sublimacion_a4-_moritzu_2.jpg" alt="" />
                	          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
export default contacto