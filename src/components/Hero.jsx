import { Col,  Image,  Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel style={{backgroundColor:'#228B22' , height:'100%'}}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        
        <Row>
         
         <Col  md-4 mb-2className='text-center'>
         
         <Image
         rectangle
         fluid
         src='/images/12345.jpg'
         loading='lazy'
         alt="me"
          class="img-fluid h-100 border"
         width="100%" height="2%"
         style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
         display="in-line block"
         alignItem="flex"
       
     />
         </Col>
       </Row>
        <Carousel.Caption className='carousel-captiom-custom-height'>
          <h2 >Welcome To Our School</h2>
          <h1  className='card-text bounce-animate' style={{animation:'bounce 1s infinite'}}>God's Grace Royal School.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Row>
         
         <Col md-4 mb-2 className='text-center'>
         
         <Image
         rectangle
         fluid
         src='/images/E4D.jpg'
         loading='lazy'
          class="img-fluid h-100 border"
         alt="me"
         width="100%" height="8%"
         style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
         display="in-line block"
         alignItem="flex"
       
     />
         </Col>
       </Row>
       
        <Carousel.Caption className='carousel-captiom-custom-height'>
          <h3 className='card-text bounce-animate' style={{animation:'bounce 1s infinite'}}>We don't just teach but </h3>
          <h4  className='card-text bounce-animate' style={{animation:'bounce 1s infinite'}}>we build future leaders</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Row>
         
         <Col md-4 mb-2 className='text-center'>
         
         <Image
         rectangle
         fluid
         src='/images/seemnnn.jpg'
         loading="lazy"
          class="img-fluid h-100 border"
         alt="me"
         width="100%" height="8%"
         style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
         display="in-line block"
         alignItem="flex"
       
     />
         </Col>
       </Row>
        <Carousel.Caption className='carousel-captiom-custom-height'>
          <h3> We are the best choice for your wards.</h3>
        <h2>The No 1 citadel of learning.</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
   
  );
}

export default Hero;