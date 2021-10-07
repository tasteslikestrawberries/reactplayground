import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  Link
} from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <Navbar id="navbar" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
          <Nav className="mr-auto">

             <Nav.Link as={Link} to="/form">Form</Nav.Link>
             <Nav.Link as={Link} to="/table">Table</Nav.Link>
             <Nav.Link as={Link} to="/playground">Playground</Nav.Link>
             <Nav.Link as={Link} to="/codepractice">Code Practice</Nav.Link>
  
        </Nav>
      </Navbar>
    </>
  );
}


export default Navigation