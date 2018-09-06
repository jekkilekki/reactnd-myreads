import React, { Component } from 'react'
import { search } from './BooksAPI'
import Papa from 'papaparse'
// import Autocomplete from 'react-autocomplete'
import Loading from './Loading'
import Book from './Book'

class Search extends Component {
  queryRef = React.createRef()

  state = {
    loading: true,
    searchOpen: false,
    searchValue: '',
    searchTerms: [],
    results: null,
  }

  componentDidMount() {
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
    this.setState((prevState) => {
      return {
        searchValue: query,
        searchTerms: prevState.searchTerms.filter((term) => {
          term.startsWith(query)
        })
      }
    })
    // this.searchBooks(this.state.searchValue)
  }

  getAutoCompleteSearchTerms() {
    const { searchTerms } = this.state
    return (
      <ul className="container" id="search-autocomplete">
        {searchTerms.map((term) => (
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

  onSearch() {
    this.setState(prevState => ({
      searchOpen: !prevState.searchOpen
    }))
  }

  searchBooks(query) {
    if (query) {
      search(query).then((response) => {
        if (!response.error) {
          this.setState({
            results: response,
            loading: false
            }, () => {
              console.log("Hello after loading", this.state.results)
            }
          ) // this.setState
        }
      }) // search(query).then()
    }
  }

  openAutocomplete = () => {
    document.getElementById("search-autocomplete").style.display = "block"
  }

  closeAutocomplete = () => {
    document.getElementById("search-autocomplete").style.display = "none"
  }

  selectSearchTerm = (e) => {
    console.log("selected: ")
  }

  submitForm = (e) => {
    e.preventDefault()
    const query = this.queryRef.current.value 
    this.searchBooks(query)
    // this.props.onSearch(query)
  }

  componentWillMount() {
    this.searchBooks(this.props.query)
  }
  
  render() {
    // if(!this.state.results) return <Loading />
    const { searchTerms, searchValue } = this.state

    return (
      <div className="search">
        <div className="book-single">
          <div className="container">
            <form onSubmit={this.submitForm}>
              <input 
                type="text" 
                name="query"
                className="search-input"
                ref={this.queryRef}
                placeholder="Find a Book" 
                value={this.props.query || searchValue}
                onChange={this.handleChange}
                onBlur={this.closeAutocomplete}
                onFocus={this.openAutocomplete} 
              />
              
              {this.getAutoCompleteSearchTerms()}

            </form>
            {!this.state.results && !this.props.query &&
              <p>Available Search Terms</p>
            }
          </div>
        </div>

        {!this.state.results && this.props.query &&
          <Loading />
        }

        {this.state.results &&
          <div className="search-info animated bounceInUp container">

            <h6 className="center">Showing {this.state.results.length} Results for 
              <strong> "{this.queryRef.current.value || this.props.query}"</strong>
            </h6>

            <div className="search-results">
            <ul className="books-grid">
                      {this.state.results.map((book) => (
                        // <div key={book.id}>
                        <li key={book.id}>
                          <Book book={book}
                                // subtitle={book.subtitle}
                                // averageRating={book.averageRating}
                                // ratingsCount={book.ratingsCount}
                                // categories={book.categories} 
                                onFavorited={() => this.toggleFavorite()}/>
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