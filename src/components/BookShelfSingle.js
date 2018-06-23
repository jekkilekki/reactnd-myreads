import React from 'react'
import Book from './Book'
import Loading from './Loading'

const BookShelfSingle = (props) => {
  // return <Loading />
  return (
    <div className="bookshelf animated bounceInUp">
            <div className="row">
              <span className="">{props.name}</span>
            </div>
            <div className="grey darken-4">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <div className="bookshelf-books">
                      {/* <Carousel className="books-grid"
                          options={{dist: 0, numVisible: -1}}> */}
                      <ul className="books-grid">
                        {props.books.map((book) => (
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
  )
}
 
export default BookShelfSingle