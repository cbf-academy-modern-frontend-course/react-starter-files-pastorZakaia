import react from 'react'
import Book from './Book';

const bookList = ({book}) => {
    return(
        <div>
            <Book book={book}/>
        </div>
    )
}

export default bookList;