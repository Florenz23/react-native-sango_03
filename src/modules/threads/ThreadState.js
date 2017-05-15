import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import {generateRandomNumber} from '../../services/randomNumberService';

import {posts} from '../../mock/posts'


// Initial state
const initialState = Map({
  posts: posts,
});

// Actions
const INCREMENT = 'CounterState/INCREMENT';

// Action creators
export function increment() {
  return {type: INCREMENT};
}



// Reducer
export default function ThreadStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    default:
      return state;
  }
}
