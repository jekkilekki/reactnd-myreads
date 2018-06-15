import React, { Component } from 'react';
import Papa from 'papaparse'
import './components/App.css';
import Navigation from './components/Navigation'
import BookShelf from './components/BookShelf'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchOpen: false,
      searchTerms: []
    }
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
          onSearch={() => this.onSearch()} />
        <BookShelf />
      </div>
    );
  }
}

export default App;
