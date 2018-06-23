import React, { Component } from 'react'
import { update } from './BooksAPI'
import './ShelfSelect.css'

class ShelfSelect extends Component {
  shelfOptions = [
    // [
      {
        value: "currentlyReading",
        name: "Currently Reading",
        className: ""
      },
      {
        value: "wantToRead",
        name: "Want To Read",
        className: ""
      },
      {
        value: "read",
        name: "Read",
        className: ""
      },
      {
        value: "",
        name: "",
        className: "divider"
      }, 
      {
        value: "none",
        name: "None",
        className: ""
      }
    // ]
    ]

  toggleDropdown = (e) => {
    let showing = e.currentTarget.children[0]
    console.log("clicking", showing, "showing", showing.style.display)
    if (showing.style.display === "block") {
      showing.style.display = "none"
    } else {
      showing.style.display = "block"
    }
  }

  changeShelf = (book, shelf) => {
    console.log("changing to:", shelf)
    update(book, shelf)
  }

  render() {
    const { book } = this.props

    return (
      <div 
        className="book-shelf-changer" 
        onClick={this.toggleDropdown}
      >
        <ul 
          id={`dropdown-${book.id}`} 
          className="book-status"
        >
          {this.shelfOptions.map((option, i) => (
            <li 
              key={i} 
              className={option.className}
              value={option.value}
              onClick={() => this.changeShelf(book, option.value)}
            >{option.name}</li>
          ))}
          {/* <li className="disabled" value="none" disabled>Move to...</li>
          <li value="currentlyReading" onClick={() => this.changeShelf(book)}>Currently Reading</li>
          <li value="wantToRead" onClick={() => this.changeShelf(book)}>Want to Read</li>
          <li value="read" onClick={() => this.changeShelf(book)}>Read</li>
          <li className="divider"></li>
          <li value="none" onClick={() => this.changeShelf(book)}>None</li> */}
        </ul>
        {/* <select>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select> */}
      </div>
    )
  }
}
 
export default ShelfSelect