import React from "react";
import Book from "./Book";

const BookList = (props) => {
  return <div>{props.children}</div>;
};
// return props.books.map((book) => <Book book={book} />);
export default BookList;
