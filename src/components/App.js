import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import Users from './Users'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){

    return (
      <Router>
        <div>
          {this.props.loggedin
            ? <Dashboard />
            : <Route path='/' component={Users} />
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, questions }){
  return{
    loggedin: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
