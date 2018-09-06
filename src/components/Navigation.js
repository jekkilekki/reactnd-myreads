import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import SearchBar from './SearchBar'

class Navigation extends Component {
  toggleSearch() {
    this.props.onSearch()
  }

  render() {
    const { match, location, history } = this.props
    console.log( 'Navigation: ', location )

    // const navbarClass = this.props.search === false ? 'teal' : 'white'
    const navbarClass = 'teal'
    return (
      <header className="app-header">
        <div className="main-navigation navbar-fixed">
          <nav className={navbarClass}>
            <div className="nav-wrapper container">
              {location.pathname !== "/" && 
                <Link to='/' className='back-button'>
                  <i className="back-arrow material-icons">arrow_back</i>
                  <span>Bookshelf</span>
                </Link>
              }
              <Link to='/' className="brand-logo centered">MyReads</Link>
              {/* <SearchBar 
                searchOpen={this.props.search}
                toggleSearch={() => this.toggleSearch()}
                onSubmit={() => this.submitSearch()} /> */}
                <Link to="/search">
                  <i className="search material-icons">search</i>
                </Link>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
 
export default withRouter(Navigation)
// export default Navigation