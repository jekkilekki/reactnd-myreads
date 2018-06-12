import React from 'react'

const Navigation = (props) => {
  return (
    <div className="main-navigation">
      <nav className="teal darken-4">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">MyReads</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Reading</a></li>
            <li><a href="#">Want to Read</a></li>
            <li><a href="#">Read</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="#">Reading</a></li>
        <li><a href="#">Want to Read</a></li>
        <li><a href="#">Read</a></li>
      </ul>
    </div>
  )
}
 
export default Navigation;