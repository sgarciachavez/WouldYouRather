import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetPath } from '../actions/shared'

class MustSignIn extends Component{
  handleClick = () => {
    const path = this.props.location.pathname
    this.props.dispatch(handleSetPath(path))
  }
  render(){

    return (
      <div>
        <h3 className='bold-purple'>Please Log In</h3>
        <p>You must be signed in to view the requested page</p>
        <p>Take me to the <Link to={'/'} onClick={this.handleClick}>SignIn</Link> page</p>
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(MustSignIn)
