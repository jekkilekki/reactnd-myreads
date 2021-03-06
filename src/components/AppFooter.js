import React, { Component } from 'react'
import { Footer } from 'react-materialize'

class AppFooter extends Component {
  render() {
    return (
      <Footer
        className='app-footer teal lighten-2'
        copyrights='&copy; 2018 Aaron Snowberger'
        moreLinks={<a className='black-text right' href='https://github.com/jekkilekki/reactnd-would-you-rather'>Github repo</a>}
      >
        <h5>MyReads</h5>
        <p>This app developed as a part of <a className='black-text text-lighten-2' href='https://www.udacity.com/course/react-nanodegree--nd019'>Udacity's React Nanodegree program.</a></p>
      </Footer>
    )
  }
}

export default AppFooter