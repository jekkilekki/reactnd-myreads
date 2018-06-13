import React, { Component } from 'react'
import './materialize.css'
import BookRating from './BookRating'

class BookDetails extends Component {
  constructor(props) {
    super(props)
  }

  openModal() {
    console.log("Modal clicked")
    var elem = document.getElementById('#modal1')
    var modal = M.Modal.init(elem)
  }

  getDate(string) {
    var dateArray = string.split("-")
    var date = new Date(dateArray.map((val) => val ))
    return date.toString
  }

  render() {
    const { book } = this.props
    const pubDate = book.publishedDate

    return (
      <div className="page">
        <a className="waves-effect waves-light btn modal-trigger" 
            href="#"
            onClick={this.openModal()}>Modal</a>
      
        <div id="modal1" className="modal open">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-close">
                <i className="material-icons">close</i>
              </div>
              <h4 className="book-title">{book.title}</h4>
              { this.props.subtitle &&
                <span className="book-subtitle">{book.subtitle}</span>
              }
            </div>
            <div className="book-cover" 
                style={{
                  width: 128,
                  height: 180,
                  background: `url(${book.imageLinks.thumbnail})`
                }}
            ></div>
            <div className="book-info">
              <div className="book-authors">by {
                book.authors.map((author, i, arr) => (
                  arr.length - 1 === i ? 
                    <span key={i}>{author}</span> : 
                    <span key={i}>{author}, </span>
                ))
              }</div>
              { this.props.averageRating && 
                <BookRating average={this.props.averageRating} count={this.props.ratingsCount} />
              }
              <div className="book-publisher">
                { this.props.publisher && 
                  <span>{this.props.publisher}, </span>
                }
                <span>{book.publishedDate}</span>
              </div>
              <div className="book-isbn">
                ISBN: <span className="isbn-13">{book.industryIdentifiers[0].identifier}</span>, <span className="isbn-10">{book.industryIdentifiers[1].identifier}</span>
              </div>
              <div className="book-pages">
                <span>{book.pageCount} pages</span>
              </div>
              { this.props.categories && 
                <div className="book-categories">{
                  this.props.categories.map((category, i, arr) => (
                    arr.length - 1 === i ? 
                      <span key={i}>{category}</span> : 
                      <span key={i}>{category}, </span>
                  ))
                }</div>
              }
              <footer className="book-info-footer">
                <a className="book-preview waves-effect waves-light btn" 
                  href={book.previewLink}>Preview</a>
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
                <span className="book-shelf-changer-text">Move to...</span>
              </footer>
            </div>
            <div className="book-description">
              <p>{book.description}</p>
            </div>
          </div>
          <div className="modal-footer">
            <a href={book.previewLink} className="waves-effect waves-green center">
              <BookRating />
              <div className="book-rating-link">
                Rate this book
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });
 
export default BookDetails