import React, { Component } from 'react';
import Papa from 'papaparse'
import './App.css';
import Navigation from './Navigation'
import Router from './Router'

class App extends Component {
  state = {
    page: "/",
    searchOpen: false,
    searchTerms: []
  }

  componentDidMount() {
    Papa.parse("/SEARCH_TERMS.csv", {
      download: true,
      error: (err) => {
        console.log(err)
      },
      complete: (results) => {
        console.log( "Results", results )
        this.setState({
          searchTerms: results.data[0]
        })
        console.log( "Search terms", this.state.searchTerms)
      }
    })
    
    console.log( this.state.searchTerms )
  }

  setPage = (url) => {
    // 1. Take a copy of the current state
    // const page = {...this.state.page}
    // // 2. Update that state
    // page[key] = url
    // 3. Set that to state
    // this.setState({page: url})
    console.log("new page url", url)
  }

  onSearch() {
    this.setState(prevState => ({
      searchOpen: !prevState.searchOpen
    }))
  }

  render() {
    return (
      <div className="App">
        <Navigation 
          search={this.state.searchOpen}
          searchTerms={this.state.searchTerms}
          onSearch={() => this.onSearch()} />
        <Router 
          setPage={this.setPage} 
          searchTerms={this.state.searchTerms} />
      </div>
    )
  }
}

export default App
