import React, { Component } from 'react'
import { Autocomplete, Input, Icon } from 'react-materialize'
import InputAutoComplete from './InputAutoComplete'

class SearchBar extends Component {
  clickSearch() {
    this.props.toggleSearch()
  }

  submitSearch(e) {
    e.preventDefault()
    alert( "Searching for " )
  }

  render() {
    const searchClass = this.props.searchOpen === false ? "material-icons search-icon white-text" : "material-icons search-icon teal-text"
    return (
      <form onSubmit={(e) => this.submitSearch()}>
        <i className={searchClass} 
          onClick={() => this.clickSearch()}
          style={{ textAlign: "right" }}
          >search</i>
        { this.props.searchOpen && 
          // <Input s={12} id="search" type="search" label="Search">
          //   <Icon>search</Icon>
          // </Input>
          // <Autocomplete
          //   title='Search'
          //   data={{
          //       'Apple': null,
          //       'Microsoft': null,
          //       'Google': 'http://placehold.it/250x250'
          //   }}
          //   onFocus={() => this.autocomplete()}
          // />
          <InputAutoComplete />
        }
        {/* <Icon>search</Icon> */}
        {/* </Input> */}
        {/* <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i> */}
      </form>
    )
  }
}
 
export default SearchBar