import React from 'react';
import {  Text, View, Button } from 'react-native';
import { StackNavigator ,NavigationActions} from 'react-navigation'
import Home from './screens/main'

export default class App extends React.Component {
  constructor(){
    super()
  }
  
  render() {
    return(
      <Home/>
    ) 
  }
}



