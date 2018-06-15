import React, { Component } from 'react';
import Papa from 'papaparse'

export default class InputAutoComplete extends Component {

  constructor (props) {
    super(props);
    this.options = ['aaron', 'snowberger']
    this.state = {
      input: '',
      selected: false
    };
  }

//   componentWillMount() {
//     Papa.parse("/SEARCH_TERMS.csv", {
//       download: true,
//       error: (err) => {
//         console.log(err)
//       },
//       complete: (results) => {
//         console.log( results )
//         this.options = results.data
//         console.log( "Search terms", this.options)
//       }
//     })
//     console.log( this.options )
//   }

  handleChange(event) {
    return this.setState({
      input: event.target.value
    });
  }

  handleClick(option) {
    return this.setState({
      input: option
    });
  }

  matches(input) {
    const regex = new RegExp(input, 'i');
    return this.options.filter(function(option) {
      return option.match(regex) && option !== input;
    });
  }

  onInputFocus(show) {
    if (show) {
      this.setState({selected: true})
    } else {
      setTimeout( () => this.setState({selected: false}), 500)
    }
  }

  render() {
    let styleSelect = {
      position: 'absolute',
      backgroundColor: '#f1f1f1',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
    };

    let styleOptions = {
      color: 'black',
      padding: '12px 16px',
      display: 'block',
    };

    let autoComplete = null;
    if (this.state.selected) {
      autoComplete = (<div style={styleSelect}>{
        this.matches(this.state.input).map( option => {
          return <div style={styleOptions} onClick={ () => this.handleClick(option)}>{option}</div>;
        })
      }</div>);
    }

    return (
        <div>
          <input onChange={this.handleChange.bind(this)}
                 onFocus={ () => this.onInputFocus(true) }
                 onBlur={ () => this.onInputFocus(false) }
                 value={this.state.input}/>
          <br/>
          {autoComplete}
        </div>
    );
  }
}