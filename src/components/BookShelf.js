import React, { Component } from 'react'
// import { Carousel } from 'react-materialize'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import BookShelfSingle from './BookShelfSingle'
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

      this.updateBookshelves()

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

  toggleFavorite() {
    var favorite = { ...this.state.someProperty }
    favorite.favorited = true;
    this.setState({ favorite })
    console.log(this)
  }

  changeShelf = (book, shelf) => {
    // 1. Take a copy of the current books state
    // let books = {...this.state.books}
    // 2. Update that state
    let updatedBook = this.state.books.filter((key) => (
      key.id === book.id
    ))
    let updatedShelf = this.state.books.filter((key) => (
      key.id !== book.id
    ))
    console.log("updating", updatedBook[0])
    // updatedBook = updatedBook[0]
    updatedBook[0].shelf = shelf
    // console.log("updating", updatedBook)
    // 3. Set that to state
    this.setState({
      books: {...updatedShelf, updatedBook}
    })

    // Update bookshelves
    this.updateBookshelves()
    console.log("Updated books", this.state.books)
    console.log("Updated bookshelves", this.state.bookshelves)

    // 1. Take a copy of the current bookshelves
    // const shelves = {...this.state.bookshelves}
    // // 2. Update that state
    // const updatedShelf = this.state.bookshelves.filter((key) => (
    //   key.shelf === shelf
    // ))
    // updatedShelf[0].books = {...updatedShelf[0].books, updatedBook}
    // console.log("updating shelf", updatedShelf)
    // this.setState({fishes})
  }

  updateBookshelves() {
    // this.state.books.map((book) => (
    //   book.favorited = false
    // ))
    console.log("here we go updating bookshelves", this.state.books)

    let pastRead = this.state.books.filter((book) => (
      book.shelf === "read"
    ))
    let nowRead = this.state.books.filter((book) => (
      book.shelf === "currentlyReading"
    ))
    let futureRead = this.state.books.filter((book) => (
      book.shelf === "wantToRead"
    ))

    this.setState({
      bookshelves: [
        {
          "books": nowRead,
          "name": "Reading",
          "shelf": "currentlyReading",
          "className": "bookshelf-title col s4 m2 offset-m1"
        },
        {
          "books": futureRead,
          "name": "To Read",
          "shelf": "wantToRead",
          "className": "bookshelf-title col s4 offset-s4 m2 offset-m5"
        },
        {
          "books": pastRead,
          "name": "Read",
          "shelf": "read",
          "className": "bookshelf-title col s4 offset-s8 m2 offset-m9"
        }
      ],
      loading: false
    })
  }

  componentWillMount() {
    this.getData()
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
        {/* <BookShelfSingle name={"Reading"} books=
        {this.state.books.filter((book) => (
          book.shelf === "currentlyReading"
        ))}
        /> */}
        {this.state.bookshelves.map((bookshelf, i) => (
          <div key={i} className="bookshelf animated bounceInUp">
            <div className="row">
              <span className={bookshelf.className}>{bookshelf.name}</span>
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
                                  onFavorited={() => this.toggleFavorite()}
                                  onChangeShelf={this.changeShelf} />
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