import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../BooksAPI';
import { Loader } from '../Loader';
import { Link } from 'react-router-dom'

export const BookDetails = () => {

  const { bookId } = useParams();
  const [ book, setBook] = useState({});
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    get(bookId).then((res) => {
      setBook(res);
      setLoading(false);
    })
  }, [bookId])

  // if promise is on pending state
  if (loading) {
    return (
      <Loader />
    );
  }
  
  return (
    <div className='book-details'>
      <Link className="close-search" to="/"> Close </Link>
      <h1>{book.title}</h1>
      <h3><i>{book.subtitle}</i></h3>
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 188,
          backgroundImage:`url(${book.imageLinks.thumbnail})`
        }}>
      </div>
      <div>
        <h4><i>Author:</i> { book.authors?.map((item) => { return( <span key={item}>{item}</span>)})}</h4>
        <h4><i>Publisher:</i> {book.publisher}</h4>
        <h4><i>Page count:</i> {book.pageCount}</h4>
        <h4><i>Publish date:</i> {book.publishedDate}</h4>
        <h4><i>Language:</i> {book.language}</h4>
        <h4><i>Category:</i> { book.categories.map((item) => { return( <span key={item}>{item}</span>)})}</h4>
        <h4><i>Description:</i> {book.description}</h4>
      </div>
    </div>
  )
}