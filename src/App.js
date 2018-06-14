import React, { Component } from 'react';
import './components/App.css';
import Navigation from './components/Navigation'
import BookShelf from './components/BookShelf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <BookShelf />
      </div>
    );
  }
}

export default App;
