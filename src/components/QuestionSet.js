import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'
import NoQuestionsMessage from './NoQuestionsMessage'

class QuestionSet extends Component{
  render(){
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
  //const questionKeys = Object.keys(questions)
  //const unansweredKeys = questionKeys.filter((k) => !answeredKeys.includes(k))

  //SORT Questions!!
  const sortedQs = Object.entries(questions).sort((a, b,) => b[1].timestamp - a[1].timestamp)

  const aKSorted = []
  const uKSorted = []

   for(let q of sortedQs){
     answeredKeys.includes(q[0]) ? aKSorted.push(q[0]) : uKSorted.push(q[0])
   }

  return{
    users: users,
    questions: questions,
    //keys: type === "answered" ? answeredKeys : unansweredKeys,
    keys: type === "answered" ? aKSorted : uKSorted,
    type: type
  }
}

export default connect(mapStateToProps)(QuestionSet)
