import { Carousel, Col, Container, Image, Row , } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import React ,{UseState} from 'react';
function Testimonials() {
  // const[showMore,setShowMore] = UseState(false);
  return (
    <Container style={{backgroundColor:''}}>

      <Row className="align-items-center">
        <Col md={6}>
        <h1 className="text-center " variant="top" >Our Focus</h1>
        <h4 className="text-top">            
            The focus of God's Grace Royal Schools is to  lead the school to greater height to create awareness
            of the culture of the school through the activities of both pupils and staff.To encorage children who are 
            already in the correct habit of reading to do so with sense of fulfillment. To continue to offer quatitative education
            to the children and to lay solid foundation through high sense of school management and see the pupils/students in everyday 
            activities.
</h4>

<Link to="/about">
        <Button 
        variant="success"
        size="lg"
        className="d-block d-sm-inline-block">
          Learn More
        </Button>
        </Link>
        </Col>

        <Col md={6}>
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100 text" 
            src="public/assets/oldtt.jpg"
             class="img-fluid h-100 border"
            alt="Slide 1"
            style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
            className="d-block w-100" 
            src="public/assets/Premium .jpg"
            alt="Slide 2"
            style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
            className="d-block w-100 float-right" 
            src="public/assets/ED443.jpg"
             class="img-fluid h-100 border"
            alt="Slide 3"
            style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
            className="d-block w-100 float-right" 
            src="public/assets/hgjrjqwj.jpg"
             class="img-fluid h-100 border"
            alt="Slide 4"
            style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
            className="d-block w-100 float-right" 
            src="public/assets/Blue.jpg"
             class="img-fluid h-100 border"
            alt="Slide 5"
            style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
            />
          </Carousel.Item>
        </Carousel>
        </Col>
      </Row>
    {/* <Card className="h-100"  style={{backgroundColor:''}}>
      <Row className="h-100">
        <Col  md={8}  className="d-flex align-items-center">
        <Card.Body>
          <Card.Text className="responsive-text">
            
            The focus of God's Grace Royal Schools is to be the best.The best in all facets
             of our  operations-curriculum,teaching,methodologies,staff quality,libraries,
             technology 
            , infastructure and so on.
           

  
            
              

            {/* {showMore ? (
              <span> */}
               {/* it's our vision to produce well-developed children, with the abilities
               to build a better future in changing the world and by inculcating
              high moral and ethical values that will prepare them for a life of service
               and comittment. */}
               {/* <Button
               variant="link"
               size="sm"
               onClick={() => setShowMore(false)}
               >
                Show Less
               </Button>

              </span>

            ):(
              <Button
              variant="link"
              size="sm"
              onClick={() =>
                setShowMore(true) }
                >
                  Learn More
                </Button>
            )
          } */}
            
{/* 
          </Card.Text>
        </Card.Body>
        </Col> 

        <Col md={4}  className="text-center">
        <Card.Img variant="top"
        src="public/assets/admission.jpg"
        className="  img-fluid"
        style={{maxHeight:'150px'}}/>
        </Col>

        
      </Row>

    </Card>  */}
    </Container>
  );
}

export default Testimonials;
