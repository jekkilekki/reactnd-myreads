import React, { Component } from 'react';
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
