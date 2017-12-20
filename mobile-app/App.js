import React from 'react';
import {Provider} from 'react-redux'
import {  Text, View, Button } from 'react-native';
import { StackNavigator ,NavigationActions} from 'react-navigation'
import Navbar from './screens/Navbar'
import store from './store/index'

export default class App extends React.Component {
  constructor(){
    super()
  }
  
  render() {
    return(
      <Provider store={store}>
        <Navbar/>      
      </Provider>
    ) 
  }
}



