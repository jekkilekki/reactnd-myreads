import React from 'react'

const Navigation = (props) => {
  return (
    <div className="main-navigation navbar-fixed">
      <nav className="teal darken-4">
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">MyReads</a>
          <form>
            <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </form>
        </div>
      </nav>
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3">
              <a href="#reading">Reading</a>
            </li>
            <li className="tab col s3">
              <a href="#wanttoread">Want To Read</a>
            </li>
            <li className="tab col s3">
              <a href="#read">Read</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
 
export default Navigation;