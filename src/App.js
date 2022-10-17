import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Search } from "./components/pages/Search";
import { NotFound } from "./components/pages/NotFound";
import * as API from './BooksAPI'
import { useEffect, useState } from "react";
import { BookDetails } from "./components/pages/BookDetails";

function App() {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    API.getAll().then((res) => {
       setBooks(res);
      })
  }, [])

  const changeShelf = (book, shelf) => {
    if (book.shelf) {
      let newBooks = [...books]
      const bookIndex = books.indexOf(book);
      books[bookIndex].shelf = shelf;
      setBooks(newBooks);
      API.update(book, shelf);
    }
    else {
      API.update(book, shelf)
      .then(() => {
        API.getAll().then((res) => {
          setBooks(res);
         })
      })
    }
  }
  
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home books={books} changeShelf={changeShelf}/>} />
        <Route path="books/:bookId" element={ <BookDetails />}/>
        <Route path="search" element={<Search books={books} changeShelf={changeShelf}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;