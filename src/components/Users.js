import React, { Component, Fragment } from 'react'
import AppTitle from './AppTitle'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './SignIn'
import AddUser from './AddUser'
import { LoadingBar } from 'react-redux-loading'
import { connect } from 'react-redux'
import ErrorPage from './ErrorPage'

class Users extends Component{
  componentDidMount() {
    console.log(this.props)
  }
  render(){

    const validpaths = ['/', '/adduser']

    const valid = validpaths.includes(this.props.location.pathname)

    return (
      <Router>
      <Fragment>
      <LoadingBar />
        <div className='main-container inner-shadow'>
          <div className='header-container'>
            <p>Welcome to the</p>
              <AppTitle />
          </div>
          {!valid && <ErrorPage />}
          <Route path='/' exact component={SignIn} />
          <Route path='/adduser' exact component={AddUser} />
        </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(Users)
