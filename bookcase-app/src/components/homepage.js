import Header from "./Header";
import BookList from "./BookList";
import Book from "./Book";
import Search from "./BookList";

function Homepage({
  books,
  addBook,
  findBooks,
  keyword,
  setKeyword,
  getValue,
}) {
  return (
    <div>
      <Header />
      <h2> Welcome the Bookcase App</h2>
      <Search
        getValue={getValue}
        findBooks={findBooks}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <BookList>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            addBook={() => addBook(book.volumeInfo.title)}
          />
        ))}
      </BookList>
    </div>
  );
}

export default Homepage;
