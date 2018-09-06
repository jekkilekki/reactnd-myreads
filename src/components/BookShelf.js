import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Loading from './Loading'
import Book from './Book'
import './Book.css'

class BookShelf extends Component {
  render() {
    const { books, loading, onUpdateBook } = this.props

    const bookshelves = [
      {
        "name": "Reading",
        "shelf": "currentlyReading",
        "className": "bookshelf-title col s4 m2 offset-m1"
      },
      {
        "name": "To Read",
        "shelf": "wantToRead",
        "className": "bookshelf-title col s4 offset-s4 m2 offset-m5"
      },
      {
        "name": "Read",
        "shelf": "read",
        "className": "bookshelf-title col s4 offset-s8 m2 offset-m9"
      }
    ]

    const transitionOptions = {
			classNames: 'dashboard-list',
			// key,
			timeout: { enter: 500, exit: 500 }
		}

    return (
      <div className="app">
        {/* <Button 
          waves="light"
          className="back-button center red lighten-2"
          onClick={this.getData}
        >Reset books</Button> */}

        { loading && <Loading /> }

        { ! loading &&
          bookshelves.map((bookshelf, i) => (
          <div key={i} className="bookshelf animated bounceInUp">
            <div className="row">
              <span className={bookshelf.className}>{bookshelf.name}</span>
            </div>
            <div className="grey darken-4">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <div className="bookshelf-books">
                      <TransitionGroup component='ul' className='books-grid'>
                        {books
                        .filter((book) => book.shelf === bookshelf.shelf)
                        .map((book) => (
                          <CSSTransition key={book.id} {...transitionOptions}>
                          <li className={`book-${book.id}`}>
                            <Book 
                              book={book}
                              subtitle={book.subtitle}
                              averageRating={book.averageRating}
                              ratingsCount={book.ratingsCount}
                              categories={book.categories} 
                              onFavorited={() => this.toggleFavorite()}
                              onChangeShelf={this.props.onUpdateBook} 
                            />
                          </li>
                          </CSSTransition>
                        ))}
                      </TransitionGroup>
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