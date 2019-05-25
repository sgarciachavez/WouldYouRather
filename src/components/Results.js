import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'


class Results extends Component{

  render(){
    const { question, authedUser,users } = this.props
    const answer = question.optionOne.votes.includes(authedUser)
    ? "optionOne"
    : "optionTwo"

    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const stat1 = Math.floor(optionOneVotes/totalVotes * 100)
    const stat2 = Math.floor(optionTwoVotes/totalVotes * 100)

    return (
      <div>{!question ? null :
      <div className="results-item-container">
         <div className="question-header">
          <span className='bold-purple'>Asked by  </span>
          {users[question.author].name}
        </div>
         <div className="question-avatar">
           <img
             className='avatar'
             src={users[question.author].avatarURL}
             alt={users[question.author].name} />
         </div>
         <div className="question-main">
           <p className='bold-purple'>Results</p>
           <div className={answer === "optionOne" ? "result-item-select" : "result-item"}>
            {answer === "optionOne" && <div className="topright">Your vote!</div>}
            <p>Would you rather {question.optionOne.text}?</p>
            <ProgressBar now={stat1} label={`${stat1}%`} />
            {optionOneVotes} out of {totalVotes}
          </div>
           <div className={answer === "optionTwo" ? "result-item-select" : "result-item"}>
            {answer === "optionTwo" && <div className="topright">Your vote!</div>}
            <p>Would you rather {question.optionTwo.text}?</p>
           <ProgressBar now={stat2} label={`${stat2}%`} />
           {optionTwoVotes} out of {totalVotes}
           </div>
         </div>
      </div>
      }</div>
    )
  }
}

function mapStateToProps({authedUser, users, questions},props){
  const { question_id } = props.match.params
  const question = questions ? questions[question_id] : null
  return{
    question: question,
    authedUser: authedUser,
    users: users,
  }
}

export default connect(mapStateToProps)(Results)
