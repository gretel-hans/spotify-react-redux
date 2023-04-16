/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import SidebarVertical from "./subComponents/SidebarVertical";
import BottomFooter from "../components/subComponents/BottomFooter";
import SingleAlbum from "./subComponents/SingleAlbum";
import TopNavbar from "./subComponents/TopNavbar";
export let headers = new Headers({
  // sets the headers
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});
const HomePage = () => {
  const [album, setAlbum] = useState([]);
  const [albumP, setAlbumP] = useState([]);
  const [albumH, setAlbumH] = useState([]);

  const [artistSearched, setartistSearched] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [counter, setCounter] = useState(0);

  let albumResult = [];

  let rockAlbum = [];
  let popAlbum = [];
  let hipHopAlbum = [];

  let rockArtists = [ "queen", "thepolice", "eagles", "thedoors", "oasis", "thewho" ];

  let popArtists = [ "rihanna", "billieeilish", "blanco", "mahmood", "katyperry", "arianagrande" ];

  let hipHopArtists = [ "travisscott", "postmalone", "liluzivert", "drake", "future" ];

  const getArtistSearchedFetch = () => {
    return fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        artistSearched,
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
        albumResult.push(dato.data);
        //console.log(albumResult[0]);

        setSearchedResults(albumResult[0]);
        
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  useEffect(() => {
    if (artistSearched.length >= 2) {
      getArtistSearchedFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const randomFetch = (artist, string) => {
    return fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist,
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
        if (string === "rock") {
          rockAlbum.push(dato.data[0]);

          if (rockAlbum.length === 4) {
            setAlbum(rockAlbum);
          }
        } else if (string === "pop") {
          popAlbum.push(dato.data[0]);
          if (popAlbum.length === 4) {
            setAlbumP(popAlbum);
          }
        } else if (string === "hipHop") {
          hipHopAlbum.push(dato.data[0]);
          if (hipHopAlbum.length === 4) {
            setAlbumH(hipHopAlbum);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  const fillRandomArray = async () => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    rockRandomArtists.map((el) => {
      return randomFetch(el, "rock");
    });

    popRandomArtists.map((el) => {
      return randomFetch(el, "pop");
    });

    hipHopRandomArtists.map((el) => {
      return randomFetch(el, "hipHop");
    });

    //console.log(rockRandomArtists,popRandomArtists,hipHopRandomArtists)
  };

  useEffect(() => {
    fillRandomArray();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SidebarVertical
        searched={artistSearched}
        changeSearch={setartistSearched}
        cont={counter}
        setCont={setCounter}
      />

      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <TopNavbar />
        </div>
        <div className="row">
          <div className="col-10">
            {searchedResults && (
              <div id="searchResults">
                <h2>Search Results</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {searchedResults.map((songInfo) => {
                    return (
                      <div
                        className="col text-center"
                        key={songInfo.id}
                        id={songInfo.id}
                      >
                        <SingleAlbum songInfo={songInfo} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                {album.map((songInfo) => {
                  return (
                    <div
                      className="col text-center"
                      key={songInfo.id}
                      id={songInfo.id}
                    >
                      <SingleAlbum songInfo={songInfo} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {albumP.map((songInfo) => {
                  return (
                    <div
                      className="col text-center"
                      key={songInfo.id}
                      id={songInfo.id}
                    >
                      <SingleAlbum songInfo={songInfo} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {albumH.map((songInfo) => {
                  return (
                    <div
                      className="col text-center"
                      key={songInfo.id}
                      id={songInfo.id}
                    >
                      <SingleAlbum songInfo={songInfo} />
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

export default HomePage;
