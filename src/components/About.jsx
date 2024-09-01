import React from 'react'
import { Button, Card, Carousel, Col, Container, Image, Row, } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import Footers from '../components/Footers'


const AboutPages = () => {
  return (
    <div fluid className=' py-5'     style={{backgroundColor:'#06D001'}    }>
            <Card >
    <Image src='src/assets/sssss.jpg' fluid 
 className='w-90 w-md-75 w-lg-50'
 style={{maxHeight:'500px', width:'100%',objectFit:'cover'}}/>
      <Card.Body>
    
      </Card.Body>

      <Container className='position-absolute top-50 start-50 translate-middle'>
        <Row>
          <Col className='text-center'>
          <Card.Text className='text-white fw-bold'><h1>About Us</h1></Card.Text>
          </Col>
        </Row>

      </Container>
    </Card>
    
      



{/* About us */}


<Row className='align-items-center'>
  <Col md={6} style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)', backgroundColor:'#F7F7F7'}}>
  <h1 className='text-center' >Brief History</h1>
  <h6 className=""  >            
      The school God's Grace Royal Schools formerly known as Ore Ofe Private School at plot8,Grace Estate,Behind Cele 1, Idanyin, Agbara Atan Road Ogun State 
      is owned by Senior Evangelist Noah Balogun (jp) . the idea of Establishing the school was brought up by three(3) church members and the shepherd(SNR EVANG NOAH BALOGUN JP) which was
      established on september 21st 2011,owned and sponsored simultaneousely by Senior Evangrlist Noah Balogun and supported by his darling wife MRS Kemi Balogun.The school derived her name from the propietor church name ORE-OFE CENTRAL PARISH. 
      The school started with pre-primary and primary which started with precise number of 10 pupils and dedicated teacher (MRS Fatoki) she was appointed by the propietor as the first teacher of the School being 
      handled by her.She served from (2011-2014) The school with three(3) classes.
        Shortly after,the Secondary School also started in 2015. At that time the propietor also appointed anew principal.The school name was later changed to GOD'S GRACE ROYAL SCHOOLS in 2018,the school is built on 3 plots of land with a good 
        entrance gate and conducive environment of learning.The propietor daughter (Miss Balogun Senami) took over as the MD/principals of the school in 2019 till date.
      
</h6>
</Col>

<Col md={6}>
  <Carousel>
    <Carousel.Item>
      <img
      className="d-block w-100 text" 
      src="src/assets/Premium .jpg"
      alt="Slide 1"
      style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
      className="d-block w-100" 
      src="src/assets/12eee.jpg"
      alt="Slide 2"
      style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
      className="d-block w-100 float-right" 
      src="src/assets/IMGspell africa.jpg"
      alt="Slide 3"
      style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
      className="d-block w-100 float-right" 
      src="src/assets/indomie.jpg"
      alt="Slide 4"
      style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
      className="d-block w-100 float-right" 
      src="src/assets/IMGssss.jpg"
      alt="Slide 5"
      style={{maxHeight:'800px', width:'100%',objectFit:'cover'}}
      />
    </Carousel.Item>
  </Carousel>
  </Col>
  
  </Row>
<br/>

{/* <methodology section></methodology    > */}
<Row className='justify-content-center' h-70>
  <Col md={6} className='mx-auto'>
  <Card   style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
    <Card.Body>
  
      <Card.Title className='text-center'>< i  class="bi bi-exclude h2"></i><h1>OUR METHODOLOGY</h1></Card.Title>
      <h6 className='text-responsive'>The methodology of education at God's Grace Royal Schools is child oriented. Each student is seen as unique,
         and the best teaching methods for individual students are deployed. Students with academic challenges have their needs met at God's Grace.  Every God's Grace student is permitted to 
           fully develop his/her potential without undue hindrances. A well rounded and comprehensive educational system produces a 
           balanced student using three domains: affective, psychomotor and cognitive. This produces balanced and well-equipped youths who 
           have the best chance of becoming matured and responsible students. They will grow into citizens who can confidently use relevant modern 
           technology, methodology and artistry to contribute their unique and blooming abilities in uplifting the environment. Because of our goals 
        for the students, only qualified teachers with solid years of experience are employed at God's Grace Royal Schools.</h6>
        </Card.Body>
  </Card>
  </Col>
</Row>

<br/>

{/* <other cards></other> */}
  <Row xs={1} sm={2} md={3} lg={4}  className='justify-content-center'   >  
  {/* className='justify-content-center' */}
  {/* <col xs={12} sm={16} md={4} lg={3}> */}
  {/* xs={1} sm={2} md={3} lg={4} */}
  <Col md={4} className='mx-2'>
  <Card className='h-100' >
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:'#F7F7F7'}} >
  
<i class="bi bi-inbox-fill h2"></i>
  <h4  >MISSION STATEMENT</h4> 
  
  <h5> God's Grace Royal Schools is committed to being a unique learning center where a child is nurtured to be a
    Creative and resourceful being who become leaders and role models of excellence in character and learning.</h5>
  
  </Card.Body>

</Card>
</Col>

<Col md={4} className='mx-2'>
<Card className='h-100' >
<Card.Body href='# ' className='responsive-text' style={{backgroundColor:'#F7F7F7'}}>
  
<i class="bi bi-eye-fill h2"></i>
  <h4  >VISION STATEMENT</h4> 
  <h5>God's Grace Royal Schools vision is to produce well-developed children with creative abilities to build
    a better future in  a changing world.
  </h5>
  
  </Card.Body>

</Card>
</Col>


<br/>
<Col md={4}  className='mx-2'>
<Card className='h-80'>
<Card.Body href='# ' className='responsive-text'  style={{backgroundColor:'#F7F7F7'}}>
  
<i class="bi bi-layers-fill h2"></i>
  <h4>AIMS & OBJECTIVE</h4> 
  <h5> * To provide high quality teaching and learning experiences to enable all 
    children to achieve highest possible standards in all acrase of the curriculumn which is  boerd, balance relevant and differetiated
    and also meets the need of all the children with special educational needs.</h5>
    <h5>* To encourage creative ,enquiring mind.</h5>
    <h5>* To enable each child to reach their full potentials by fostering self esteem and a sense of achievement. </h5>
    <h5>* To ensure equal opportunities for all children.</h5>
    <h5>* To continuously review and monitor our practise to raise standards. </h5>
    <h5>* To provide a rich stimulating and caring environment in what the child feets happy,secure and confidence.</h5>
  
  </Card.Body>
</Card>
</Col>


<br/>




{/* <management></management> */}


</Row>
      
<Card.Text className='text-center'><h1>OUR MANAGEMENT TEAM</h1></Card.Text> 
<Row   className='justify-content-center'  >
     
    
    {/* <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}


       <Col md={6}  className='mx-auto'> 
         <Card style={{transition:"all 0.3s ease-in-out ", borderRadius:'16px',boxShadow:'4px 8px rgba(0,0,0,0.1)', border:'1px', width:'100%', maxWidth:'400px', margin:'auto' ,'&:hover':{boxShadow:'0 8px 16px rgba(0,0,0.2)', transform:'scale(1.05)'},transform:'scale(1.05)',}}>
          <Card.Img variant="top"
            src="src/assets/manage.jpg"
            className="img-fluid" />
          <Card.Body>
            <Card.Title><h1>Director/Principal</h1></Card.Title>
            <Card.Text><h5>Miss Balogun senami </h5> </Card.Text>
          </Card.Body>
        </Card>
      </Col>  
      

    


      </Row>

      <br/>
      <Footers/>
    </div>
    
  )
}

export default AboutPages