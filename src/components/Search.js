import React, { Component } from 'react'
import { search, update } from './BooksAPI'
import Autocomplete from 'react-autocomplete'
import Loading from './Loading'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "results": null,
      "loading": true
    }
    this.searchBooks = this.searchBooks.bind(this)
  }

  searchBooks(query) {
    search(query).then((response) => {
      this.setState({
        results: response,
        loading: false
      }, () => {console.log("Hello after loading", this.state.results)})
    })
  }

  componentWillMount() {
    this.searchBooks(this.props.query)
  }
  
  render() {
    // if(!this.state.results) return <Loading />

    return (
      <div className="search">
        <div className="container">
          <form>
            <input 
              type="text" 
              placeholder="Search" 
              defaultValue={this.props.query || ''}
              onChange={this.handleChange} />
          </form>
          {this.state.results &&
            <div className="search-info">
              <p>Showing {this.state.results.length} Results for <span>"{this.props.query}"</span></p>
              <div className="search-results">

              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
 
export default Search