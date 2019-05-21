import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../actions/shared'
import User from './User'

class Nav extends Component{

  handleOnClick = (e) =>{
    this.props.dispatch(handleLogout())
  }
  
  render(){
    return(
      <nav className='nav-bar'>
      <ul>
        <li>
          <NavLink to='/home' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' exact activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/board' exact activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        <li>
          <User />
        </li>
        <li className="float-right">
          <NavLink to='/' exact activeClassName='active' onClick={this.handleOnClick}>
            Logout
          </NavLink>
        </li>
      </ul>
      </nav>
    )
  }
}

export default connect()(Nav)
