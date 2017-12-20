import React from 'react'
import {View, Text , Button} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {SearchBar} from 'react-native-elements'

import HomeScreen from './main'
import DetailScreen from './layout'

const RootNavigator = StackNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions :{
      headerTitle :'Home'
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: 'Detail'
    }
  }
})

export default RootNavigator