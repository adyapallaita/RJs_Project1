import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cardimg1 from'../assets/img/card/c1.jpg'
import Cardimg2 from'../assets/img/card/c2.jpg'
import Cardimg3 from'../assets/img/card/c3.jpg'

function Card_section() {
    return (

        <div className='container'>
             <Row xs={1} md={3} className="g-4">
      {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
        <Col>
        
        <Card>
      <Card.Img variant="top" src={Cardimg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
        <Card >
      <Card.Img variant="top" src={Cardimg2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
    <Col>
        <Card >
      <Card.Img variant="top" src={Cardimg3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        {/* ))} */}
         </Row>
        </div>

    );
}

export default Card_section;