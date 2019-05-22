export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER"
export const NEW_QUESTION = "NEW_QUESTION"

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveUserAnswer({authedUser, qid, answer}){
  return{
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function saveNewQuestion(question){
  return{
    type: NEW_QUESTION,
    question,
  }
}
