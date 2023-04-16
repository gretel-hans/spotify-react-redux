/* eslint-disable jsx-a11y/anchor-is-valid */
import SidebarVertical from "./subComponents/SidebarVertical";
import { useParams,Link } from "react-router-dom";
import { headers } from "./HomePage";
import { useEffect, useState } from "react";
import BottomFooter from "../components/subComponents/BottomFooter";
import TopNavbar from "./subComponents/TopNavbar";
import ArtistAlbums from "./subComponents/ArtistAlbums";

const ArtistPage = () => {
  const [artistAlbum, setArtistAlbum] = useState(null);
  const [artistDetails, setArtistDetails] = useState(null);
  //const artistSearch=useSelector(state=>{return state.artist.artist})

  //https://www.deezer.com/artist/
  const params = useParams().id;
  //console.log(artistSearch)
  //console.log(params)

  const artistFetch = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${params}`,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let artist = await response.json();
        setArtistAlbum(artist);

        let tracksResponse = await fetch(
          // await the fetch of the artist songs
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist.name}`,
          {
            method: "GET",
            headers,
          }
        );
        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          setArtistDetails(tracklist.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    artistFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SidebarVertical />
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <TopNavbar />
        <Link to='/' id="homeBack">Go back Home </Link>

        <div className="row">
          <div className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{artistAlbum && artistAlbum.name}</h2>
            <div id="followers">
              {artistAlbum && artistAlbum.nb_fan} followers
            </div>
            <div
              className="d-flex justify-content-center"
              id="button-container"
            >
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
                {artistDetails &&
                  artistDetails.map((songInfo) => {
                    return (
                      <div
                        key={songInfo.id}
                        className="col-sm-auto col-md-auto text-center mb-5"
                      >
                        <ArtistAlbums songInfo={songInfo}/>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  );
};

export default ArtistPage;
