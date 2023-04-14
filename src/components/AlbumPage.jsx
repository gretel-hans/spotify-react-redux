import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { headers } from "./HomePage";
import SidebarVertical from './subComponents/SidebarVertical'

const AlbumPage = () => {
  const params = useParams().id;
  const [albumDetails, setAlbumDetails] = useState(null);
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
        console.log(dato);
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
                    <div key={track.id} className="py-3 trackHover">
                      <a
                        href="void(0)"
                        className="card-title trackHover px-3"
                        style={{ color: "white" }}
                      >
                        {track.title}
                      </a>
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
    </>
  );
};

export default AlbumPage;
