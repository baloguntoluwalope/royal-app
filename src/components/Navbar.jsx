import { Col,  Image,    NavDropdown,   Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <div >
   
 
   <Navbar     collapseOnSelect expanded="xs"    data-bs-theme="dark" style={{backgroundColor:'#059212'}}>
   {/* collapseOnSelect expand="s m" */}
   <Col className='text-center'>
 
            
            <Image
            rectangle
            fluid
            variant="top"
            src='src/assets/God,s Grace Royal School.jpg'
            alt="me"
            className='float-left'
            style={{position:'absolute',top:'10px',left:'10px'}}
            width="3%" height="2%"
            display="in-line block"
            alignItem="flex"
          
        />
        {/* <h2 > God's Grace Royal Schools </h2> */}

</Col>


    <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll"/>
    <Navbar.Collapse id='responsive-navbar-nav'>
         
        {/* <NavbarOffcanvas id="Offcanvas" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">My Brand</Offcanvas.Title>
            <Offcanvas.Body>
              <Nav className='justify-content-end-flex-grow-1-pe-3'></Nav> */}

    <Row xs={2} sm={3} md={4} lg={6}>
       
           
          
          
          <Nav className="  me-auto ">
          <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            
            
            
  
            <Nav.Link as={Link} to="academics">Academics</Nav.Link>
            
         
            
            <Nav.Link as={Link} to="contactUs">ContactUs</Nav.Link>
          </Nav>
    
          </Row>



         
          </Navbar.Collapse>
   

      </Navbar>

  <br/>

    </div>
  );
}

export default ColorSchemesExample;