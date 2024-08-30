import { Col,  Image,  Row,Container, CardLink } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React from 'react'

const Services = () => {
  return (
<Container className='py-5' style={{backgroundColor:''}} >
<Card.Text className='text-center'><h1>Why God's Grace Royal Schools?</h1></Card.Text>
  <Row xs={1} sm={2} md={3} lg={4}>
  {/* <col xs={12} sm={16} md={4} lg={3}> */}
  <Col md={4}>
  <Card className='h-100'style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}} >
<Card.Body href='# ' className='text-center' style={{backgroundColor:''}}>
  
  <i class="bi bi-person-arms-up h2"></i>
  <h4 >Nursery Schools' Curriculum</h4> 
  <h5> We operate the Montessori method which support pupils' learning process in all curriculum areas.</h5>
  
  </Card.Body>

</Card>

</Col>


<Col md={4}>
<Card  className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body className='text-center' style={{backgroundColor:''}}>
  <i class="bi bi-person h2"></i>
  <h4>Primary Schools' Curriculum</h4> 
  <h5> A blend of Nigerian and other international curricula and is carefully aligned with the International Primary Curriculum (IPC).</h5>
  </Card.Body>

</Card >
</Col>
<br/>

<Col md={4}>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body  className='text-center' style={{backgroundColor:''}}>
  <i class="bi bi-book-half"></i>
  <h4>Secondary Schools' Curriculum
   </h4> 
  <h5>A blend of Nigerian and British curricula to equip students for entry to top advanced level undergraduate programmes across the world. </h5>

  </Card.Body>
</Card>
</Col> 

<Col md={4}>
<Card  className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body className='text-center' style={{backgroundColor:''}}>
  <i class="bi bi-person-video3 h2"></i>
  <h4>Co-curricular Activities</h4> 
  <h5> 
Music, scrabble, Athletics, 
 Dance, Basketball, Jolly Phonics, Hausa, Igbo, Yoruba, 
Drama, French, Reading, Football, Chess,   Jolly Phonics.</h5>
 
</Card.Body>
</Card>
</Col>

<Col md={4}>
<Card  className='h-100'style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body className='text-center' style={{backgroundColor:''}}>
  <i class="bi bi-people-fill h2"></i>
  <h4>20
  </h4> 
  <h5>Experienced academic and non-academic Staff .</h5>
  </Card.Body>
</Card>
</Col>


<Col md={4}>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body className='text-center' style={{backgroundColor:''}}>
  <i class="bi bi-cake2 h2"></i>
  <h4>13 Years
 </h4> 
  <h5>  of existence, building leaders of tomorrow with sound values that last.</h5>
 
  </Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className='h-100'style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body className='text-center' style={{backgroundColor:''}}>
  <i class="bi bi-building h2"></i>


  <h4>Facilities
 </h4> 
  <h5> We believe that modern , well equiped facillities are essential for providing students with a world class education. 
    our campus features a range of facilities like: classroms,Laboratories,Libiraries, CompUter Centers ,Sport and Recreational Facilities,Cafeteria,Student Lounges etc., .</h5>
 
  </Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body className='text-center' style={{backgroundColor:''}}>
  <i class="bi bi-award-fill h2"></i>
  <h4>Quality Education
 </h4> 
  <h5>Our commitment to quality education is reflected in everything  we do, from our experienced faculty and cutting edge 
    curriculum to our state-of-the-art facilities and supportive learning environment   .</h5>
 
  </Card.Body>
</Card>
<Link to="/academics">
        <Button 
        variant="success"
        size="lg"
        className="d-block d-sm-inline-block">
          Learn More
        </Button>
        </Link>
</Col>







        

    
{/* </col> */}



</Row>
</Container>
 );
};

export default Services;
