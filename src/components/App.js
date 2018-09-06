import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './Navigation'
import BookShelf from './BookShelf'
import BookSingle from './BookSingle'
import Search from './Search'
import NotFound from './NotFound'
import './App.css'

class App extends Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <main className='app app-container'>
          <Navigation />
          <Switch>
            <Route exact path="/" component={BookShelf} />
            <Route exact path="/book/:id" component={BookSingle} />
            <Redirect from='/book' to={{ pathname: '/search', state: { book: 'none' }}} />
            <Redirect from='/books' to={{ pathname: '/search', state: { book: 'none' }}} />
            {/* <Route path="/book" render={() => {
              return (
                <BookShelf message="Please select a book to view its details." />
              )
            }} /> */}
            {/* <Route exact path="/search/:query" component={Search} /> */}
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
