import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions";


const initialState = {
  songList: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        songList:[...state.songList, action.payload],
        //songList:state.songList.filter(song => song === action.payload)
      };
      case REMOVE_FAVOURITE:
      return {
        songList:state.songList.filter((songs)=>songs !== action.payload ),
        //songList:state.songList.filter(song => song === action.payload)
      };
    default:
      return state;
  }
};

export default favouriteReducer;
