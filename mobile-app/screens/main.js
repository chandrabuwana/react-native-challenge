import React from 'react'
import { ScrollView ,View ,Text} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Axios from 'axios'

export default class Home extends React.Component {
  constructor(){
    super()
    this.state ={
      news: []
    }     
  }

  componentWillMount(){
    Axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0e4eaed88dab4f44b38e744536f42b84')
    .then(({data}) =>{
      // console.log(data)
      this.setState({news: data.articles})
    })
    .catch(err=>{
      console.error(err)
    })
  }

  render() {
    return (
      <ScrollView>
        {this.state.news.map((data, index) => {
          return (
            <View key={index}>                                                                                                                                                                                                                                                                                                                                                                   :data.urlToImage}}/>
              <Text >{data.author}</Text>
              <Text >{data.description}</Text>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

