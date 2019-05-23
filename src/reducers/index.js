import { combineReducers } from 'redux'
import {authedUser, userPath} from './authedUser'
import users from './users'
import questions from './questions'
import avatars from './avatars'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  questions,
  avatars,
  userPath,
  loadingBar: loadingBarReducer,
})
