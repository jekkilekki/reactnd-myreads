import React, { Component } from 'react'

class BookRating extends Component {
  constructor(props) {
    super(props)
  }

  renderStars(rating) {
    if (rating === 5) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
        </div>
      )
    }
    else if (rating > 4.5) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_half</span>
        </div>
      )
    }
    else if (rating > 4) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    else if (rating > 3.5) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_half</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    else if (rating > 3) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    else if (rating > 2.5) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_half</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    else if (rating > 2) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    else if (rating > 1.5) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star_half</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    else if (rating > 1) {
      return(
        <div className="book-stars">
          <span className="material-icons">star</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    if (rating > 0.5 ) {
      return(
        <div className="book-stars">
          <span className="material-icons">star_half</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
    else {
      return(
        <div className="book-stars">
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
          <span className="material-icons">star_border</span>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="book-rating">
        {this.renderStars(this.props.average)}
        { this.props.count && 
          <span className="book-rating-number">
            {this.props.count} ratings
          </span>
        }
      </div>
    )
  }
}
 
export default BookRating