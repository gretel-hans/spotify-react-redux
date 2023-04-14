import { useSelector } from "react-redux"
const BottomFooter=()=>{
  const selectedSong=useSelector(state=>{return state.song.selectedSong[0]})
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
                  <a href="void(0)">
                    <img src="/media/playerbuttons/Shuffle.png" alt="shuffle" />
                  </a>
                  <a href="void(0)">
                    <img src="/media/playerbuttons/Previous.png" alt="shuffle" />
                  </a>
                  <a href="void(0)">
                    <img src="/media/playerbuttons/Play.png" alt="shuffle" />
                  </a>
                  <a href="void(0)">
                    <img src="/media/playerbuttons/Next.png" alt="shuffle" />
                  </a>
                  <a href="void(0)">
                    <img src="/media/playerbuttons/Repeat.png" alt="shuffle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-baseline playBar py-2">
            {selectedSong&& (<span className="text-light">
            {selectedSong.artist.name} - <span>{ selectedSong.title_short } </span>⭐️</span>)}
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