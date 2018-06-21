import React, { Component } from 'react';
import Papa from 'papaparse'
import './App.css';
import Navigation from './Navigation'
import Router from './Router'

class App extends Component {
  state = {
    searchOpen: false,
    searchTerms: []
  }

  onSearch() {
    this.setState(prevState => ({
      searchOpen: !prevState.searchOpen
    }))
  }

  componentDidMount() {
    Papa.parse("/SEARCH_TERMS.csv", {
      download: true,
      error: (err) => {
        console.log(err)
      },
      complete: (results) => {
        console.log( results )
        this.setState({
          searchTerms: results.data
        })
        console.log( "Search terms", this.state.searchTerms)
      }
    })
    
    console.log( this.state.searchTerms )
  }

  render() {
    return (
      <div className="App">
        <Navigation 
          search={this.state.searchOpen}
          searchTerms={this.state.searchTerms}
          onSearch={() => this.onSearch()} />
        <Router />
      </div>
    );
  }
}

export default App;
