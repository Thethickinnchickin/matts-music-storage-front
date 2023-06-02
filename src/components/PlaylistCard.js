import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SongCard.css';
import { useDispatch, useSelector } from "react-redux";
import { addSong, pause, resume } from "../redux/songSlice";
import { setSongs } from "../redux/likeSlice";
import { FaPlay, FaPause } from 'react-icons/fa';


const SongCard = ({ playlist }) => {
    const currentPlaylist = useSelector((state) => state.playlist.playlistID);
  const isPaused = useSelector((state) => state.songplayer.isPaused);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRowClick = (destination) => {
    navigate(destination);
  };
  

  const handlePlaylistSelect = (e) => {
    e.stopPropagation()

  };



  const handleSongPause = (e) => {
    e.stopPropagation()
    dispatch(pause());
  }


  const cardStyle = {
    backgroundImage: `url('${playlist.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="card top-row" onClick={() => handleRowClick(`/song/${playlist._id}`)} style={cardStyle}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className='details'>
          <h5 className="card-title px-2">{playlist.name}</h5>
        </div>
        <div className="button-group">
          {playlist._id === currentPlaylist && !isPaused ? (
            <button className="play-button" onClick={(e) => handleSongPause(e)}>
              <FaPause className="play-icon" />
            </button>
          ) : (
              <button className="play-button" onClick={(e) => handlePlaylistSelect(playlist._id, e)}>
              <FaPlay className="play-icon" />
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default SongCard;

