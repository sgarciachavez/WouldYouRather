import { getUsers, getQuestions, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, saveUserAnswer } from '../actions/users'
import { receiveQuestions, saveAnswer } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'


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

export function handleSaveAnswer(info){
  return (dispatch) => {
    dispatch(saveAnswer(info)) //update to questions object in store
    dispatch(saveUserAnswer(info)) //update to users object in store

    return saveQuestionAnswer(info)
      .catch((e)=>{
        console.warn('Error in handleSaveAnswer: ' , e)
        dispatch(saveAnswer(info))
        alert('There was an error saving your answer.  Try again')
    })
  }
}
