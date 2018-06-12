import React, { Component } from 'react'
import './materialize.css'
import BookDetails from './BookDetails'

class Book extends Component {
  constructor(props) {
    super(props)
  }

  clickBook = (e) => {
    e.preventDefault
    console.log( "Book clicked" )

  }

  render() {
    const { book } = this.props
    return (
      <div className="book" onClick={(e) => this.clickBook()}>
        <div className="book-top">
          <div className="book-cover hoverable" 
              style={{ 
                width: 128, 
                height: 180, 
                background: `url(${book.imageLinks.thumbnail})` 
              }}></div>
          <div className="book-favorite"></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
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
      </div>
    )
  }
}

export default Book