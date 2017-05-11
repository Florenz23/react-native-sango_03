import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

const PostAddButton = (props) => {
  return (
        <ActionButton  position="center" buttonColor="rgba(245, 50, 64, 0.8)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
  )
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 25,
    height: 22,
    color: 'white',
  },
});

export default PostAddButton
