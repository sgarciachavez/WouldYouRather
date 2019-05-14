import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppTitle from './AppTitle'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import Poll from './Poll'
import Results from './Results'

class Dashboard extends Component {
  state = {
    tab: "home"
  }
  render(){
    return (
      <Router>
        <Fragment>
          <div className='main-container inner-shadow'>
            <div className='header-container'>
              <AppTitle />
            </div>
            <Nav/>
              <Route path='/home' exact component={Home} />
              <Route path='/add' exact component={NewQuestion} />
              <Route path='/board' exact component={LeaderBoard} />
              <Route path='/questions/:question_id' component = {Poll} />
              <Route path='/results/:question_id' component = {Results} />
            </div>
          </Fragment>
        </Router>
    )
  }
}

export default Dashboard
