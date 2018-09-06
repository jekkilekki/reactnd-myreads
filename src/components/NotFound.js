import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container">
      <header>
        <h2 className="page-title center">404 Not Found</h2>
        <p className="page-subtitle center">Whoops, we couldn't find the page you wanted.</p>
        <p className="center">Perhaps try a <Link to='/search'>search</Link>?</p>
      </header>
    </div>
  )
}
 
export default NotFound