import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import QuestionSet from './QuestionSet'

class Questions extends Component{
  state = {
    type: "unanswered"
  }
  handleSelect = (key) =>{
    this.setState(() => ({
      type: key
    }))
  }
  render(){
    return (
      <div className="pills-container">
      <Nav variant="pills" defaultActiveKey="unanswered"
        className="justify-content-center"
        onSelect={this.handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="unanswered">Unanswered Questions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="answered">Answered Questions</Nav.Link>
        </Nav.Item>
      </Nav>
        <QuestionSet type={this.state.type} />
      </div>
    )
  }
}

export default Questions
