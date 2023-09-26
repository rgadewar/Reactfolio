import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Google Books Search
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleCollapse} aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className={`ml-auto ${collapseOpen ? 'd-block' : 'd-none d-lg-flex'}`}>
            <Nav.Link as={Link} to="/" className={currentPage === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className={currentPage === '/About' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className={currentPage === '/Contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/Resume" className={currentPage === '/Resume' ? 'active' : ''}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
