import { handleActions } from 'redux-actions'
import { UP_VOTE } from './constants'
import { DOWN_VOTE } from './constants'

import posts from '../../mock/posts'

const initialState = {
  threadsState : posts,
  newThreadState : "moin"
}

export default handleActions({
  [UP_VOTE] : (state,action) => {
      state.allThreadsState[0].rating ++
    return {
      ...state
    }
  }
},initialState)
