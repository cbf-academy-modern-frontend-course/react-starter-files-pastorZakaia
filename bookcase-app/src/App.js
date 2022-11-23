import React, {useState} from 'react';
import Book from './components/Book';
import data from './models/books.json';
import bookList from './components/BookList';
// import Button from './components/Button';
// import {Route, Routes} from 'react-router-dom';

import Search from './components/Search'
import keyword from './components/Search'




function App() {
  const [books, setbooks] = useState(data);
  async function findBooks(value) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=$%7Bvalue%7D&filter=paid-ebooks&print-type=books&projection=lite`;
  
    const results =await fetch(url).then(res => res.json());
    if (!results.error) {
      setbooks(results.items);
    }
  }
  // const books = data; line 9 and 10 do the same thing
  return (
  <div>
     <h2>Welcome to my e-bookshop</h2>
    <Search findBooks ={findBooks} keyword={keyword} setKeyword={setKeyword}/>
    
    <bookList book={bookList}/>
    {books.map((book) => <Book key={book.id} book={book} />)}
 
</div> ) 
}

export default App;