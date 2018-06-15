import React from 'react'

const Favorite = (props) => {
  const favorite = () => {
    this.props.onFavorite();
  }

  return (
    <i className="book-favorite material-icons"
      onClick={() => this.favorite()}>star_border</i>
  )
}
 
export default Favorite