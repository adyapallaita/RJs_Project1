import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header_nav() {
    return (
        <>
       <Navbar bg="dark"  expand="lg" className='text-white'>
      <Container fluid className='text-white'>
        <Navbar.Brand href="#" className='text-white'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='text-white' />
        <Navbar.Collapse id="navbarScroll" className='text-white'>
          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Link</Nav.Link>
         
            <Nav.Link href="#" disabled className='text-white'>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
    );
}

export default Header_nav;