import React, { Component } from 'react'
import { search, update } from './BooksAPI'
import Autocomplete from 'react-autocomplete'
import Loading from './Loading'
import Book from './Book'

class Search extends Component {
  queryRef = React.createRef()

  state = {
    "results": null,
    "loading": true,
    "searchOpen": false,
  }
  // searchBooks = this.searchBooks.bind(this)

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
    console.log("focus or not")
    document.getElementById("search-autocomplete").style.display = "block"
  }

  closeAutocomplete = () => {
    console.log("blurring")
    document.getElementById("search-autocomplete").style.display = "none"
  }

  selectSearchTerm = () => {
    console.log("selected")
  }

  submitForm = (e) => {
    e.preventDefault()
    const query = this.queryRef.current.value 
    this.searchBooks(query)
    this.props.onSearch(query)
  }

  componentWillMount() {
    this.searchBooks(this.props.query)
  }
  
  render() {
    // if(!this.state.results) return <Loading />

    return (
      <div className="search">
        <div className="container">
          <form onSubmit={this.submitForm}>
            <input 
              type="text" 
              name="query"
              ref={this.queryRef}
              placeholder="Find a Book" 
              defaultValue={this.props.query || ''}
              onChange={this.handleChange}
              onBlur={this.closeAutocomplete}
              onFocus={this.openAutocomplete} />
            <ul className="container" id="search-autocomplete">
              {this.props.searchTerms.map((term, i) => (
                <li 
                  key={i} 
                  className="search-autocomplete-term"
                  onClick={this.selectSearchTerm}
                >{term}</li>
              ))}
            </ul>
          </form>
          {!this.state.results && !this.props.query &&
            <p>Available Search Terms</p>
          }
          {!this.state.results && this.props.query &&
            <Loading />
          }
          {this.state.results &&
            <div className="search-info animated bounceInUp">

              <p>Showing {this.state.results.length} Results for 
                <strong> "{this.queryRef.current.value || this.props.query}"</strong>
              </p>

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
      </div>
    )
  }
}
 
export default Search