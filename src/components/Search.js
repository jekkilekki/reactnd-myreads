import React, { Component } from 'react'
import { search } from './BooksAPI'
import Papa from 'papaparse'
import Loading from './Loading'
import Book from './Book'

class Search extends Component {
  queryRef = React.createRef()

  state = {
    searching: this.props.newSearch,
    searchOpen: false,
    searchValue: '',
    searchTerms: [],
    results: null,
    errorMsg: ''
  }

  componentDidMount() {
    const { location } = this.props

    if ( typeof location.state !== 'undefined' ) {
      this.searchBooks( location.state.query )
      this.setState({
        searchValue: location.state.query
      })
    }

    Papa.parse("../SEARCH_TERMS.csv", {
      download: true,
      error: (e) => {
        console.log("There was an error parsing your file.", e)
      },
      complete: (results) => {
        this.setState({
          searchTerms: results.data[0]
        })
      }
    })
  }

  handleChange = (e) => {
    const query = e.target.value
    this.setState({
      searchValue: query
    })
    this.searchBooks(query)
  }

  getAutoCompleteSearchTerms() {
    const { searchTerms } = this.state
    return (
      <ul className="container" id="search-autocomplete">
        {searchTerms
        .filter((term) => (this.state.searchValue === '' || term.toLowerCase().includes(this.state.searchValue)))
        .map((term) => (
          <li 
            key={term} 
            id={term}
            className="search-autocomplete-term"
            onClick={this.selectSearchTerm}
          >{term}</li>
        ))}
      </ul>
    )
  }

  searchBooks(query) {
    search(query).then((response) => {
      if (typeof response === 'undefined') {
        this.setState({
          errorMsg: 'Please enter your search terms in the input field above.'
        })
        return
      } else if(response.error) {
        this.setState({
          errorMsg: `No Results found for "${query}." Please try your search again.`
        }) 
        return
      }
      response.map((book) => {
        return this.props.books.filter((b) => {
          return b.id === book.id
        }).map((b) => {
          return book.shelf = b.shelf
        })
      })
      this.setState({
        searching: false,
        errorMsg: '',
        results: response,
      })
    })
  }

  openAutocomplete = () => {
    document.getElementById("search-autocomplete").style.display = "block"
  }

  closeAutocomplete = () => {
    const { location } = this.props
    if ( location.pathname === '/search' ) {
      setTimeout(() => {
        document.getElementById("search-autocomplete").style.display = "none"
      }, 200)
    }
  }

  selectSearchTerm = (e) => {
    const query = e.target.id
    this.setState({
      searchValue: query
    })
    this.searchBooks(query)
  }

  submitForm = (e) => {
    e.preventDefault()
    const query = this.queryRef.current.value 
    this.searchBooks(query)
  }
  
  render() {
    const { searchValue } = this.state

    console.log("Are you searching? ", this.state.searching )

    return (
      <div className="search">
        <div className="book-single">
          <div className="container">
            <form onSubmit={this.submitForm}>
              <input 
                autoComplete="off"
                type="text" 
                name="query"
                className="search-input"
                ref={this.queryRef}
                placeholder="Find a Book" 
                value={searchValue}
                onChange={this.handleChange}
                onBlur={this.closeAutocomplete}
                onFocus={this.openAutocomplete} 
              />
              
              {this.getAutoCompleteSearchTerms()}

            </form>
          </div>
        </div>

        {!this.state.results && this.props.query &&
          <Loading />
        }

        {this.state.errorMsg &&
          <h6 className="center alert">{this.state.errorMsg}</h6>
        }

        { this.state.results && 
        ! this.state.errorMsg && 
        ! this.state.searchValue !== '' &&
          <div className="search-info animated bounceInUp container">
            <h6 className="center">Showing {this.state.results.length} Results for 
              <strong> "{this.queryRef.current.value || this.props.query}"</strong>
            </h6>

            <div className="search-results">
            <ul className="books-grid">
              {this.state.results.map((book) => (
                <li key={book.id}>
                  <Book 
                    book={book}
                    onFavorited={() => this.toggleFavorite()}
                    onChangeShelf={this.props.onChangeShelf}
                    onSearch={true}
                  />
                </li>
              ))}
            </ul>
            </div>
          </div>
        }
      </div>
    )
  }
}
 
export default Search