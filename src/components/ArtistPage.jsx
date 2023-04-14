import SidebarVertical from './subComponents/SidebarVertical'
import { useParams } from 'react-router-dom'
import { headers } from "./HomePage";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ArtistPage=()=>{

    const[artistAlbum,setArtistAlbum]=useState(null)
    const[artistDetails,setArtistDetails]=useState(null)
    const artistSearch=useSelector(state=>{return state.artist.artist})
    //https://www.deezer.com/artist/
    const params=useParams().id
    console.log(artistSearch)
    //console.log(params)

    const artistFetch=()=>{
        return fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/artist/${params}`,
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
              console.log(dato);
              setArtistAlbum(dato);
            });
    }

    const artistDetailsFetch=()=>{
        return fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistSearch}`,
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
              console.log(dato.data);
              setArtistDetails(dato.data);
            });
    }


    useEffect(()=>{
        artistFetch()
        artistDetailsFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    return(
        <>
        <SidebarVertical/>
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <div className="row mb-3">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="void(0)">TRENDING</a>
              <a href="void(0)">PODCAST</a>
              <a href="void(0)">MOODS AND GENRES</a>
              <a href="void(0)">NEW RELEASES</a>
              <a href="void(0)">DISCOVER</a>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-10 col-lg-10 mt-5">
              <h2 className="titleMain">{artistAlbum&& (artistAlbum.name)}</h2>
              <div id="followers">{artistAlbum&& (artistAlbum.nb_fan)} followers</div>
              <div className="d-flex justify-content-center" id="button-container">
                <button
                  className="btn btn-success mr-2 mainButton "
                  id="playButton"
                >
                  PLAY
                </button>
                <button
                  className="btn btn-outline-light mainButton "
                  id="followButton"
                >
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <div className="row" id="apiLoaded">
                    {
                        artistDetails&&artistDetails.map(songInfo=>{
                            return(
                                <div key={songInfo.id} className="col-sm-auto col-md-auto text-center mb-5">
            
                <Link to={`/albumpage/${songInfo.album.id}`}> 
                <img className="img-fluid" src={
                songInfo.album.cover_medium // creating the album image anchor
              } alt="1" />
                </Link>
              
            
            <p>
              <a href="void(0)">
                Track: "${
                  songInfo.title.length < 16
                    ? `${songInfo.title}`
                    : `${songInfo.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </a><br/>
              <Link to={`/albumpage/${songInfo.album.id}`}>
                Album: "${
                  songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
                 </Link>
            </p>
          </div>
                            )
                        })
                     }
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
       
    )
}

export default ArtistPage