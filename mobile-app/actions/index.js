import Axios from 'axios'

export function news (payload){
  return {
    type:'GET_DATA',
    payload
  }
}

export function getAllDataNews (dispatch){
  // console.log('ini===============')
  return dispatch =>{
    Axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=44ef8cde89194d51ad8b42b69516d151')
    .then(({data}) =>{
      // console.log(data)
    dispatch(news(data))  
    })
    .catch(err=>{
      console.error(err)
    })
   }
  }
  