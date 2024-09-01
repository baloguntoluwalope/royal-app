import { Col, Image, Row , } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from 'react'

const Programs = () => {
  return (
    <div style={{backgroundColor:""}}>
      <Card.Text className='text-center'><h1>Upcoming Events</h1></Card.Text>
        
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Card className="h-100">
      <Row className="h-100">
        <Col md={8} className="d-flex align-items-center">
        <Card.Body>
          <Card.Text>
            <h1>
            Resumption
            16th September
            </h1>
          </Card.Text>
        </Card.Body>
        </Col> 

        <Col md={4}  className="text-center">
        <Card.Img variant="top"
        src="/images/back.jpg"
        className="img-fluid"
        style={{maxHeight:'150px'}}/>
        </Col>
      </Row>
      </Card>


      <Card className="h-100">
      <Row className="h-100">
        <Col md={8} className="d-flex align-items-center">
        <Card.Body>
          <Card.Text>
            <h1>
            Cooperate Day
            </h1>
          </Card.Text>
        </Card.Body>
        </Col> 

        <Col md={4}  className="text-center">
        <Card.Img variant="top"
        src="/images/admission.jpg"
        className="img-fluid"
        style={{maxHeight:'150px'}}/>
        </Col>
      </Row>
      </Card>


      <Card className="h-100">
      <Row className="h-100">
        <Col md={8} className="d-flex align-items-center">
        <Card.Body>
          <Card.Text>
            <h1>
            Fruit Day
            </h1>
          </Card.Text>
        </Card.Body>
        </Col> 

        <Col md={4}  className="text-center">
        <Card.Img variant="top"
        src="/images/admission.jpg"
        className="img-fluid"
        style={{maxHeight:'150px'}}/>
        </Col>
      </Row>
      </Card>
      

      <Card className="h-100">
      <Row className="h-100">
        <Col md={8} className="d-flex align-items-center">
        <Card.Body>
          <Card.Text>
            <h2>
            Old-school/History Day
            </h2>
          </Card.Text>
        </Card.Body>
        </Col> 

        <Col md={4}  className="text-center">
        <Card.Img variant="top"
        src="/images/admission.jpg"
        className="img-fluid"
        style={{maxHeight:'150px'}}/>
        </Col>
      </Row>
      </Card>

      <Card className="h-100">
      <Row className="h-100">
        <Col md={8} className="d-flex align-items-center">
        <Card.Body>
          <Card.Text>
            <h1>
            Creative Day
            </h1>
          </Card.Text>
        </Card.Body>
        </Col> 

        <Col md={4}  className="text-center">
        <Card.Img variant="top"
        src="/images/admission.jpg"
        className="img-fluid"
        style={{maxHeight:'150px'}}/>
        </Col>
      </Row>
      </Card>

      <Card className="h-100">
      <Row className="h-100">
        <Col md={8} className="d-flex align-items-center">
        <Card.Body>
          <Card.Text>
            <h1>
            Career Day
            </h1>
          </Card.Text>
        </Card.Body>
        </Col> 

        <Col md={4}  className="text-center">
        <Card.Img variant="top"
        src="/images/Career Day.jpg"
        className="img-fluid"
        style={{maxHeight:'150px'}}/>
        </Col>
      </Row>
      </Card>




      </Row>
    </div>
    
  )
}

export default Programs