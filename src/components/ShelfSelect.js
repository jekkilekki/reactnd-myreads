import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { update } from './BooksAPI'
import './ShelfSelect.css'

class ShelfSelect extends Component {
  toggleDropdown = (e) => {
    let showing = e.currentTarget.children[0]
    if (showing.style.display === "block") {
      showing.style.display = "none"
    } else {
      showing.style.display = "block"
    }
  }

  changeShelf = (e, book, shelf) => {
    if ( e.target.className === "disabled" ) {
      return
    }
    update(book, shelf)
    // this.props.onChangeShelf(book, shelf)
    this.props.history.push('/')
  }

  render() {
    const { book } = this.props

    console.log( "Bookshelf: ", book.shelf )

    let shelfOptions = [{
        value: "currentlyReading",
        name: "Currently Reading",
        className: book.shelf === "currentlyReading" ? "disabled" : ""
      },
      {
        value: "wantToRead",
        name: "Want To Read",
        className: book.shelf === "wantToRead" ? "disabled" : ""
      },
      {
        value: "read",
        name: "Read",
        className: book.shelf === "read" ? "disabled" : ""
      },
      {
        value: "",
        name: "",
        className: "divider"
      },
      {
        value: "none",
        name: "None",
        className: (book.shelf === "none" || typeof book.shelf === 'undefined') ? "disabled" : ""
      }
    ]

    return (
      <div 
        className="book-shelf-changer" 
        onMouseOver={this.toggleDropdown}
        onMouseOut={this.toggleDropdown}
        // onClick={this.toggleDropdown}
      >
        <ul 
          id={`dropdown-${book.id}`} 
          className="book-status"
        >
          {shelfOptions.map((option, i) => (
            <li 
              key={i} 
              className={option.className}
              value={option.value}
              onClick={() => this.props.onChangeShelf(book, option.value)}
            >{option.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
 
export default withRouter(ShelfSelect)