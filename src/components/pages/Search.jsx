import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "../Book";
import { search } from "../../BooksAPI";

let searchTimeout = null;
export const Search = (props) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (searchQuery) {
      searchTimeout = setTimeout(() => {
        search(searchQuery, 10).then((books) => {
          setBooks(books ? books : []);
        });
      }, 500);
    } else {
      setBooks([]);
    }
  }, [searchQuery]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          {" "}
          Close{" "}
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books?.map((item) => {
            return (
              <li key={item.id}>
                <Book book={item} changeShelf={props.changeShelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
