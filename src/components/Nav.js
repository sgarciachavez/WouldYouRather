import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component{
  render(){

    return(
      <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/home' activeClassName='active'>
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
      </ul>
      </nav>
    )
  }
}

export default Nav
