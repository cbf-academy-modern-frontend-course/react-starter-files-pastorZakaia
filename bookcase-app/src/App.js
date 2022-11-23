import React, {useState} from 'react';
import Book from './components/Book';
import data from './models/books.json';
import bookList from './components/BookList';
// import Button from './components/Button';
// import {Route, Routes} from 'react-router-dom';

import Search from './components/Search'




function App() {
  const [books, setbooks] = useState(data);
  // const books = data; line 9 and 10 do the same thing
  return (
  <div>
     <h2>Welcome to my e-bookshop</h2>
    <Search/>
    
    <bookList book={bookList}/>
    {books.map((book) => <Book key={book.id} book={book} />)}
 
</div> ) 
}
export default App;