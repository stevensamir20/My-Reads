import React from 'react'
import { Book } from './Book'

export const BookShelf = (props) => {
  const shelfBooks = props.shelfBooks;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {
          shelfBooks.map((item) => {
              return(
              <li key={item.id}>
                  <Book book={item} changeShelf={props.changeShelf}/>
              </li>
              )
          })
        }
        </ol>
      </div>
    </div>
  )
}
