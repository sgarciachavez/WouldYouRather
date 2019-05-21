import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/shared'

class Poll extends Component{
  state = {
    option: null
  }

  handleOnSubmit = () => {
      const { dispatch, question, authedUser} = this.props

      dispatch(handleSaveAnswer({
        authedUser,
        qid: question.id,
        answer: this.state.option
      }))
  }

  handleOnChange = (e) => {
    const val = e.target.value
    this.setState(() => ({
      option: val
    }))
  }

render(){
  const { question, author } = this.props

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
             <form >
             <label className="radio-container">{question.optionOne.text}
               <input type="radio" name="poll" value="optionOne" onChange={this.handleOnChange}/>
               <span className="checkmark"></span>
             </label>

             <label className="radio-container">{question.optionTwo.text}
               <input type="radio" name="poll" value="optionTwo" onChange={this.handleOnChange}/>
               <span className="checkmark"></span>
             </label>
             </form>
           </div>
           <div className="question-button">
            <Link to={'/home'} onClick={this.handleOnSubmit}>
              <Button
                type="button" variant="primary" size="sm" block
                disabled={this.state.option ? false : true}
                className='not-allowed'>
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
