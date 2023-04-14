const initialState={
    songList:[]
}

const favouriteReducer=(state=initialState,action)=>{
    switch(action.type){
      case('ADD_FAVOURITE'):
      return(
        state
      )
      default:
    return state  
    }
    
}

export default favouriteReducer