export const RECEIVE_AVATARS = 'RECEIVE_AVATARS'

export function receiveAvatars (avatars){
  return {
    type: RECEIVE_AVATARS,
    avatars,
  }
}
