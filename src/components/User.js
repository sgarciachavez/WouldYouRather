import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component{
  render(){
    const {authedUser, users} = this.props
    return (
        <div className='user'>
          Hello, {users[authedUser].name}
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

export default connect(mapStateToProps)(User)
