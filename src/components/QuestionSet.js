import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'

class QuestionSet extends Component{
  render(){
    const {users, questions, keys, type } = this.props
    return (
      <div>
        {keys.map((k) => (
          <QuestionItem key={k} question={questions[k]} users={users} type={type}/>
        ))}
        </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions},{type}){
  const answers = users[authedUser].answers //return an Object
  const answeredKeys = Object.keys(answers)
  const questionKeys = Object.keys(questions)

  let unansweredKeys = questionKeys.filter((k) => !answeredKeys.includes(k))


  return{
    users: users,
    questions: questions,
    keys: type === "answered" ? answeredKeys : unansweredKeys,
    type: type
  }
}

export default connect(mapStateToProps)(QuestionSet)
