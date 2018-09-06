import React, { Component } from 'react'

class BookRating extends Component {
  renderStars(rating) {
    if (rating === 5) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
        </div>
      )
    }
    else if (rating > 4.5) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star_half</i>
        </div>
      )
    }
    else if (rating > 4) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    else if (rating > 3.5) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star_half</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    else if (rating > 3) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    else if (rating > 2.5) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star_half</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    else if (rating > 2) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    else if (rating > 1.5) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star_half</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    else if (rating > 1) {
      return(
        <div className="book-stars">
          <i className="material-icons">star</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    if (rating > 0.5 ) {
      return(
        <div className="book-stars">
          <i className="material-icons">star_half</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
    else {
      return(
        <div className="book-stars">
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
          <i className="material-icons">star_border</i>
        </div>
      )
    }
  }

  render() {
    return (
      <a href={this.props.link} className="book-rating">
        {this.renderStars(this.props.average)}
        { this.props.count && 
          <span className="book-rating-number">
            {this.props.count} ratings
          </span>
        }
      </a>
    )
  }
}
 
export default BookRating