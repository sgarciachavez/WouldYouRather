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
import ErrorPage from './ErrorPage'

class Dashboard extends Component {

  redirect = () => {
    let path = '/home'
    const {userpath, questions, authedUser, users} = this.props
    const user = users ? users[authedUser] : null

    if(userpath){
      const validurls = [
        '/home',
        '/add',
        '/leaderboard']

        if(validurls.includes(userpath)){
          path = userpath
        }else{
          path = '404_page_not_found'

          const inxQ = userpath.search("questions")
          if(inxQ > -1){
            const qID = userpath.substr(inxQ + 10).trim()  //is the qID valid??
            const question = questions ? questions[qID] : null

            if(question){
              const hasAnswered = user.answers.hasOwnProperty(qID)
              if(!hasAnswered){
                path = userpath
              }
            }
          }

          const inxR = userpath.search("results");
          if(inxR > -1){
            const qID = userpath.substr(inxR + 8).trim()
            const question = questions ? questions[qID] : null

            if(question){
              const hasAnswered = user.answers.hasOwnProperty(qID)
              if(hasAnswered){
                path = userpath
              }
            }
          }
        }
    }
    return path
  }
  render(){

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
              <Route path='/404_page_not_found' component = {ErrorPage} />
              <Redirect to={this.redirect()} />

            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({userPath, questions, authedUser, users}){
  return{
    userpath: userPath,
    questions: questions,
    authedUser: authedUser,
    users: users
  }
}
export default connect(mapStateToProps)(Dashboard)
