import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { get } from './BooksAPI'
import Loading from './Loading'
import BookMeta from './BookMeta'
import BookRating from './BookRating'
import ShelfSelect from './ShelfSelect'
import './BookSingle.css'

class BookSingle extends Component {
  state = {
    thisBook: null,
    loading: true
  }
  
  getBook(id) {
    get(id).then((response) => {
      console.log("This book: ", response)
      this.setState({
        thisBook: response,
        loading: false
      })
    })
  }

  componentWillMount() {
    const { location } = this.props
    const id = location.pathname.substr(6)
    this.getBook(id)
  }

  render() {
    const { thisBook } = this.state

    if ( ! thisBook ) return <Loading />

    let bookStatus = ''
    switch( thisBook.shelf ) {
      case 'currentlyReading':
        bookStatus = "are currently reading"
        break;
      case 'wantToRead':
        bookStatus = "want to read"
        break;
      case 'read':
        bookStatus = "have already read"
        break;
      default:
        bookStatus = "haven't shelved"
    }

    return (
      <div className="book-single animated bounceInUp">
        <p className="center bookshelf-status">You <span className="red-text">{bookStatus}</span> this book.</p>
        <header className="book-single-header grey darken-4 white-text">
          <div className="container">
            <BookMeta 
              book={thisBook} 
            />  
            <footer className="book-info-footer">
              <a className="book-preview waves-effect waves-light btn" 
                href={thisBook.previewLink}>View</a>
              <i className="book-favorite material-icons">star_border</i>
              <ShelfSelect 
                book={thisBook} 
                onChangeShelf={this.props.onChangeShelf}
              />
              <span className="book-shelf-changer-text">Move to...</span>
            </footer>
          </div>
        </header>

        <div className="container">
          <div className="book-description">
            <p>{thisBook.description}</p>
          </div>
        </div>

        <hr />
        <div className="container center">
          <BookRating link={thisBook.previewLink} />
          <div className="book-rating-link">
            Rate this book
          </div>
        </div>
      </div>
    )
  }
}
 
export default withRouter(BookSingle)