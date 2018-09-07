import React from 'react'
import BookRating from './BookRating'

const BookMeta = (props) => {
  const { book } = props

  let bookshelfStatus = ''
  switch(book.shelf) {
    case 'currentlyReading':
      bookshelfStatus = 'Currently Reading'
      break
    case 'wantToRead':
      bookshelfStatus = "Want to Read"
      break
    case 'read':
      bookshelfStatus = "Read"
      break
    default:
      bookshelfStatus = "Not in a bookshelf"
  }

  return (
    <div className="book-meta">
      <header className="book-meta-header">
        <div className="book-cover" 
          style={{
            width: 128,
            height: 180,
            position: 'relative',
            background: `url(${book.imageLinks.thumbnail})`
          }}
        >
        {Object.keys(book).includes('maturityRating') && book.maturityRating.toLowerCase() === 'mature' &&
            <span className="badge new mature" data-badge-caption="M" title="Mature rating"></span>
          }
        
        </div>
        <span className="new badge" data-badge-caption={bookshelfStatus}></span>
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
          <BookRating link={book.previewLink} average={book.averageRating} count={book.ratingsCount} />
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
              arr.length - 1 === i 
                ? <span key={i}>{category}</span> 
                : <span key={i}>{category}, </span>
            ))
          }</div>
        }
      </div>
    </div>
  )
}
 
export default BookMeta