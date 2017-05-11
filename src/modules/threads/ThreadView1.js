
import React, {PropTypes, Component} from 'react';

import { Button, View, StyleSheet, Text, ScrollView } from 'react-native'

import { posts } from '../../../src/mock/posts'
import { PostRatingBox, PostAddButton, PostTextBox } from './components'

import Icon from 'react-native-vector-icons/MaterialIcons';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
const renderPosts = () => {
  return posts.map( post => {
    return (
        <View style={[styles.container,{backgroundColor:post.bgColor}]} key={post.postId}>
          <PostTextBox>
          {post}
          </PostTextBox>
          <PostRatingBox style={styles.postRatingContainer}>
            {post}
          </PostRatingBox>
        </View>
    )
  })
}
class ThreadView extends Component {
  static displayName = 'ThreadView';

  static navigationOptions = {
    title: 'Colors!',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='color-lens' size={24} color={props.tintColor} />
      )
    }),
    // TODO: move this into global config?
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#39babd'
      }
    }
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  }

  open = () => {
    this.props.navigate({routeName: 'InfiniteColorStack'});
  };

  render() {
    const buttonText = 'Moin in Stack Navigator';
    return (
    <View>
    <ScrollView>
      {renderPosts()}
    </ScrollView>
      <PostAddButton />
      </View>
    )
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var styles = StyleSheet.create({
  container: {
    padding : 15,
    marginBottom :6,
    flexDirection : 'row'
  },
  postTextContainer : {
    flex : 4
  },
  postText : {
    fontSize: 25,
    color: 'white',
  },
  postRatingContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  postRatingButtons : {
    fontSize : 50,
    color : '#4F8EF7'
  },
  postRatingValue : {
    fontSize : 30,
    color : '#4F8EF7'
  },
  postReplyContainer : {
    flexDirection : 'column',
  },
  postReplyIcon : {
    fontSize : 10,
  },
  postReplyNumber : {
    fontSize : 10,
  }
});

export default ThreadView;
