import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveNewUser,
} from './_DATA.js'

import { _getAvatars } from './_AVATAR_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function getUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}

export function getQuestions () {
  return Promise.all([
    _getQuestions(),
  ]).then(([questions]) => ({
    questions,
  }))
}

export function getAvatars(){
  return Promise.all([
    _getAvatars(),
  ]).then(([avatars]) => ({
    avatars,
  }))
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer (answer) {
  return _saveQuestionAnswer(answer)
}

export function saveNewUser(user){
  console.log("HERE!!", user)
  return _saveNewUser(user)
}
