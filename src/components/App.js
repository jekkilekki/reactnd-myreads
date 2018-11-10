import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { getAll, update } from './BooksAPI'
import Navigation from './Navigation'
import BookShelf from './BookShelf'
import BookSingle from './BookSingle'
import Search from './Search'
import NotFound from './NotFound'
import AppFooter from './AppFooter'
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

  changeShelf = (book, shelf) => {
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
      <BrowserRouter basename="/labs/myreads">
        <main className='app app-container'>
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => (
              <BookShelf books={books} onChangeShelf={this.changeShelf} loading={loading} />
            )} />
            <Route exact path="/book/:id" render={() => (
              <BookSingle onChangeShelf={this.changeShelf} />
            )} />
            <Redirect from='/book' to={{ pathname: '/search', state: { book: 'none' }}} />
            <Redirect from='/books' to={{ pathname: '/search', state: { book: 'none' }}} />
            {/* <Route exact path="/search" render={(props) => {
              if ( typeof props.location.state !== 'undefined' ) {
                console.log( "Props on search yo: ", props )
                props.history.push('/search')
              }
              return (
                <Search books={books} onUpdateBook={this.updateBook} newSearch={true} />
              )
            }} /> */}
            <Route exact path='/search' component={(props) => (
              <Search timestamp={new Date().toString()} books={books} onChangeShelf={this.changeShelf} {...props} />
            )}/>
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
          {/* <AppFooter /> */}
        </main>
      </BrowserRouter>
    )
  }
}

export default App
