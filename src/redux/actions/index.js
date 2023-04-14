export const SELECT_SONG='SELECT_SONG'

export const addSong=(song)=>{
    return{
        type:SELECT_SONG,
        payload:song
    }
}