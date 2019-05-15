import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'
import NoQuestionsMessage from './NoQuestionsMessage'

class QuestionSet extends Component{
  render(){
    console.log("QuestionSet", this.props)

    const {users, questions, keys, type } = this.props

    return (
      <div>
        {keys.length === 0 && <NoQuestionsMessage type={type}/> }
        {keys.map((k) => (
          <QuestionItem key={k} question={questions[k]} users={users} type={type}/>
        ))}
        </div>
    )
  }
}


function mapStateToProps({authedUser, users, questions},{type}){

  const answeredKeys = Object.keys(users[authedUser].answers)
  const questionKeys = Object.keys(questions)

  const unansweredKeys = questionKeys.filter((k) => !answeredKeys.includes(k))


  return{
    users: users,
    questions: questions,
    keys: type === "answered" ? answeredKeys : unansweredKeys,
    type: type
  }
}

export default connect(mapStateToProps)(QuestionSet)
