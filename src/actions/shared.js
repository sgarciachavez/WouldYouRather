import { getUsers, getQuestions } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'johndoe'

export function handleGetUsers(){
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}
//TODO:  Need to dynamically set the AUTHED_ID
// Pass as argument to handleAuthedUser
export function handleAuthedUser(){
  return (dispatch) => {
    return getQuestions()
      .then(({ questions }) => {
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(receiveQuestions(questions))
      })
  }
}
