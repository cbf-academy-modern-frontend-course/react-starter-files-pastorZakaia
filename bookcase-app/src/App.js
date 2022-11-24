import React, { useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
// import Button from './components/Button';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Search from "./components/Search";
import keyword from "./components/Search";

function App() {
  const [books, setbooks] = useState(data);
  const [keyword, setKeyword] = useState("");

  async function findBooks(value) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=$%7Bvalue%7D&filter=paid-ebooks&print-type=books&projection=lite`;

    console.log(URL);

    const results = await fetch(URL).then((res) => res.json());
    if (!results.error) {
      setbooks(results.items);
    }
  }
  function getValue(keyword) {
    return;
  }
  return (
    <div>
      <div>
        <h2>Welcome to my e-bookshop</h2>
        <Search
          findBooks={findBooks}
          keyword={keyword}
          setKeyword={setKeyword}
        />

        <BookList books={books} />
      </div>

      <div>
        {/* <BrowserRouter>
<Routes>
  <Route 
  exact 
  path='/' 
  render= {()=> (
  <>
    <header />
    <h2>Welcome to the Bookcase App</h2>
    <BookList books ={books}/>
  </>
  )} />
  <bookcase />
<Routes>
</BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
