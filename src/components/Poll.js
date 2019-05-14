import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Poll extends Component{
  handleOnClick = () => {
    alert(this.props.question.id)
  }
render(){
  const { question, authedUser,author } = this.props

console.log("Poll", this.props)
    return (
        <div className="question-item-container">
           <div className="question-header">{author.name}<span className='bold-purple'> asked...</span></div>
           <div className="question-avatar">
           <img
             className='avatar'
             src={author.avatarURL}
             alt={author.name} />
           </div>
           <div className="question-main">
             <p className='bold-purple'>Would you rather...</p>
             <p> {question.optionOne.text}</p>
             <p> {question.optionTwo.text}</p>
           </div>
           <div className="question-button">
            <Link to={'/home'}>
              <Button type="button" variant="primary" size="sm" block>
                Submit
              </Button>
            </Link>

           </div>
        </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions},props){
  const { question_id } = props.match.params
  const question = questions ? questions[question_id] : null
  const author = users && question ? users[question.author] : null

  return{
    question: question,
    authedUser: authedUser,
    author: author,
  }
}

export default connect(mapStateToProps)(Poll)
