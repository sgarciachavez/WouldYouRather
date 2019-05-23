import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component{
  handleClick = () => {
    this.props.history.push(`/`)
  }
  render(){

    return (
      <div>
        <h3 className='bold-purple'>PAGE NOT FOUND</h3>
          <p>Possible reasons why you got this page:</p>
          <p>1. You typed the wrong URL on purpose</p>
          <p>2. The URL is correct, but you must be logged in to view the content</p>
          <p>Take me to the <Link to={'/'} onClick={this.handleClick}>SignIn </Link> page</p>

      </div>
    )
  }
}

export default ErrorPage
