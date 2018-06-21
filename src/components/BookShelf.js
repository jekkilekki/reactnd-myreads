import React, { Component } from 'react'
// import { Carousel } from 'react-materialize'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import Loading from './Loading'
import './Book.css'

class BookShelf extends Component {
  state = {
    "books": [],
    "bookshelves": [],
    "loading": true
  }

  getData() {
    BooksAPI.getAll().then((response) => {
      console.log("First response:", response)
      this.setState({
        books: response,
      })

      this.state.books.map((book) => (
        book.favorited = false
      ))

      const pastRead = this.state.books.filter((book) => (
        book.shelf === "read"
      ))
      const nowRead = this.state.books.filter((book) => (
        book.shelf === "currentlyReading"
      ))
      const futureRead = this.state.books.filter((book) => (
        book.shelf === "wantToRead"
      ))

      this.setState({
        bookshelves: [
          {
            "books": nowRead,
            "shelf": "Reading",
            "className": "bookshelf-title col s4 m2 offset-m1"
          },
          {
            "books": futureRead,
            "shelf": "To Read",
            "className": "bookshelf-title col s4 offset-s4 m2 offset-m5"
          },
          {
            "books": pastRead,
            "shelf": "Read",
            "className": "bookshelf-title col s4 offset-s8 m2 offset-m9"
          }
        ],
        loading: false
      })

      // this.state.books.map((book) => {
      //   this.setState({
      //     booksAnimations: { id: book.id, animation: 'card' }
      //   })
      // })
    })
      .then(() => {
        console.log("Book state:", this.state.books)
        console.log("Book animations", this.state.bookAnimations)
      })
      .catch((error) => console.log(error))
  }

  componentWillMount() {
    this.getData()
  }

  componentDidMount() {

  }

  toggleFavorite() {
    var favorite = { ...this.state.someProperty }
    favorite.favorited = true;
    this.setState({ favorite })
    console.log(this)
  }

  render() {
    return (
      <div className="app">
        {this.props.message && 
          <p className="alert">{this.props.message}</p>
        }
        {this.state.loading &&
          <Loading />
        }
        {this.state.bookshelves.map((bookshelf, i) => (
          <div key={i} className="bookshelf animated bounceInUp">
            <div className="row">
              <span className={bookshelf.className}>{bookshelf.shelf}</span>
            </div>
            <div className="grey darken-4">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <div className="bookshelf-books">
                      {/* <Carousel className="books-grid"
                          options={{dist: 0, numVisible: -1}}> */}
                      <ul className="books-grid">
                        {bookshelf.books.map((book) => (
                          // <div key={book.id}>
                          <li key={book.id}>
                            <Book book={book}
                                  // subtitle={book.subtitle}
                                  // averageRating={book.averageRating}
                                  // ratingsCount={book.ratingsCount}
                                  // categories={book.categories} 
                                  onFavorited={() => this.toggleFavorite()}/>
                          </li>
                        ))}
                      </ul>
                      {/* </Carousel> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
 
export default BookShelf