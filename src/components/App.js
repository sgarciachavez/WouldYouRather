import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/shared'
import SignIn from './SignIn'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleGetUsers())
  }
  render(){
    return (
      <div>
        {this.props.loggedin
          ? "User logged in! "
          : <SignIn />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }){
  return{
    loggedin: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
