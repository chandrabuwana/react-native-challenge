import React from 'react'
import { ScrollView ,View ,Text, FlatList, StyleSheet,Image} from 'react-native'
import {Card, ListItem ,Button,List} from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import {getAllDataNews} from '../actions/index'
import Axios from 'axios'
import {connect} from 'react-redux'
import Detail from './layout'


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      news: []
    }     
  }


  componentWillMount(){
    this.props.getAllDataNews()
  }
  
  render() {
    return (
      <List>
        <FlatList
          data={this.props.news}
          keyExtractor={(item=> item.id)}
          renderItem={({item})=>
          <View>
            <Card title={item.title}>
            <Image 
            style={{ height: 100}} resizeMode="contain"
            source={{uri:item.urlToImage}}/>
              <Text style={{alignItems:'center'}}>{item.description}</Text>                                    
              <Button              
              title='BUTTON WITH ICON'
              onPress={() => this.props.navigation.navigate('Detail',{itemDetail: item})}/>
              </Card>
          </View>
          }        
        />      
      </List>
    )
  }
}

const style =StyleSheet.create({

})
const mapStateToProps = (state)=>{
  console.log('ini state',state)
  return {
    news: state.news.articles
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    getAllDataNews:()=> dispatch(getAllDataNews())  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)