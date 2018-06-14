import React from 'react'
import { Input, Icon, Autocomplete, Row } from 'react-materialize'
// import Autocomplete from 'react-materialize/lib/Autocomplete';

const Navigation = (props) => {
  return (
    <header className="app-header">
      <div className="main-navigation navbar-fixed">
        <nav className="teal">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo centered">MyReads</a>
            <i className="material-icons search-icon" style={{textAlign: "right"}}>search</i>
            <form>
              {/* <Input s={12} id="search" type="search" label="Search"> */}
                {/* <Icon>search</Icon> */}
              {/* </Input> */}
              {/* <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i> */}
            </form>
          </div>
        </nav>
      </div>
    </header>
  )
}
 
export default Navigation;