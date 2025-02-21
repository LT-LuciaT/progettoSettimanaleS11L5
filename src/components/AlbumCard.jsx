import { useDispatch } from "react-redux";
import { setSelectedSong } from "../redux/azioni/actions";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedSong(singleSong));
  };

  return (
    <div className="col text-center" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={singleSong.album.cover_medium} className="card-img-top" alt={singleSong.title} />
      <div className="card-body">
        <h5 className="card-title">{singleSong.title}</h5>
        <p className="card-text">Artist: {singleSong.artist.name}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
