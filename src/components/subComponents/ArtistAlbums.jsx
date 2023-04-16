import { Link } from "react-router-dom";

const ArtistAlbums = (props) => {
  return (
    <>
      <Link to={`/albumpage/${props.songInfo.album.id}`}>
        <img
          className="img-fluid"
          src={
            props.songInfo.album.cover_medium // creating the album image anchor
          }
          alt="1"
        />
      </Link>

      <p>
        <a href="void(0)">
          Track: "$
          {
            props.songInfo.title.length < 16
              ? `${props.songInfo.title}`
              : `${props.songInfo.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </a>
        <br />
        <Link to={`/albumpage/${props.songInfo.album.id}`}>
          Album: "$
          {
            props.songInfo.album.title.length < 16
              ? `${props.songInfo.album.title}`
              : `${props.songInfo.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </Link>
      </p>
    </>
  );
};

export default ArtistAlbums;
