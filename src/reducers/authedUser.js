import { SET_AUTHED_USER, LOGOUT, SET_PATH } from '../actions/authedUser'

export  function authedUser(state = null, action){
  switch(action.type){
    case SET_AUTHED_USER :
      return action.id
    case LOGOUT :
        return state = null;
    default :
      return state
  }
}

export  function userPath(state = null, action){
  switch(action.type){
    case SET_PATH :
      return action.path
    default :
      return state
  }
}
