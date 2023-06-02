import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addSong } from "../../redux/songSlice";
import { useDispatch} from "react-redux";
import './song.css'; // Import the CSS file for styling

const SongPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const dispatch = useDispatch();

  const handleSongChange = (newSongID) => {
    dispatch(addSong(newSongID));
  };

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/song/song/${id}`);
        if (response.status === 200) {
          const jsonData = response.data;
          setSong(jsonData.song);
          handleSongChange(id)

  
        } else {
          console.error('Error retrieving songs:', response.status);
  
        }
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };
    fetchSong();
  }, [id]);

  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${song && song.image})` }}></div>
      <div className="song-page">
        <div className="song-container">
          <div className="image-container">
            <img className="song-image" src={song && song.image} alt={song && song.title} />
          </div>
          <h2 className="song-title">{song && song.title}</h2>
        </div>
      </div>
    </>
  );
};

export default SongPage;

