import { UP_VOTE } from './constants'
import { DOWN_VOTE } from './constants'
import { ADD_POST } from './constants'


export const upVoteAction = (recentVote) => {
  return {
    type : UP_VOTE,
    payload : {
      recentVote
    }
  }
}
export const downVoteAction = (recentVote) => {
  return {
    type : UP_VOTE,
    payload : {
      recentVote
    }
  }
}
export const addPostAction = (recentVote) => {
  return {
    type : UP_VOTE,
    payload : {
      recentVote
    }
  }
}
