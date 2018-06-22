import React from 'react'
import BookRating from './BookRating'
import ShelfSelect from './ShelfSelect'

const BookMeta = (props) => {
  const { book } = props

  return (
    <div className="book-meta">
          
      <header className="book-meta-header">
        <div className="book-cover" 
          style={{
            width: 128,
            height: 180,
            background: `url(${book.imageLinks.thumbnail})`
          }}
        ></div>
      </header>

      <div className="book-info">
        <h4>{book.title}</h4>
        { book.subtitle &&
          <h5 className="book-subtitle">{book.subtitle}</h5>
        }
        <div className="book-authors">by {
          book.authors.map((author, i, arr) => (
            arr.length - 1 === i ? 
              <span key={i}>{author}</span> : 
              <span key={i}>{author}, </span>
          ))
        }</div>
        { book.averageRating && 
          <BookRating average={book.averageRating} count={book.ratingsCount} />
        }
        <div className="book-publisher">
          { book.publisher && 
            <span>{book.publisher}, </span>
          }
          <span>{book.publishedDate}</span>
        </div>
        <div className="book-isbn">
          ISBN: <span className="isbn-13">{book.industryIdentifiers[0].identifier}</span>, <span className="isbn-10">{book.industryIdentifiers[1].identifier}</span>
        </div>
        <div className="book-pages">
          <span>{book.pageCount} pages</span>
        </div>
        { book.categories && 
          <div className="book-categories">{
            book.categories.map((category, i, arr) => (
              arr.length - 1 === i ? 
                <span key={i}>{category}</span> : 
                <span key={i}>{category}, </span>
            ))
          }</div>
        }

        <footer className="book-info-footer">
          <a className="book-preview waves-effect waves-light btn" 
            href={book.previewLink}>View</a>
          <i className="book-favorite material-icons">star_border</i>
          <ShelfSelect book={book} />
          <span className="book-shelf-changer-text">Move to...</span>
        </footer>
      </div>

    </div>
  )
}
 
export default BookMeta