import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { connect } from 'react-redux'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { handleAuthedUser } from '../actions/shared'
import AppTitle from './AppTitle'

class SignIn extends Component {

  handleSelected = (key, event) => {
    this.props.dispatch(handleAuthedUser(key))
    this.props.history.push(`/home`)
  }

  render(){
  
    return (
      <div className='main-container inner-shadow'>
        <div className='header-container'>
          <p>Welcome to the</p>
            <AppTitle />
          <p>Please sign in to continue</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />

        <DropdownButton  id="dropdown-basic-button" title="Sign in">
          {this.props.userIds.map((id)=>(
            <Dropdown.Item onSelect={this.handleSelected} eventKey={id} key={id}>
              <img
                className='select-avatar'
                src={this.props.users[id].avatarURL}
                alt={this.props.users[id].name} />
              {this.props.users[id].name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    )
  }
}

function mapStateToProps({ users }){

  return{
    userIds: Object.keys(users),
    users: users
  }
}

export default connect(mapStateToProps)(SignIn)
