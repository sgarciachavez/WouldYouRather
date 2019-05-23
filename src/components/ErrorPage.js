import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetPath } from '../actions/shared'

class ErrorPage extends Component{
  handleClick = () => {
    const path = this.props.location.pathname
    this.props.dispatch(handleSetPath(path))

  }
  render(){
    
    return (
      <div>
        <h3 className='bold-purple'>PAGE NOT FOUND</h3>
        <p>Possible reasons why you got this page:</p>
        <p>1. You typed the wrong URL on purpose</p>
        {this.props.authedUser ? null :
          <div>
            <p>2. The URL is correct, but you must be logged in to view the content</p>
            <p>Take me to the <Link to={'/'} onClick={this.handleClick}>SignIn</Link> page</p>
          </div>
        }

      </div>

    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(ErrorPage)
