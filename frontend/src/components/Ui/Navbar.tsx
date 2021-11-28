import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Navbar, Container, Nav } from "react-bootstrap"; //NavDropdown
export default function Navigation() {
  return (
    <Navbar
      className="fixed-top"
      // style={{ marginBottom: "50px" }}
      bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/" id="Logo">
          Pastel <span id="star">*</span> Palletes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="deck">완덱</Nav.Link>
            <Nav.Link href="member">멤버 소개</Nav.Link>
            <Nav.Link href="story">스토리</Nav.Link>
            <Nav.Link href="illust">사진 모음</Nav.Link>
            <Nav.Link href="board">게시판</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
