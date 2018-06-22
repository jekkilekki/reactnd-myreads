import React, { Component } from 'react'
import { get } from './BooksAPI'
import Loading from './Loading'
import BookMeta from './BookMeta'
import BookRating from './BookRating'
import './BookSingle.css'

class BookSingle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "thisBook": null,
      "loading": true
    }
    this.getBook = this.getBook.bind(this)
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
    if(!book) return <Loading />

    return (
      <div className="book-single animated bounceInUp">
        <header className="book-single-header grey darken-4 white-text">
          <div className="container">
            <BookMeta book={book} />  
          </div>
        </header>

        <div className="container">
          <div className="book-description">
            <p>{book.description}</p>
          </div>
        </div>

        <div className="">
          <a href={`https://books.google.com/books?op=lookup&id=${book.id}`} 
              className="waves-effect waves-teal center">
            <BookRating />
            <div className="book-rating-link">
              Rate this book
            </div>
          </a>
        </div>
      </div>
    )
  }
}
 
export default BookSingle