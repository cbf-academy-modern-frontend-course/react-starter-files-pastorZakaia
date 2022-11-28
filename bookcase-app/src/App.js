import React, { useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import keyword from "./components/Search";
import About from "./components/pages/About";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const BackC = styled.section`
  background: #b4d4f1;
`;
function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");

  function addBook(title) {
    {
      console.log(`The Book '${title}' was clicked`);
    }
  }

  async function findBooks(value) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${value}}&filter=paid-ebooks&print-type=books&projection=lite`;
    //https://www.googleapis.com/books/v1/volumes?q=$%{7Bvalue%7D}&filter=paid-ebooks&print-type=books&projection=lite`;

    console.log(URL);

    const results = await fetch(URL).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }
  // function getValue(keyword) {
  //   return;
  // }
  return (
    <div>
      <BackC>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Homepage
                  books={books}
                  setBooks={setBooks}
                  addBook={addBook}
                  getValue={findBooks}
                  keyword={keyword}
                  setKeyword={setKeyword}
                />
              }
            />

            <Route path="/bookcase" element={<BookList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </BackC>
    </div>
  );
}

export default App;
