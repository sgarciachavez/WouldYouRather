import { RECEIVE_USERS, SAVE_USER_ANSWER, NEW_QUESTION, NEW_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return{
        ...state,
        ...action.users
      }
    case SAVE_USER_ANSWER :
      return{
        ...state,
        [action.authedUser] : {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
          [action.qid]: action.answer
          }
        }
      }
    case NEW_USER :
      return{
        ...state,
        [action.user.id]: action.user
      }
    case NEW_QUESTION :
      const question = action.question
      return{
        ...state,
        [question.author] : {
          ...state[question.author],
         questions: state[question.author].questions.concat([question.id])
        }
      }
    default :
      return state
  }
}
