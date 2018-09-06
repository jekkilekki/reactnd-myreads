import React, { Component } from 'react'
import { Button } from 'react-materialize'
import { getAll } from './BooksAPI'
import Loading from './Loading'
import Book from './Book'
import './Book.css'

class BookShelf extends Component {
  state = {
    books: [],
    bookshelves: [],
    loading: true
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    getAll().then((response) => {
      console.log("First response:", response)
      this.setState({
        books: response,
      })
      // this.state.books.map((book) => {
      //   this.setState({
      //     booksAnimations: { id: book.id, animation: 'card' }
      //   })
      // })
    })
    .then(() => {
      this.updateBookshelves()
    })
    .catch((e) => console.log("There was an error retrieving Book data.", e))
  }

  updateBookshelves() {
    const { books } = this.state

    let pastRead = books.filter((book) => (
      book.shelf === "read"
    ))
        console.log("Yo yo yo books", pastRead)
    let nowRead = books.filter((book) => (
      book.shelf === "currentlyReading"
    ))
    let futureRead = books.filter((book) => (
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

  changeShelf = (book, shelf) => {
    const { books } = this.state

    let updatedBook = books.filter((key) => (
      key.id === book.id
    ))
    let updatedShelf = books.filter((key) => (
      key.id !== book.id
    ))

    updatedBook[0].shelf = updatedShelf

    this.setState({
      books: {...updatedShelf, updatedBook}
    })

    // Update bookshelves
    this.updateBookshelves()
    console.log("Updated books", this.state.books)
    console.log("Updated bookshelves", this.state.bookshelves)
  }

  // toggleFavorite() {
  //   var favorite = { ...this.state.someProperty }
  //   favorite.favorited = true;
  //   this.setState({ favorite })
  //   console.log(this)
  // }

  render() {
    const { message } = this.props
    const { loading, bookshelves } = this.state

    return (
      <div className="app">
        { message && <p className="alert">{message}</p> }
        <Button 
          waves="light"
          className="back-button center red lighten-2"
          onClick={this.getData}
        >Reset books</Button>

        { loading && <Loading /> }

        { bookshelves.map((bookshelf, i) => (
          <div key={i} className="bookshelf animated bounceInUp">
            <div className="row">
              <span className={bookshelf.className}>{bookshelf.name}</span>
            </div>
            <div className="grey darken-4">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <div className="bookshelf-books">
                      <ul className="books-grid">
                        {bookshelf.books.map((book) => (
                          <li key={book.id}>
                            <Book 
                              book={book}
                              subtitle={book.subtitle}
                              averageRating={book.averageRating}
                              ratingsCount={book.ratingsCount}
                              categories={book.categories} 
                              onFavorited={() => this.toggleFavorite()}
                              onChangeShelf={this.changeShelf} 
                            />
                          </li>
                        ))}
                      </ul>
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