import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Nursery from '../components/Nursery';
import Academics from '../components/Academics';
// import { Link } from 'react-router-dom';

function FluidExample() {
  return (
    <>
   
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

    <Row className='g-0'>
      <Col md={6} className='pe-0'>
      <Card>
        <Card.Body>
          <Card.Text>
            <h1 className='text-center'>DayCare/Nursery Schools</h1>
            <h5>God's Grace provide a safe nurturing environment for children to learn, grow , and thrive. Our experienced staff are dedicated
              to delivering high-quality care and education for your little ones.
            </h5>

          </Card.Text>
          <Link to="/nursery">
      <Button
        variant="primary"
        size="lg"
        className="d-block d-sm-inline-block">

<i class="bi bi-arrow-left h2"></i>
        </Button>
          
    </Link>
        </Card.Body>
      </Card>
      </Col>
      <Col md={6} className='ps-0'>
      <Card>
        <Image src='src/assets/nnnn.jpg'fluid style={{maxHeight:'200px', width:'100%',objectFit:'cover'}}/>
      </Card>
      </Col>


    </Row>
    <br/>

<Row className='g-0'>
  <Col md={6} className='ps-0'>
  <Card>
    <Image src='src/assets/test3.jpg' style={{maxHeight:'200px', width:'100%',objectFit:'cover'}} fluid />
  </Card>
  </Col>
  <Col md={6} className='pe-0'>
  <Card.Body>
    <Card.Text>
      <h1 className='text-center'>Our Primary School</h1>
    </Card.Text>
  </Card.Body>
  </Col>
</Row>


<br/>
  
    <Row className='g-0'>
      <Col md={6} className='pe-0'>
      <Card>
        <Card.Body>
          <Card.Text>
            <h1 className='text-center'>Our Secondary Schools</h1>
            <h5>God's Grace provide a safe nurturing environment for children to learn, grow , and thrive. Our experienced staff are dedicated
              to delivering high-quality care and education for your little ones.
            </h5>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col md={6} className='ps-0'>
      <Card>
        <Image src='src/assets/nnnn.jpg'fluid style={{maxHeight:'200px', width:'100%',objectFit:'cover'}}/>
      </Card>
      </Col>


    </Row>
    <br/>

    <Container className='text-center'> 
      <Row className='justify-content-center'>
      <Col md ={4} className='mb-4 mb-md-0'>
      <Card>
        <Card.Body>
          <Card.Text>
          <i class="bi bi-lightbulb-fill h2"></i>
            <h1>Academics</h1>
            <h5>An education at Caleb has limitless possibilities. Our courses are taught by esteemed faculty members.</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col md ={4} >
      <Card>
        <Card.Body>
          <Card.Text>
          <i class="bi bi-puzzle-fill h2"></i>
          <h1>Career Development</h1>
         <h5> We empower you to discover your interests and pursue your passions while studying.</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      </Row>
    </Container>
    

    

  
   
    </> 
  
  )
}

export default FluidExample;