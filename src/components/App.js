import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Papa from 'papaparse'
import './App.css'
import Navigation from './Navigation'
import BookShelf from './BookShelf'
import BookSingle from './BookSingle'
import Search from './Search'
import NotFound from './NotFound'

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
      <BrowserRouter>
        <main className='app app-container'>
          <Navigation />
          <Switch>
            <Route exact path="/" component={BookShelf} />
            <Route exact path="/book/:id" component={BookSingle} />
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
