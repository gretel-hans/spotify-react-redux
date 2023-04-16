import { Link } from "react-router-dom";

const SingleAlbum=(props)=>{
    return(
<> 
        <Link to={`/albumpage/${props.songInfo.album.id}`}>
          <img
            className="img-fluid"
            src={props.songInfo.album.cover_medium}
            alt="1"
          />{" "}
        </Link>
        <p>
          <Link to={`/albumpage/${props.songInfo.album.id}`}>
            Album: "
            {props.songInfo.album.title.length < 16
              ? `${props.songInfo.album.title}`
              : `${props.songInfo.album.title.substring(0, 16)}...`}
            "<br />{" "}
          </Link>
          <Link to={`/artistpage/${props.songInfo.artist.id}`}>
            Artist: {props.songInfo.artist.name}
          </Link>
        </p>
</>

    )
}

export default SingleAlbum