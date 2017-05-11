import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ThreadView from './ThreadView';
import {NavigationActions} from 'react-navigation';
import * as ThreadStateActions from '../threads/ThreadState';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      counterStateActions: bindActionCreators(ThreadStateActions, dispatch)
    };
  }
)(ThreadView);
