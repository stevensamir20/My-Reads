import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Book = (props) => {
  const book = props.book;

  const navigate = useNavigate();

  const navigateToBook = () => {
    navigate(`/books/${book.id}`);
  }

  const changeBookShelf = (e) => {
    props.changeShelf(book, e.target.value);
  }

  return (
    <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              cursor: `pointer`,
              width: 128,
              height: 188,
              backgroundImage:`url(${book.imageLinks.thumbnail})`
            }}
            onClick={() => navigateToBook()}
            >
          </div>
          <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => changeBookShelf(event)}>
              <option disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title" onClick={() => navigateToBook()}>{book.title}</div>
        { book.authors?.map((item) => {
           return( <div className="book-authors" key={item}>{item}</div>)
        })}
    </div>
  )
}