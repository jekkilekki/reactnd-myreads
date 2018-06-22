import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Navigation extends Component {
  toggleSearch() {
    this.props.onSearch()
  }

  render() {
    const navbarClass = this.props.search === false ? 'teal' : 'white'
    return (
      <header className="app-header">
        <div className="main-navigation navbar-fixed">
          <nav className={navbarClass}>
            <div className="nav-wrapper container">
              {this.props.location === "/" && 
                <i className="back-arrow material-icons">arrow_back</i>
              }
              <a href="/" className="brand-logo centered">MyReads</a>
              <SearchBar 
                searchOpen={this.props.search}
                toggleSearch={() => this.toggleSearch()}
                onSubmit={() => this.submitSearch()} />
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
 
export default Navigation