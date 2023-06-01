import React from 'react';
import axios from 'axios'
import './SongCard.css';
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../redux/songSlice";
import { addLikedSong, setSongs } from "../redux/likeSlice";
import { FaPlay, FaHeart } from 'react-icons/fa';

const SongCard = ({ song }) => {
  const likedSongs = useSelector((state) => state.like.likedSongs);
  const dispatch = useDispatch();

  

  const handleSongChange = (newSongID) => {
    dispatch(addSong(newSongID));
  };

  const handleLikedSong = async (songID) => {
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
  const handleRemoveLikedSong = async (songID) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/user/likedSongs/${songID}`,{}, {
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
    <div className="card top-row" style={cardStyle}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className='details'>
          <h5 className="card-title px-2">{song.title}</h5>
          <p className="card-text px-2">By {song.artist}<br /></p>
        </div>
        <div className="button-group">
          <button className="play-button" onClick={() => handleSongChange(song._id)}>
            <FaPlay className="play-icon" />
          </button>
          { isLiked(song._id) ? (
            <button className="heart-button" onClick={() => handleRemoveLikedSong(song._id)} >
              <FaHeart className="heart-icon liked" />
            </button>
          ) : (
            <button className="heart-button" onClick={() => handleLikedSong(song._id)}>
              <FaHeart className="heart-icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongCard;

