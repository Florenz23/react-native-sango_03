import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ThreadView from './ThreadView';
import {NavigationActions} from 'react-navigation';
import * as ThreadStateActions from '../threads/ThreadState';

export default connect(
  (state) => ({
    posts: state.get('threads'),
  }),
  (dispatch) => ({
      navigate: () => dispatch(NavigationActions.navigate()),
      threadStateActions: () => dispatch(ThreadStateActions()),
    })
)(ThreadView)


// export default connect(
//   (state) => ({
//     recievePost: state.app.initialStatePost
//   }),
//   (dispatch) => ({
//     editPost: (dispatchPost) => dispatch(actions.postActionName(dispatchPost)),
//   })
// )(App)
