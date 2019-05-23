export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOGOUT = 'LOGOUT'
export const SET_PATH = "SET_PATH"

export function setAuthedUser (id){
  return {
    type: SET_AUTHED_USER,
    id,
  }
}
export function logoutUser(){
  return{
    type: LOGOUT
  }
}

export function setUserPath(path){
  return {
    type: SET_PATH,
    path
  }
}
