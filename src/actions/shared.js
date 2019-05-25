import { getUsers, saveQuestionAnswer,saveQuestion, getAvatars, saveNewUser, getInitialData } from '../utils/api'
import { receiveUsers, saveUserAnswer, saveNewQuestion, addNewUser} from '../actions/users'
import { receiveQuestions, saveAnswer, addQuestion } from '../actions/questions'
import { setAuthedUser, logoutUser, setUserPath  } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveAvatars } from '../actions/avatars'

export function handleInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleGetUsers(){
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}

export function handleGetAvatars(){
  return (dispatch) => {
    return getAvatars()
      .then(({ avatars }) => {
        dispatch(receiveAvatars(avatars))
      })
  }
}

export function handleAuthedUser(authedId){
  return (dispatch) => {
    dispatch(setAuthedUser(authedId))
  }
}

export function handleSetPath(path){
  return (dispatch)=>{
    dispatch(setUserPath(path))
  }
}

export function handleLogout(){
  return (dispatch) => {
    dispatch(logoutUser())
    dispatch(setUserPath(null))
  }
}

export function handleSaveAnswer(info){
  return (dispatch) => {
    dispatch(saveAnswer(info)) //update to questions object in store
    dispatch(saveUserAnswer(info)) //update to users object in store

    return saveQuestionAnswer(info)
      .catch((e)=>{
        console.warn('Error in handleSaveAnswer: ' , e)
        dispatch(saveAnswer(info))
        dispatch(saveUserAnswer(info))
        alert('There was an error saving your answer.  Try again')
    })
  }
}

export function handleAddQuestion(info){ //question = { optionOneText, optionTwoText, author }
  return(dispatch) => {
    dispatch(showLoading())
    return saveQuestion(info)
      .then((question)=>{
        dispatch(addQuestion(question))
        dispatch(saveNewQuestion(question))
        dispatch(hideLoading())
      })
      .catch((e)=>{
        console.warn('Error in handleAddQuestion', e)
        dispatch(addQuestion(info))
        dispatch(saveNewQuestion(info))
        alert('There was an error saving your question. Try again')
      })
  }
}

export function handleNewUser(user){
  return (dispatch) => {
    dispatch(addNewUser(user)) //update store 1st

    return saveNewUser(user)
    .catch((e)=>{
      console.warn("Error in adding new user")
      dispatch(addNewUser(user))
      alert('There was an error saving the new user.  Try again')
    })
  }
}
