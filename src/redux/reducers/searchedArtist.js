import { UPDATE_SEARCHED } from "../actions";

const initialState = {
  artist: "",
};

const searchedArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCHED:
      return {
        artist: action.payload,
      };

    default:
      return state;
  }
};

export default searchedArtistReducer;
