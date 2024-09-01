import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import Footers from '../components/Footers'

const ContactUsPages = () => {
  return (
    <div style={{ backgroundColor:'#06D001'}}>
                  <Card >
    <Image src='/images/old school.jpg' fluid
 className='w-90 w-md-75 w-lg-50'
 style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}/>
      <Card.Body>
      </Card.Body>

      <Container className='position-absolute top-50 start-50 translate-middle'>
        <Row>
          <Col className='text-center'>
          <Card.Text className='text-white fw-bold'><h1>Contact Us</h1></Card.Text>
          </Col>
        </Row>

      </Container>
    </Card>
<Col className='text-center '>
    <Card.Text ><h1> General Contact Information</h1></Card.Text>
    </Col>

    <Row xs={1} sm={2} md={3} lg={4}  className='justify-content-center'  >
  {/* className='justify-content-center' */}
  {/* <col xs={12} sm={16} md={4} lg={3}> */}
  {/* xs={1} sm={2} md={3} lg={4} */}
  <Col md={4} className='mx-2'>
  <Card className='h-100'>
<Card.Body href='# ' className='responsive-text' >
  

  <h2> <i class="bi bi-geo-alt-fill h2"></i> Address</h2>
  <h5> Plot 8, Grace Estate, Behind Cele 1, Idanyin , Ogun State.</h5> 
  

  
  </Card.Body>

</Card>
</Col>

<Col md={4} className='mx-2'>
<Card className='h-100'>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  

  <h2 ><i class="bi bi-telephone-fill h2"></i>Contact</h2> 
  <h5>Line 1 : 09068103355</h5>
  <h5>Line 2 : 08086853726</h5>
  <h5>Email  : god'sgraceroyalschools@gmail.com</h5>

  
  </Card.Body>

</Card>
</Col>


<Col md={4} className='mx-2'>
<Card className='h-100'>
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:''}}>
  

  <h2  ><i class="bi bi-clock h2"></i>Hour of operation</h2> 
  <h5>Monday - thursdays: 07:00am - 17:00pm</h5>
  <h5>Fridays : 07:00am- 14:00pm</h5>
  
  </Card.Body>

</Card>
</Col>
</Row>
<br/>
<Footers/>
    </div>
  )
}

export default ContactUsPages