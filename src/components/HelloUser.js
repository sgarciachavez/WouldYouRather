import React, { Component } from 'react'
import { connect } from 'react-redux'

class HelloUser extends Component{
  render(){
    const {authedUser, users} = this.props
    const name = users[authedUser].name
    const firstname = name.substring(0, name.indexOf(' '))
    return (
        <div className='user'>
          Hello, {firstname}
          <img
            className='user-avatar'
            src={users[authedUser].avatarURL}
            alt={users[authedUser].name} />
        </div>
    )
  }
}

function mapStateToProps({authedUser, users}){
  return{
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(HelloUser)
