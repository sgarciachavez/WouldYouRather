import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { handleGetAvatars } from '../actions/shared'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleNewUser, handleAuthedUser, handleGetUsers } from '../actions/shared'

class AddUser extends Component{

  state = {
    firstname: '',
    lastname: '',
    userid: '',
    avatarurl: '',
    disabled: true
  }
  componentDidMount(){
    this.props.dispatch(handleGetAvatars())
  }

  handleSubmit = (e) =>{
    //Check if the userid is Unique
      if(this.props.users[this.state.userid]){
        alert("User name already taken.  Try again.")
        e.preventDefault()
        this.setState(
          { userid: '' },
          ()=> this.isDisabled() )
          document.getElementById("userid").value='';
      }else{
        const user = this.getUserObject()

        this.props.dispatch(handleNewUser(user))
        this.props.dispatch(handleGetUsers())
        this.props.dispatch(handleAuthedUser(user.id))
      }
  }
  getUserObject(){
    const { firstname, lastname,userid,avatarurl } = this.state
    const user = {
        id: userid,
        name: `${firstname} ${lastname}`,
        avatarURL: avatarurl,
        answers : {},
        questions: [],
    }
      return user
  }
  handleClick = (e) => {
    const id = e.target.id

    this.setState(
      { avatarurl: id },
      ()=> this.isDisabled() ) //Used a callback function because setState is asynchronous
                               //and my previous code was not working
    //this.setState(() => ({
    //  avatarurl: id
    //}))

    //this.isDisabled()
  }

  handleChange = (e) => {
    const id = e.target.id
    const value = e.target.value

    this.setState(
      { [id]: value },
      ()=> this.isDisabled() )
  }

  isDisabled = () => {

    if(this.state.firstname.length > 0
      && this.state.lastname.length > 0
      && this.state.userid.length > 0
      && this.state.avatarurl.length > 0){

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
    const { urls } = this.props.avatars

    return (

        <div className='newUser-container'>
        <p className='bold-purple'>Create new user</p>
          <Form.Group>
            <Form.Control id="firstname" type="input"
              placeholder="First name"
              onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Control id="lastname" type="input"
            placeholder="Last name"
            onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Control id="userid" type="input"
            placeholder="Username"
            onChange={this.handleChange}/>
            <Form.Text className="text-muted">Unique username</Form.Text>
          </Form.Group>

            <div className='avatar-container'>

            {urls && urls.map((url,index)=>(
              <div className='avatar-item' key={index}>
              <button className="btn">
              <img id={url}
                className='img-avatar'
                src={url}
                onClick={this.handleClick}
                alt='avatar icon'/>
                </button>
              </div>))}
            </div>
            <div className='new-user-btn'>
            <Link to={'/'} onClick={this.handleSubmit} className='not-allowed'>
              <Button
                className='not-allowed'
                variant="primary" type="button" block
                disabled={this.state.disabled}>
                Create new user & Sign in
              </Button>
            </Link>
            </div>
        </div>
    )
  }
}

function mapStateToProps({ avatars, users }){

  return{
   avatars: avatars,
   users: users
  }
}

export default connect(mapStateToProps)(AddUser)
