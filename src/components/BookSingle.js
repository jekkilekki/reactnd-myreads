import React, { Component } from 'react'
import { get } from './BooksAPI'
import Loading from './Loading'
import BookRating from './BookRating'
import ShelfSelect from './ShelfSelect'

class BookSingle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "thisBook": props.book,
      "loading": true
    }
  }

  getDate(string) {
    var dateArray = string.split("-")
    var date = new Date(dateArray.map((val) => val ))
    return date.toString
  }
  
  getBook(id) {
    get(id).then((response) => {
      console.log("This book: ", response)
      this.setState({
        thisBook: response,
        loading: false
      }, () => {console.log("Hello after loading", this.state.thisBook)})
    })
  }

  componentWillMount() {
    this.getBook(this.props.book)
  }

  render() {
    const book = this.state.thisBook
    console.log( "Rendering", this.state.thisBook)
    // const pubDate = book.publishedDate
    return (
        <div className="modal-info">
          {this.state.loading &&
          <Loading />
        }
          <div className="modal-header">
            <div className="modal-close">
              <i className="material-icons">close</i>
            </div>
            {/* <h4 className="book-title">{book.title}</h4> */}
            { this.props.subtitle &&
              <h6 className="book-subtitle">{this.props.subtitle}</h6>
            }
          </div>

          {/* <div className="book-cover" 
              style={{
                width: 128,
                height: 180,
                background: `url(${book.imageLinks.thumbnail})`
              }}
            ></div>*/}

          <div className="book-info">
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
                href={book.previewLink}>Preview</a>
              <i className="book-favorite material-icons">star_border</i>
              <ShelfSelect book={book} />
              <span className="book-shelf-changer-text">Move to...</span>
            </footer>
          </div>

          <div className="book-description">
            <p>{book.description}</p>
          </div>

          <div className="">
            <a href={`https://books.google.com/books?op=lookup&id=${book.id}`} 
                className="waves-effect waves-teal center">
              <BookRating />
              <div className="book-rating-link">
                Rate this book
              </div>
            </a>
            <i className="modal-close material-icons">close</i>
          </div> */}

        </div>
    )
  }
}
 
export default BookSingle