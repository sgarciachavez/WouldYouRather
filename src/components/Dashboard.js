import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import AppTitle from './AppTitle'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import Poll from './Poll'
import Results from './Results'
import { LoadingBar } from 'react-redux-loading'
import { connect } from 'react-redux'

class Dashboard extends Component {
  isvalid = () => {
    const path = this.props.userpath
    const validurls = [
      '/home',
      '/add',
      '/leaderboard',
      '/questions/:question_id',
      '/results/:question_id']

      return validurls.includes(path)
  }
  render(){
    const userpath = this.props.userpath
    const valid = this.isvalid()

    return (
      <Router>
        <Fragment>
        <LoadingBar />
          <div className='main-container inner-shadow'>
            <div className='header-container'>
              <AppTitle />
            </div>

            <Nav/>
            <Switch>
              <Route path='/home' exact component={Home} />
              <Route path='/add' exact component={NewQuestion} />
              <Route path='/leaderboard' exact component={LeaderBoard} />
              <Route path='/questions/:question_id' component = {Poll} />
              <Route path='/results/:question_id' component = {Results} />

              {userpath && valid
                ? <Redirect to={userpath} />
                : <Redirect to='/home' />}

            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({userPath}){
  return{
    userpath: userPath,
  }
}
export default connect(mapStateToProps)(Dashboard)
