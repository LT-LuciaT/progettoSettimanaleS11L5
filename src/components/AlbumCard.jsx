import { useDispatch, useSelector } from "react-redux";
import { setSelectedSong, toggleLike } from "../redux/azioni/actions";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.music.likedSongs);
  const isLiked = likedSongs[singleSong.id] || false;

  const handleClick = () => {
    dispatch(setSelectedSong(singleSong));
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleLike(singleSong.id));
  };

  return (
    <div className="col text-center" style={{ cursor: "pointer" }} onClick={handleClick}>
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
      <p>
        Track: {singleSong.title}
        <br />
        Artist: {singleSong.artist.name}
      </p>
      <div onClick={handleLikeClick} style={{ cursor: "pointer" }}>
        {isLiked ? <i className="bi bi-heart-fill text-danger"></i> : <i className="bi bi-heart"></i>}
      </div>
    </div>
  );
};

export default AlbumCard;
