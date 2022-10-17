import React from 'react'
import { Link } from 'react-router-dom';
import {BookShelf } from '../BookShelf';

export const Home = (props) => {
  const books = props.books;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf 
          shelfName = "Currently Reading"
          shelfBooks={books.filter((item) => (item.shelf === "currentlyReading"))} 
          changeShelf={props.changeShelf}
        />
        <BookShelf 
          shelfName = "Want to Read"
          shelfBooks={books.filter((item) => (item.shelf === "wantToRead"))} 
          changeShelf={props.changeShelf}
        />
        <BookShelf 
          shelfName = "Read"
          shelfBooks={books.filter((item) => (item.shelf === "read"))} 
          changeShelf={props.changeShelf}
        />
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}