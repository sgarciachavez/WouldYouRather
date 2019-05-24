import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { handleAddQuestion } from '../actions/shared'
import { connect } from 'react-redux'

class NewQuestion extends Component{
  state = {
    optionone: '',
    optiontwo: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, authedUser} = this.props
    const { optionone, optiontwo } = this.state

    const obj = {
      optionOneText: optionone,
      optionTwoText: optiontwo,
      author: authedUser
    }

    dispatch(handleAddQuestion(obj))
    this.props.history.push('/home');
  }

  handleChange = (e) => {
    const id = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [id]: value
    }))
  }

  render(){
    return (
      <div className="newquestion-container">
        <div className="question-header">
          <h3 className='bold-purple'>Create New Question</h3>
        </div>
        <Form onSubmit={this.handleSubmit}>
        <div className="question-main">
          <p className='bold-purple'>Would you rather...</p>
            <Form.Group>
              <Form.Control required
                id="optionone" type="input"
                placeholder="Enter option one"
                onChange={this.handleChange}/>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Control required
              id="optiontwo" type="input"
              placeholder="Enter option two"
              onChange={this.handleChange}/>
            </Form.Group>
        </div>
        <div className='question-button'>
          <Button
            className='not-allowed'
            variant="primary" type="submit">
            Submit
          </Button>
          </div>
        </Form>
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}
export default connect(mapStateToProps)(NewQuestion)
