import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import selectedSongReducer from '../reducers/selectedSong'

const bigReducer=combineReducers({
    favourite:favouriteReducer,
    song:selectedSongReducer
})

const store= configureStore({
    reducer:bigReducer
})

export default store                            