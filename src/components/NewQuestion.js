import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { handleAddQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NewQuestion extends Component{
  state = {
    disabled: true,
    optionone: '',
    optiontwo: ''
  }
  handleSubmit = () => {
    //question = { optionOneText, optionTwoText, author }
    const { dispatch, authedUser} = this.props
    const { optionone, optiontwo } = this.state

    const obj = {
      optionOneText: optionone,
      optionTwoText: optiontwo,
      author: authedUser
    }

    dispatch(handleAddQuestion(obj))
  }
  handleChange = (e) => {
    const id = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [id]: value
    }))

    if(this.state.optionone.length > 5 && this.state.optiontwo.length > 5){
      this.setState(() => ({
        disabled: false
      }))
    }else{
      this.setState(() => ({
        disabled: true
      }))
    }
  }

  render(){
    return (
      <div className="newquestion-container">
        <div className="question-header">
          <h3 className='bold-purple'>Create New Question</h3>
        </div>

        <div className="question-main">
          <p className='bold-purple'>Would you rather...</p>
            <Form.Group>
              <Form.Control id="optionone" type="input" placeholder="Enter option one" onChange={this.handleChange}/>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Control id="optiontwo" type="input" placeholder="Enter option two" onChange={this.handleChange}/>
            </Form.Group>
        </div>
        <div className='question-button'>
        <Link to={'/home'} onClick={this.handleSubmit}>
          <Button
            className='not-allowed'
            variant="primary" type="button"
            disabled={this.state.disabled}>
            Submit
          </Button>
        </Link>
          </div>
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
