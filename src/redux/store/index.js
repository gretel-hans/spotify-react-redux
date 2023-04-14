import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import searchedArtistReducer from '../reducers/searchedArtist'

const bigReducer=combineReducers({
    favourite:favouriteReducer,
    artist:searchedArtistReducer
})

const store= configureStore({
    reducer:bigReducer
})

export default store                            