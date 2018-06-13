import React from 'react'

const Navigation = (props) => {
  return (
    <div className="main-navigation navbar-fixed">
      <nav className="teal darken-4">
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">MyReads</a>
          <form>
            <input id="search" type="search" placeholder="Search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </form>
        </div>
      </nav>
    </div>
  )
}
 
export default Navigation;