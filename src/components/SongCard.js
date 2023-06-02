import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './SongCard.css';
import { useDispatch, useSelector } from "react-redux";
import { addSong, pause, resume } from "../redux/songSlice";
import { setSongs } from "../redux/likeSlice";
import { FaPlay, FaHeart, FaPause } from 'react-icons/fa';

const SongCard = ({ song }) => {
  const likedSongs = useSelector((state) => state.like.likedSongs);
  const currentSong = useSelector((state) => state.songplayer.songID);
    const isPaused = useSelector((state) => state.songplayer.isPaused);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRowClick = (destination) => {
    navigate(destination);
  };
  

  const handleSongChange = (newSongID, e) => {
    e.stopPropagation()
    dispatch(addSong(newSongID));
    dispatch(resume())
  };

  const handleLikedSong = async (songID, e) => {
    e.stopPropagation()
    try {
      const response = await axios.put(`http://localhost:4000/api/song/like-song/${songID}`,{}, {
        headers: {
          'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZlYWVlYjMzY2IzMTc5ZWQwOTFkOGQiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX192IjowLCJpYXQiOjE2ODU1ODYyMDUsImV4cCI6MTY4NjE5MTAwNX0.QNKRIGe7vSYt-yccRtOcOxtONeq3ajlQQJtRitzxdkY"
          }
      });
      console.log(response);
      if (response.status === 200) {
        const jsonData = response.data;
        console.log(jsonData)
        dispatch(setSongs(jsonData.songs))
      } else {
        console.error('Error retrieving songs:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }
  const handleRemoveLikedSong = async (songID, e) => {
    e.stopPropagation()
    try {
      const response = await axios.put(`http://localhost:4000/api/user/deleteLikedSongs/${songID}`,{}, {
        headers: {
          'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZlYWVlYjMzY2IzMTc5ZWQwOTFkOGQiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX192IjowLCJpYXQiOjE2ODU1ODYyMDUsImV4cCI6MTY4NjE5MTAwNX0.QNKRIGe7vSYt-yccRtOcOxtONeq3ajlQQJtRitzxdkY"
          }
      });
      if (response.status === 200) {
        const jsonData = response.data;
        console.log(jsonData)
        dispatch(setSongs(jsonData.songs))
      } else {
        console.error('Error retrieving songs:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  const handleSongPause = (e) => {
    e.stopPropagation()
    dispatch(pause());
  }

  const isLiked = function(songID) {
    if(likedSongs.includes(songID)) {
      return true;
    } else {
      return false;
    }
  }

  const cardStyle = {
    backgroundImage: `url('${song.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="card top-row" onClick={() => handleRowClick(`/song/${song._id}`)} style={cardStyle}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className='details'>
          <h5 className="card-title px-2">{song.title}</h5>
          <p className="card-text px-2">By {song.artist}<br /></p>
        </div>
        <div className="button-group">
          {song._id === currentSong && !isPaused ? (
            <button className="play-button" onClick={(e) => handleSongPause(e)}>
              <FaPause className="play-icon" />
            </button>
          ) : (
              <button className="play-button" onClick={(e) => handleSongChange(song._id, e)}>
              <FaPlay className="play-icon" />
            </button>
          )}

          { isLiked(song._id) ? (
            <button className="heart-button" onClick={(e) => handleRemoveLikedSong(song._id, e)} >
              <FaHeart className="heart-icon liked" />
            </button>
          ) : (
            <button className="heart-button" onClick={(e) => handleLikedSong(song._id, e)}>
              <FaHeart className="heart-icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongCard;

