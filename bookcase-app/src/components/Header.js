import React, { useState, useEffect } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
// import PageTitle from
// import styled from 'styled-components';
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import About from "./pages/About";
import styled from "styled-components";

const Headerstyle = styled.section`
  background: #86a2bb;
  font-family: "Nunito Sans", sans-serif;
  padding: 20px;
  display: block;
  border-radius: 6px;
`;

function Header() {
  return (
    <>
      <Container>
        <Headerstyle>
          <h1> My e-Bookshop</h1>
          <Nav className="me-auto">
            {" "}
            <Nav.Link>
              {" "}
              <Link to="/">Home</Link>{" "}
            </Nav.Link>
            <div> </div>
            <Nav.Link>
              {" "}
              <Link element={About} to="/About " className="About">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Headerstyle>
      </Container>
    </>
  );
}
export default Header;
