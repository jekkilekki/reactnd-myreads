import React, { Component } from 'react'
import BookDetails from './BookDetails'

class Book extends Component {
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
        <BookDetails book={book}/>
      </div>
    )
  }
}

export default Book