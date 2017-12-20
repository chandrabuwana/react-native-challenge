import React from 'react'
import { Text, View } from 'react-native'

export default class ChatScreen extends React.Component {
  // // Nav options can be defined as a function of the screen's props:
  
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    // console.log('ini props dari this.props',this.props.navigation.state)
    return (
      <View>
        <Text>ini Chatscreen</Text>
      </View>
    );
  }
}