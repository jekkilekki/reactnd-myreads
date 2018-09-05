import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
                <i className="back-arrow material-icons">arrow_back</i>
              }
              <a href="/" className="brand-logo centered">MyReads</a>
              {/* <SearchBar 
                searchOpen={this.props.search}
                toggleSearch={() => this.toggleSearch()}
                onSubmit={() => this.submitSearch()} /> */}
                <a href="/search">
                  <i className="search material-icons">search</i>
                </a>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
 
export default withRouter(Navigation)
// export default Navigation