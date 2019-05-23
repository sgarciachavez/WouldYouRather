import { RECEIVE_AVATARS } from '../actions/avatars'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_AVATARS :
      return {
        ...state,
        ...action.avatars
      }
    default :
      return state
  }
}
