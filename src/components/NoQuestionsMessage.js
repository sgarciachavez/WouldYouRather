import React, { Component } from 'react'

class NoQuestionsMessage extends Component{
  render(){

    return (
        <div>{this.props.type === "unanswered" ?
        <p className='bold-purple'>
          <br/>You have answered all available questions.
          <br/>Go create more questions!
        </p>
        :
        <p className='bold-purple'>
          <br/>You have not answered any questions.
          <br/>Go to the "Unanswered" tab
        </p>
      }</div>
    )
  }
}

export default NoQuestionsMessage
