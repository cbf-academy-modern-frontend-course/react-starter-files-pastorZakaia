import React, {useState} from 'react';
import Book from './components/Book';
import data from './models/books.json';
import bookList from './components/BookList';
// import Button from './components/Button';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import header from './components/Header'

import Search from './components/Search'
import keyword from './components/Search'




function App() {
  const [books, setbooks] = useState(data);
  
  async function findBooks(value) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=$%7Bvalue%7D&filter=paid-ebooks&print-type=books&projection=lite`;

    console.log(url)
  
    const results =await fetch(url).then(res => res.json());
    if (!results.error) {
      setbooks(results.items);
    }
  }
  
  return (
    <div>

    
  <div>
     <h2>Welcome to my e-bookshop</h2>
    <Search findBooks ={findBooks} keyword={keyword} setKeyword={setKeyword}/>
    
    <bookList book={bookList}/>
    {books.map((book) => <Book key={book.id} book={book} />)}
 
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
</div>)

function getValue(keyword) {
  return
}



}


export default App;