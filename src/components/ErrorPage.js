import React, { Component } from 'react'
import { connect } from 'react-redux'

class ErrorPage extends Component{

  render(){

    return (
      <div>
        <h3 className='bold-purple'>PAGE NOT FOUND</h3>
        <p className='bold-purple'>Incorrect URL: {this.props.userPath}</p>
        <p>Possible reasons why you got this page:</p>
        <p>1. You typed the wrong URL on purpose</p>
        <p>2. The question id is correct, but the category is wrong. <br />

        Try "/questions/:question_id" instead of "results/:question_id" or vice versa</p>
      </div>

    )
  }
}

function mapStateToProps({userPath}){
  return{
    userPath
  }
}

export default connect(mapStateToProps)(ErrorPage)
