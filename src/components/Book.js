import React, { Component } from 'react'
// import { Dropdown } from 'react-materialize'
import BookDetails from './BookDetails'
import ShelfSelect from './ShelfSelect'
import Favorite from './Favorite'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      props
    }
    console.log( "this props", this.state )
  }

  favorite(book) {
    console.log("Favorited", this)
    this.props.onFavorited(book)
  }

  dropDown(book) {
    console.log("Dropping down")
    // var dropdown = document.getElementById(`dropdown-${book.id}`)
    // dropdown.material_select();
  }

  render() {
    const { book } = this.props
    return (
      <div id={`book-${book.id}`} className="book" >

        <div className="book-top">
          <div className="book-cover hoverable" 
              style={{ 
                width: 140, 
                height: 200, 
                background: `url(${book.imageLinks.thumbnail})` 
              }}></div>
          {/* <i className="book-favorite material-icons" 
              onClick={() => this.favorite(book)}>star_border</i> */}
          <Favorite onClick={() => this.favorite(book)}/>
          <ShelfSelect book={book} />
        </div>
        <div className="book-info">
          <div className="book-title white-text">{book.title}</div>
          <div className="book-authors">
            {book.authors.map((author, i) => (
              <span key={i} className="author">{author}<br /></span>
            ))}
            <span className="book-date">{book.publishedDate.substr(0,4)}</span>
          </div>  
        </div>
        <BookDetails book={book}
                      subtitle={book.subtitle}
                      averageRating={book.averageRating}
                      ratingsCount={book.ratingsCount}
                      categories={book.categories} 
        />
      </div>
    )
  }
}

export default Book