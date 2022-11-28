import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Bookbg = styled.div`
  background-color: #525fd1;
  margin: 50px 100px 50px 100px;
  padding: 20px;
  border-radius: 20px;
  background: #86a2bb;
  box-shadow: 16px 16px 32px #9dd3f9, -16px -16px 32px #e3ebf1;
`;

const Book = ({ book }) => {
  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
    saleInfo: { retailPrice },
  } = book;
  const addBook = (title) => {
    console.log(`The Book '${title}' was clicked`);
  };
  return (
    <div>
      <Bookbg>
        <h1>{title}</h1>
        {authors?.length > 1 ? (
          <p>{authors.join(" and ")}</p>
        ) : (
          <p>{authors}</p>
        )}

        <img src={thumbnail} alt={title} />

        <div>
          <Button variant="outline-dark" size="sm" onClick={addBook(title)}>
            Add +
          </Button>
        </div>

        {book ? (
          <p>£{retailPrice && retailPrice.amount}</p>
        ) : (
          <p>No price found</p>
        )}
        <p>{description?.substring(0, 200)}...</p>
      </Bookbg>
    </div>
  );
};
Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired }),
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.string.isRequired,
    }),
  }),
};
Book.defaultProps = {
  saleInfo: {
    retailPrice: {
      amount: "No price provided",
    },
  },
  volumeInfo: {
    title: "No title provided",
    authors: "No authors provided",
    description: "No description provided",
    imageLinks: {
      thumbnail: "No thumbnail provided",
    },
  },
};
export default Book;
