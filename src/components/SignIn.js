import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { connect } from 'react-redux'


class SignIn extends Component {
  render(){

    return (
      <div className='main-container inner-shadow'>
        <div className='header-container'>
          <p>Welcome to the</p>
          <p className='bold-purple'>Would You Rather App!</p>
          <p>Please sign in to continue</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bold-purple'>Sign in</p>
        <ul className='bold-purple'>
          {this.props.userIds.map((id)=>(
            <li key={id}>User Id: {id}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }){
  return{
    userIds: Object.keys(users)

  }
}

export default connect(mapStateToProps)(SignIn)
