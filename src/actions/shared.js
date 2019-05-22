import { getUsers, getQuestions, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, saveUserAnswer, saveNewQuestion} from '../actions/users'
import { receiveQuestions, saveAnswer, addQuestion } from '../actions/questions'
import { setAuthedUser, logoutUser  } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleGetUsers(){
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}

export function handleAuthedUser(authedId){
  return (dispatch) => {
    return getQuestions()
      .then(({ questions }) => {
        dispatch(setAuthedUser(authedId))
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleLogout(){
  return (dispatch) => {
    dispatch(logoutUser())
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
