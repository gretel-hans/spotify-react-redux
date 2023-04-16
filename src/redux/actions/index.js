export const SELECT_SONG='SELECT_SONG'
export const ADD_FAVOURITE='ADD_FAVOURITE'
export const REMOVE_FAVOURITE='REMOVE_FAVOURITE'


export const addSong=(song)=>{
    return{
        type:SELECT_SONG,
        payload:song
    }
}

export const addFavouriteSong=(songFavourite)=>{
    return{
        type:ADD_FAVOURITE,
        payload:songFavourite
    }
}

export const removeFavouriteSong=(songRemove)=>{
    return{
        type:REMOVE_FAVOURITE,
        payload:songRemove
    }
}