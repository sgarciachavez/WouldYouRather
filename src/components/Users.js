import React, { Component, Fragment } from 'react'
import AppTitle from './AppTitle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import AddUser from './AddUser'
import { LoadingBar } from 'react-redux-loading'
import { connect } from 'react-redux'
import ErrorPage from './ErrorPage'

class Users extends Component{

  render(){

    return (
      <Router>
      <Fragment>
      <LoadingBar />
        <div className='main-container inner-shadow'>
          <div className='header-container'>
            <p>Welcome to the</p>
              <AppTitle />
          </div>

          <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/adduser' exact component={AddUser} />
            <Route path='/' component={ErrorPage} />
          </Switch>

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
