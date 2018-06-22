import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import BookSingle from './BookSingle'
import Search from './Search'
import NotFound from './NotFound'

class Router extends Component {
  setPage = (url) => {
    this.props.setPage(url)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BookShelf} />
          <Route exact path="/book/:id" render={(props) => { 
            let bookId = props.location.pathname.replace('/book/', '');
            console.log("Book Id", bookId)
            console.log("Book page props", props)
            this.setPage(props.location.pathname)
            return (
              <BookSingle book={bookId} />
            )
          }}
          />
          <Route path="/book" render={() => {
            return (
              <BookShelf message="Please select a book to view its details." />
            )
          }} />
          <Route exact path="/search/:query" render={(props) => { 
            let query = props.location.pathname.replace('/search/', '');
            return (
              <Search query={query} />
            )
          }}
          />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router