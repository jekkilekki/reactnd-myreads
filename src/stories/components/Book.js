import React, { Component } from 'react'
import './materialize.css'

class Book extends Component {
  constructor(props) {
    super(props)
  }

  clickBook() {
    console.log( "Book clicked" )
  }

  render() {
    const { book } = this.props
    return (
      <div className="book" onClick={() => this.clickBook()}>
        <div className="card-image book-top hoverable">
          <div className="book-cover activator" 
            style={{
              background: `url(${book.imageLinks.thumbnail})`,
              width: 128,
              height: 200
            }} 
            alt={book.title} />
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">+</i>
          </a>
        </div>
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="card-content">
          <span className="book-title card-title">{book.title}</span>
          <p className="book-authors">
            {book.authors.map((author, i) => ( 
              <span key={i}>{author}</span>
            ))}
          </p>
        </div>
        <div className="card-action">
          <a href="#">Link</a>
        </div>
        <div className="card-reveal">
          <span className="card-title">{book.title}</span>
          <p className="truncate">{book.description}</p>
        </div>
      </div>
        
    )
  }
}

export default Book