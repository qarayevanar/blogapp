import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand ><Link className='text-dark' style={{"textDecoration":"none"}} to='/'>Blog App</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link ><NavLink className='text-dark' style={{"textDecoration":"none"}} to='/'>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink className='text-dark' style={{"textDecoration":"none"}} to='blogs'>Blogs</NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="d-flex">
        <Link to="/login"><Button variant="success">Login</Button></Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header