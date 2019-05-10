import React, { Component } from 'react';
import Menu from './Menu'
import AppTitle from './AppTitle'



class Home extends Component {
  render(){
    return (
      <div className='main-container inner-shadow'>
        <div className='header-container'>
          <AppTitle />
        </div>
        <Menu />
      </div>
    )
  }
}

export default Home
