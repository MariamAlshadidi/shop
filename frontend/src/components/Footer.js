import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GooglePlay from '../images2/google-play.svg'
import Apple from '../images2/app-store.svg'

const Footer = () => {
  return (
    <footer>
   
        <Row className='footer-help header py-5'>
          <Col md={6} className='footer-help-one'>
            <h3>We're Always Here To Help</h3>
            <p>Reach out to us through any of these support channels</p>
          </Col>

          <Col md={6} className='footer-help-tow'>
            <div>
            <h3> HELP CENTER <span> <i class="fas fa-envelope"></i></span></h3>
            <p>help.bron.com</p>
            </div>
           
          </Col>
        </Row>
        <Row className='footer-help py-2'>
          <Col md={6} className='footer-help-one py-2'>
           <img src={GooglePlay} className='px-1' />
           <img src={Apple}  className='px-1'/>
          </Col>

          <Col md={6} className='footer-help-tow my-2 py-2'>
          <ul class="list-inline">
                 <li class="list-inline-item">
                   <a href="">
                     <i class="fab fa-facebook-f px-1"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="">
                      <i class="fab fa-pinterest px-1"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="">
                      <i class="fab fa-google-plus-g px-1"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="">
                      <i class="fab fa-twitter px-1"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="">
                      <i class="fab fa-linkedin-in px-1"></i>
                    </a>
                  </li>
               </ul>
           
          </Col>
        </Row>

  
        <Row className='footer'>
          <Col className='text-center py-4'>Copyright &copy; Mariam Alshadidi</Col>
        </Row>
    
    </footer>
  )
}

export default Footer