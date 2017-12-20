const initialState ={
  news:[]
}

const News = (state = initialState, actions )=>{
  // console.log('iniaction',actions)
  switch(actions.type){
    case 'GET_DATA':
    return {...state, news: actions.payload}
    default:
    return state
  } 
}

export default News