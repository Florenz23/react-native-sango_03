import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Threads from './Threads'

export default class ThreadsScreen extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../../../img/navicon_add.png'),
        id: 'add'
      }
    ]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#02C8A7',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#02C8A7',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00',
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }

  render() {
    return (
      <View style={{flex: 1 }}>
        <Threads />
      </View>
    );
  }

  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }


  onStartSingleScreenApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'example.ThreadsScreen'
      },
      drawer: {
        left: {
          screen: 'example.SideMenu'
        }
      }
    });
  }

}



const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
