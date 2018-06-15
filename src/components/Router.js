import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import BookSingle from './BookSingle'
import Search from './Search'
import NotFound from './NotFound'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BookShelf} />
          <Route exact path="/book/:id" render={(props) => { 
            let bookId = props.location.pathname.replace('/book/', '');
            console.log("Book Id", bookId)
            return (
              <BookSingle book={bookId} />
            )
          }}
          />
          <Route path="/book" render={(props) => {
            return (
              <BookShelf message="Please select a book to view its details." />
            )
          }} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router