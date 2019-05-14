import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/shared'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleGetUsers())
  }

  render(){
    console.log("App: ", this.props)
    return (
        <div>
          {this.props.loggedin
            ? <Dashboard />
            : <Router>
                <Route exact path='/' component={SignIn} />
              </Router>}
        </div>

    );
  }
}

function mapStateToProps({ authedUser, questions }){
  return{
    loggedin: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
