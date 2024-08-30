import Nav from 'react-bootstrap/Nav';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';


const Footers = () => {
  return (
    <div style={{backgroundColor:'#059212'}}>
        <footer>
            <Card>
  <div class="container">
    <div class="row">

    <Col className='text-center'>
 
            
<h5>Visit Us: </h5>
    <h5> <i class="bi bi-geo-alt-fill h5"></i> Address</h5>
    <h6> Plot 8, Grace Estate, Behind Cele 1, Idanyin , Ogun State.</h6> 

</Col>

      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title"><h5></h5></span>
          </li>
                  
          
          
          <Nav className="  me-auto ">
            {/* <li>
          <Nav.Link  as={Link} to="/home">Home</Nav.Link>
          </li> */}

          <li>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            </li>
            
            
            <li>
            <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
            </li>
         
            <li>
            <Nav.Link as={Link} to="/contactUs">ContactUs</Nav.Link>
            </li>
          </Nav>
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title"><h5>Contact & Support</h5></span>
          </li>
          <li class="nav-item">
            <span class="nav-link"><i class="bi bi-phone"></i>+2349068103355 , 08086853726</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-chat-text"></i>Live chat</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-envelope"></i>Email: god'sgraceroyalschools@gmail.com</a>
          </li>
         
        </ul>
      </div>
    </div>

    <div class="text-center"><i class="bi bi-three-dots"></i></div>
    
    <div class="row text-center">
      <div class="col-md-4 box">
        <span class="copyright quick-links">Copyright &copy; 2024 <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="#">
            <i class="bi bi-twitter"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="bi bi-facebook"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="bi bi-linkedin"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="bi bi-whatsapp"></i>
          </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline quick-links">
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </Card>
</footer>
    </div>
  )
}

export default Footers




{/* <div class="col-md-4 footer-column">
<ul class="nav flex-column">
  <li class="nav-item">
    <span class="footer-title">Product</span>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Product 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Product 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Plans & Prices</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Frequently asked questions</a>
  </li>
</ul>
</div> */}