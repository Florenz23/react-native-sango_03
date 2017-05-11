import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { posts } from '../../mock/posts'
import { PostRatingBox, PostAddButton, PostTextBox } from '../../components'

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

const Threads = (props) => {
  return (
    <View>
    <ScrollView>
      {renderPosts()}
    </ScrollView>
      <PostAddButton />
      </View>
    )
}


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

export default Threads
