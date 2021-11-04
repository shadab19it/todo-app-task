import React from "react";
import { Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ToDo List</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
