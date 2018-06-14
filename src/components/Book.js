import React, { Component } from 'react'
import { Dropdown } from 'react-materialize'
import BookDetails from './BookDetails'
import ShelfSelect from './ShelfSelect'

class Book extends Component {
  favorite() {
    console.log("Favorited")
  }

  dropDown(book) {
    console.log("Dropping down")
    var dropdown = document.getElementById(`dropdown-${book.id}`)
    // dropdown.material_select();
  }

  render() {
    const { book } = this.props
    return (
      <div className="book" >

        <div className="book-top">
          <div className="book-cover hoverable" 
              style={{ 
                width: 140, 
                height: 200, 
                background: `url(${book.imageLinks.thumbnail})` 
              }}></div>
          <div className="book-favorite" onClick={() => this.favorite(book.id)}></div>
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
        <BookDetails book={book}/>
      </div>
    )
  }
}

export default Book