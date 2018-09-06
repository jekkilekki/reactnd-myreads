import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { getAll, update } from './BooksAPI'
import Navigation from './Navigation'
import BookShelf from './BookShelf'
import BookSingle from './BookSingle'
import Search from './Search'
import NotFound from './NotFound'
import './App.css'

class App extends Component {
  state = {
    books: [],
    loading: true
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState({
        books: books,
        loading: false
      })
    })
    .catch((e) => console.log("There was an error retrieving Book data.", e))
  }

  updateBook = (book, shelf) => {
    update( book, shelf )
      .then(() => {
        book.shelf = shelf
        this.setState((prevState) => ({
          books: prevState.books
            .filter((bk) => (bk.id !== book.id))
            .concat([ book ])
        }))
      })
  }

  // toggleFavorite() {
  //   var favorite = { ...this.state.someProperty }
  //   favorite.favorited = true;
  //   this.setState({ favorite })
  //   console.log(this)
  // }

  render() {
    const { books, loading } = this.state

    return (
      <BrowserRouter>
        <main className='app app-container'>
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => (
              <BookShelf books={books} onUpdateBook={this.updateBook} loading={loading} />
            )} />
            <Route exact path="/book/:id" component={BookSingle} />
            <Redirect from='/book' to={{ pathname: '/search', state: { book: 'none' }}} />
            <Redirect from='/books' to={{ pathname: '/search', state: { book: 'none' }}} />
            <Route exact path="/search" render={() => (
              <Search books={books} onUpdateBook={this.updateBook} />
            )} />
            <Route path="/search/:query" render={(props) => (
              <Redirect to={{
                pathname: '/search',
                state: {
                  query: props.match.params.query
                }
              }} />
            )} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
