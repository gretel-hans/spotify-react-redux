/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import {  addFavouriteSong, removeFavouriteSong } from "../../redux/actions"


const BottomFooter=()=>{
  const selectedSong=useSelector(state=>{return state.song.selectedSong[0]})
  const favouriteSongList=useSelector(state=>{return state.favourite.songList})
  const [selectedfavourite,setSelectedFavourite]=useState(false)
  const dispatch=useDispatch()

  const heart='bi bi-heart'
  const heart_fill='bi bi-heart-fill'
  

  useEffect(()=>{
    //console.log(favouriteSongList)
    //console.log(selectedSong)
    if(favouriteSongList.length>=1&&(favouriteSongList.includes(selectedSong.title_short))){
      console.log('lo include già')
      setSelectedFavourite(true)
    }else{
      setSelectedFavourite(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedSong])
  //console.log(selectedSong)
    return(
        <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row-special">
          <div className="col-lg-10 offset-lg-2">
            <div className="row ">
              <div
                className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
              >
                <div className="row">
                  <a href="#">
                    <img src="/media/playerbuttons/Shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/media/playerbuttons/Previous.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/media/playerbuttons/Play.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/media/playerbuttons/Next.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/media/playerbuttons/Repeat.png" alt="shuffle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-baseline playBar py-2">
            {selectedSong&& (<span className="text-light">
            {selectedSong.artist.name} - <span>{ selectedSong.title_short } </span><i className={selectedfavourite?heart_fill:heart} onClick={()=>{
              setSelectedFavourite(!selectedfavourite)
              if(selectedfavourite===false){
                console.log('AGGIUNTO AI PREFE')
                dispatch( addFavouriteSong(selectedSong.title_short))
              }else{
                console.log('RIMOSSO DAI PREFE')
                dispatch( removeFavouriteSong(selectedSong.title_short) )
              }
            }}></i></span>)}
              <div className="col-8 col-md-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default BottomFooter