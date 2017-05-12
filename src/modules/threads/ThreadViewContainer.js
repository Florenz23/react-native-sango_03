import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ThreadView from './ThreadView';
import {NavigationActions} from 'react-navigation';
import * as ThreadStateActions from '../threads/ThreadState';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading']),
    posts: state.getIn(['counter','posts']),
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      threadStateActions: bindActionCreators(ThreadStateActions, dispatch)
    };
  }
)(ThreadView);


// export default connect(
//   (state) => ({
//     recievePost: state.app.initialStatePost
//   }),
//   (dispatch) => ({
//     editPost: (dispatchPost) => dispatch(actions.postActionName(dispatchPost)),
//   })
// )(App)
