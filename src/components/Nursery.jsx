
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Footers from '../components/Footers'

const Nursery = () => {
  return (
    <div style={{backgroundColor:'#06D001'}}>
          <Card >
    <Image src='src/assets/Academics 2233.jpg' fluid
 className='w-90 w-md-75 w-lg-50'
 style={{maxHeight:'500px', width:'100%',objectFit:'cover'}}/>
      <Card.Body>
      </Card.Body>

      <Container className='position-absolute top-50 start-50 translate-middle'>
        <Row>
          <Col className='text-center'>
          <Card.Text className='text-white fw-bold'><h1>Academics</h1></Card.Text>
          </Col>
        </Row>

      </Container>
    </Card>

    <br/>

    <Row className='justify-content-center'>
  <Col md={6} className='mx-auto'>
  <Card style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
    <Card.Body>
  
      <Card.Title className='text-center'>< i  class="bi bi-people h2"></i><h1>Welcome to God's Grace Royal School Day-Care and Nursery School</h1></Card.Title>
      <h5>We provide a safe, nurturing environment for children to learn , grow and thrive . Our experienced staff are dedicated to delivering high-quality care and education for little ones.</h5>

    </Card.Body>
  </Card>
  </Col>
</Row> 

<br/>
<br/>

<Row xs={1} sm={2} md={3} lg={4}  className='justify-content-center'  >
  {/* className='justify-content-center' */}
  {/* <col xs={12} sm={16} md={4} lg={3}> */}
  {/* xs={1} sm={2} md={3} lg={4} */}
  <Col md={4} className='mx-2'>
  <Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' >
  
<i class="bi bi-person-arms-up h2"></i>
  <h1  >Day-Care Services</h1> 
  
  <h5> * Ages 6 weeks to 5 years.</h5>
  <h5> * Flexible scheduling to accommodate your needs.</h5>
  <h5> * Nutritious meals and snacks.</h5>
  <h5> * Engaging activities and playtime .</h5>
  
  </Card.Body>

</Card>
</Col>

<br/>

<Col md={4} className='mx-2'>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  
<i class="bi bi-person-circle h2"></i>
  <h1  >Nursery School Program</h1> 
  <h5>* Ages 3 to 6 years.</h5>
  <h5>* Structured curriculum focusing on social,emotional, and cognitive development.</h5>
  <h5>* Qualified teachers with a passion for early childhood education.</h5>
  <h5>* Small class sizes for personalized attention.</h5>
  
  </Card.Body>

</Card>
</Col>

<br/>

<Col md={4} className='mx-2'>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  
<i class="bi bi-droplet-half h2"></i>
  <h1  >Our philosophy</h1> 
  <h5>We believe that every child deserves a strong foundation for future success. Our approach emphasizes:</h5>
  <h5>* Play-based learning.</h5>
  <h5>* Positive reinforcement.</h5>
  <h5>* Encouraging curiosity and exploration.</h5>
  
  </Card.Body>

</Card>
</Col>
</Row>

<br/>

{/* <br/>
<Container fluid className='h-100'>
  <Row className='h-100 justify-content-center align-items-center'>
    <Col md={8} lg={6} xl={4} className='my-5'>
    <Card className='shadow-lg'>
      <Card.Body>
        <Card.Text>Admission for 2024/2025 is on </Card.Text>
        <h5>Enroll Now</h5>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</Container> */}

<br/>

<Row className='justify-content-center'>
  <Col md={6} className='mx-auto'>
  <Card style={{  animation:'bounce 1s ease-in-out infinite',borderRadius:'16px',boxShadow:'0,4px 8px rgba(0 ,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,backgroundColor:'#F2F2F2'}}>
    <Card.Body>
  
      <Card.Title className='text-center'>< i  class="bi bi-person-square h2"></i><h1>Primary School</h1></Card.Title>
      <h5> Our primary school is a vibrantand inclusuve community where students from Nursery to year 6 grow and thrive.Our dedicated teachers and staff provide a nurturing environment that fosters academic excellence,
        creativity and social development.
      </h5>

    </Card.Body>
  </Card>
  </Col>
</Row> 
{/* @keyframes bounce{
  0% {
    transform:scale(1)
  },
  50% {
    transform:scale(1.1)

  },
  100% {
    transform: scale (1)
  }


}; */}


<br/>


<Row xs={1} sm={2} md={3} lg={4}  className='justify-content-center'  >
  {/* className='justify-content-center' */}
  {/* <col xs={12} sm={16} md={4} lg={3}> */}
  {/* xs={1} sm={2} md={3} lg={4} */}
  <Col md={4} className='mx-2'>
  <Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' >
  
<i class="bi bi-lightbulb-fill h2"></i>
  <h1  > Our Value</h1> 
  
  <h5> * Providing a safe and supportive  learning environment.</h5>
  <h5> * Encouraging curiosity , creativity and critical thinking.</h5>
  <h5> * Fostering a sense of community and belonging.</h5>
  <h5> * Developing confident , resillent and compassionate individuals .</h5>
  
  </Card.Body>

</Card>
</Col>

<br/>

<Col md={4} className='mx-2'>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  
<i class="bi bi-person-video3 h2"></i>
  <h1  >Our Curriculum</h1> 
  <h5>* English and Literacy.</h5>
<h5>* Mathematics and Numeracy.</h5>
  <h5>* Science and Technology.</h5>
  <h5>* Humanities and Social Sciences.</h5>
<h5>* The Arts and Physical Education.</h5>  
  </Card.Body>

</Card>
</Col>

<br/>


<Col md={4} className='mx-2'>
<Card className='h-100'style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  
<i class="bi bi-building h2"></i>
  <h1  >Our Facilities</h1> 
  <h5>* Modern classromms and learning spaces </h5>
  <h5>* State-of-the-art technology and resources.</h5>
  <h5>* Library and reading rooms .</h5>
  <h5>* Playground and sports facilities.</h5>
  
  </Card.Body>

</Card>
</Col>
</Row>

<br/>

<br/>

<Row className='justify-content-center'>
  <Col md={6} className='mx-auto'>
  <Card style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
    <Card.Body>

<Card.Title className='text-center'>< i  class="bi bi-person-rolodex h2"></i><h1>Our Secondary School</h1></Card.Title>
      <h5> Our secondary school is a vibrantand inclusuve community where students from year10 to year 17 grow and thrive.Our dedicated teachers and staff provide a supportive environment that fosters academic excellence,
        creativity and social development.
      </h5>

    </Card.Body>
  </Card>
  </Col>
</Row> 

<br/>


<Row xs={1} sm={2} md={3} lg={4}  className='justify-content-center'  >
  {/* className='justify-content-center' */}
  {/* <col xs={12} sm={16} md={4} lg={3}> */}
  {/* xs={1} sm={2} md={3} lg={4} */}
  

<Col md={4} className='mx-2'>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  
<i class="bi bi-person-video3 h2"></i>
  <h1  >Our Curriculum</h1> 
  <h5>* English and Literacy.</h5>
<h5>* Mathematics and Numeracy.</h5>
  <h5>* Science and Technology.</h5>
  <h5>* Humanities and Social Sciences.</h5>
<h5>* The Arts and Physical Education.</h5> 
<h5>* Electives and special programs.</h5> 
  </Card.Body>

</Card>
</Col>


<br/>

<Col md={4} className='mx-2'>
<Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  
<i class="bi bi-building h2"></i>
  <h1  >Our Facilities</h1> 
  <h5>* Modern classromms and learning spaces </h5>
  <h5>* State-of-the-art technology and resources.</h5>
  <h5>* Library and reading rooms .</h5>
  <h5>* Science labs and experimentation areas.</h5>
  <h5>* Sports facilities and playgrounds.</h5>
  
  </Card.Body>

</Card>
</Col>

<br/>

<Col md={4} className='mx-2'>
  <Card className='h-100' style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
<Card.Body href='# ' className='responsive-text' >
  
<i class="bi bi-person-arms-up h2"></i>
  <h1>Student Life</h1> 
  
  <h5> * Student council and leadership teams.</h5>
  <h5> * School events and activities.</h5>
  <h5> * Sport teams and competitions.</h5>
  <h5> * Creative arts and performance opportunities .</h5>
  
  </Card.Body>

</Card>
</Col>
</Row>

<br/>
<Row className='justify-content-center'>
  <Col md={6} className='mx-auto'>
  <Card  style={{ backgroundColor:'#F7F7F7',transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
    <Card.Body>

<Card.Title className='text-center'>< i  class="bi bi-puzzle-fill h2"></i><h1>Our Programs</h1></Card.Title>
      <h5>* Academic support and extention programs.</h5>
      <h5>* Extra curricular activities and clubs.</h5>
      <h5>* Leadership and mentorship opportunities.</h5>
      <h5>* Career guidance and counselling.</h5>

    </Card.Body>
  </Card>
  </Col>
</Row> 
<br/>
<Container/>
<Footers/>

    </div>
  )
}

export default Nursery