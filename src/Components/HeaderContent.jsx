import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../Styles/HeaderContent.css";

function HeaderContent() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">MODE UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#cardaccess">Card Access</Nav.Link>
            <Nav.Link href="#banking">Banking</Nav.Link>
            <Nav.Link href="#processing">Processing</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#carrer">Carrer</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            <button
              className="btn"
              style={{ marginRight: "0.5rem", backgroundColor: "grey" }}
            >
              Login
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderContent;
