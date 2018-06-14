import React, { Component } from 'react'
import './ShelfSelect.css'

class ShelfSelect extends Component {
  showDropdown = (e) => {
    console.log("clicking", e.target)
    e.css({"display": "block"})
  }

  hideDropdown = () => {
    document.querySelector( '.book-status' ).css({ "display": "none" })
  }

  render() {
    var book = this.props

    return (
      <div className="book-shelf-changer" 
          onClick={() => (this.showDropdown())}
          onFocus={() => (this.showDropdown(book.id))}
          onBlur={() => (this.hideDropdown())}>
        <ul id={`dropdown-${book.id}`} className="book-status"
            onFocus={(e) => {console.log(e.target)}}>
          <li className="disabled" value="none" disabled>Move to...</li>
          <li value="currentlyReading">Currently Reading</li>
          <li value="wantToRead">Want to Read</li>
          <li value="read">Read</li>
          <li className="divider"></li>
          <li value="none">None</li>
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