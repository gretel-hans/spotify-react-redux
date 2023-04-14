export const UPDATE_SEARCHED='UPDATE_SEARCHED'

export const updateSearch=(artist)=>{
    return{
        type:UPDATE_SEARCHED,
        payload:artist
    }
}