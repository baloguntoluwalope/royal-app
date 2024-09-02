import { Carousel, Col, Image, Row , } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from 'react'
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
const Appreciations = () => (

  <div style={{ backgroundColor: "" }}>
  
      <Card.Text className='text-center'><h1>Know us more</h1></Card.Text>
      <Carousel controls={false} interval={3000}>
      <Carousel.Item>
    
      <Row >
      {/* className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" */}
        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top"
              src="/images/lab3.jpg"
              loading="lazy"
              className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Facilities</h1></Card.Title>
              <Card.Text> Welcome to our laboratory,our lab is fully equipped for Science,Technology, and Engineering.Our facilities is designed to foster academic excellence, creativity,and physical well- being.With natural light and modern amenities,our students have the ideal space to learn,grow and thrive.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top"
              src="/images/IMG.jpg"
              loading="lazy"
              style={{backgroundColor:''}}
              className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Excursions</h1></Card.Title>
              <Card.Text> We take learning beyond the classroom, we're creating a more engaging,
                interactive,and memorable educational experience for our students. </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top"
              src="/images/IMG2023.jpg"
              loading="lazy"
              className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Extra-curricular Activities</h1></Card.Title>
              <Card.Text> Our other activities provides
                students with opportunities to explore their passions, develop new skills,
                and build lasting relatioships .  our activities includes, sports, Music& Arts,clubs etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
        
      
    <Link to="/about">
      <Button
        variant="success"
        size="lg"
        className="d-block d-sm-inline-block">
        Explore More
      </Button>
    </Link>
    {/* <i class="bi bi-arrow-right h2"></i>/ */}




  </Row>
  </Carousel.Item>
  </Carousel>   
    </div>
  )


export default Appreciations