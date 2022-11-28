import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Header";
import "./About.css";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4em;
  background: #94abbe;
`;

function About() {
  return (
    <div>
      <Wrapper>
        <Container>
          <div className="about-bg">
            <h3>Welcome to the Bookcase application</h3>
            <p>
              The following application was create by Zakiya. This bookcase app
              displays a list of books that a user can save to a local bookcase.
              <br />
              Click on the 'Add +' button to add a book to your bookcase. Use
              the search bar to find the latest books by name, author, or
              description.
            </p>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}
export default About;
