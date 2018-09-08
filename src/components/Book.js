import React, { Component } from 'react'
import BookModal from './BookModal'
import ShelfSelect from './ShelfSelect'
import Favorite from './Favorite'

class Book extends Component {
  state = {
    book: this.props.book,
    shelf: this.props.book.shelf
  }

  favorite(book) {
    console.log("Favorited", this)
    this.props.onFavorited(book)
  }

  render() {
    const { book } = this.state
    const { subtitle, averageRating, ratingsCount, categories, currentShelf } = this.props

    let thisShelf = ''
    switch( book.shelf ) {
      case 'currentlyReading':
        thisShelf = 'Currently Reading'
        break
      case 'wantToRead':
        thisShelf = 'Want to Read'
        break
      case 'read':
        thisShelf = 'Read'
        break 
      default:
        thisShelf = 'None'
    }

    return (
      <div id={`book-${book.id}`} className="book" >

        <div className="book-top">
          <a href={`/book/${book.id}`}>
            { Object.keys(book).includes('imageLinks') &&
            <div className="book-cover hoverable" 
                style={{ 
                  width: 140, 
                  height: 200, 
                  background: `url(${book.imageLinks.thumbnail})` 
                }}
            >
            </div>
            }
            { ! Object.keys(book).includes('imageLinks') && 
            <div className="book-cover unavailable"></div>
            }
          </a>

          {Object.keys(book).includes('maturityRating') && book.maturityRating.toLowerCase() === 'mature' &&
            <span className="badge new mature" data-badge-caption="M" title="Mature rating"></span>
          }

          <Favorite onClick={() => this.favorite(book)}/>
          
          <ShelfSelect 
            book={book}
            onChangeShelf={this.props.onChangeShelf} 
          />
        </div>

        <div className="book-info">
        { currentShelf && 
        <p>
          <span className="badge new show-shelf red lighten-2" data-badge-caption={thisShelf}>Shelf: </span>
        </p>
        }
          <div className="book-title">{book.title}</div>
          {book.authors && 
            <div className="book-authors">
              {book.authors.map((author, i) => (
                <span key={i} className="author">{author}<br /></span>
              ))}
            </div>
            }
            {book.publishedDate && 
              <span className="book-date">{book.publishedDate.substr(0,4)}</span>
            } 
        </div>

        <BookModal 
          book={book}
          subtitle={subtitle}
          averageRating={averageRating}
          ratingsCount={ratingsCount}
          categories={categories} 
          onChangeShelf={this.props.onChangeShelf}
        />
      </div>
    )
  }
}

export default Book