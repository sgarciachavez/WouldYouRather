import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class QuestionItem extends Component{
  handleOnClick = () => {
    alert(this.props.question.id)
    //forward this id to Poll OR Results!
  }
  render(){
    const { question, users, type } = this.props

    return (
      <div className="question-item-container">
        <div className="question-header">{users[question.author].name} <span className='bold-purple'>asked...</span></div>
        <div className="question-avatar">
        <img
          className='avatar'
          src={users[question.author].avatarURL}
          alt={users[question.author].name} />
        </div>
        <div className="question-main">
          <p className='bold-purple'>Would you rather</p>
          ...{question.optionOne.text.substring(0, 10)}... <span className='bold-purple'>or</span> ... ?
        </div>
        <div className="question-button">
        {type === "answered"
        ? <Link to={`/results/${question.id}`}>
            <Button type="button" variant="outline-primary" size="sm" block >
              View Poll
            </Button>
          </Link>
        : <Link to={`/questions/${question.id}`}>
            <Button type="button" variant="outline-primary" size="sm" block >
              View Poll
            </Button>
          </Link>}

        </div>
      </div>
    )
  }
}

export default QuestionItem
