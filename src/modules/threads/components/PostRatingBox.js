import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const PostRatingBox = (props) => {
  const {children} = props
  return (
          <View style={styles.postRatingContainer}>
            <Text >
              <Icon style={styles.postRatingButtons} name="ios-arrow-up"  />
            </Text>
            <Text style={styles.postRatingValue}>
              {children.rating}
            </Text>
            <Text>
              <Icon style={styles.postRatingButtons} name="ios-arrow-down"  />
            </Text>
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

export default PostRatingBox
