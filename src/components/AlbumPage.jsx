/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { headers } from "./HomePage";
import SidebarVertical from './subComponents/SidebarVertical'
import { useDispatch } from "react-redux";
import { addSong } from "../redux/actions";
import BottomFooter from "../components/subComponents/BottomFooter";
import TopNavbar from "./subComponents/TopNavbar";

const AlbumPage = () => {
  const params = useParams().id;
  const [albumDetails, setAlbumDetails] = useState(null);
  const dispatch=useDispatch()
  //console.log(params)

  const getAlbumFetch = () => {
    return fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + params,
      {
        method: "GET",
        headers,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("ERROR during fetch");
        }
      })
      .then((dato) => {
       // console.log(dato);
        setAlbumDetails(dato);
      });
  };

  useEffect(() => {
    getAlbumFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <SidebarVertical/>
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <TopNavbar/>
      <div className="row">
        <div className="col-md-3 pt-5 text-center" id="img-container">
          {albumDetails && (
            <>
              <img
                src={albumDetails.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{albumDetails.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">{albumDetails.artist.name}</p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
              `
            </>
          )}
        </div>
        <div className="col-md-8 p-5">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList">

              {albumDetails &&
                albumDetails.tracks.data.map((track) => {
                  return (
                    <div key={track.id} className="py-3 trackHover" onClick={()=>{
                        dispatch(addSong(track))
                        }} >
                      <span
                        className="card-title trackHover px-3"
                        style={{ color: "white" }}
                      >
                        {track.title}
                      </span>
                      <small className="duration" style={{ color: "white" }}>
                        
                        {Math.floor(
                          parseInt(track.duration) / 60 // setting the duration minutes
                        )}
                        :
                        {parseInt(track.duration) % 60 < 10
                          ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                          : parseInt(track.duration) % 60}
                      </small>
                    </div>
                  );
                })}

            </div>
          </div>
        </div>
      </div>
    </div>

    <BottomFooter/>
    </>
  );
};

export default AlbumPage;
