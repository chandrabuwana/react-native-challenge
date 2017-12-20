import React from 'react'
import { Text, View, Image } from 'react-native'
import { Card, ListItem, Button, List } from 'react-native-elements'
export default class ChatScreen extends React.Component {
  // // Nav options can be defined as a function of the screen's props:
  
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    console.log('ini props dari this.props',this.props.navigation.state)
    return (
      <View>
        <Card title={params.itemDetail.title}>
          <Image 
            style={{ height: 100 }} resizeMode="contain"
            source={{uri : params.itemDetail.urlToImage}}
            />
          <Text>Author: {params.itemDetail.author}</Text>
          <Text >{params.itemDetail.description}</Text>
        </Card>
        
      </View>
    );
  }
}