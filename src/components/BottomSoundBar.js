import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { addSong, clearSong } from "../redux/songSlice";
import { setLoggin, setToken, clearLoggin } from "../redux/authSlice";


const SpotifyPlayer = ({ cloudID }) => {
  const [songUrl, setSongUrl] = useState('');
  const player = useRef();
  const songID = useSelector((state) => state.songplayer.songID);
  const loggedIn = useSelector((state) => state.login.isLoggedIn)
  const dispatch = useDispatch();

  const handleSongChange = (cloudID) => {
    dispatch(addSong(cloudID));
  };

  const handleClearSong = () => {
    dispatch(clearSong());
  };

  const newLoggin = () => {
    dispatch(setLoggin(false))
  }

  const handleListen = (e) => {
    const currentTime = e.target.currentTime;
    console.log('Current time:', currentTime);
  };
  


  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/m-uploader/song/${songID}`, { responseType: 'blob' });
        if (response.status === 200) {
          const songUrl = URL.createObjectURL(response.data);
          setSongUrl(songUrl);
        } else {
          console.error('Error retrieving song:', response.status);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchSong();
  }, [songID]);

  return (
    <div className="spotify-player mt-5">

      <div className="audio-player-container">
        <div className="audio-player">
      <AudioPlayer 
        preload='metadata'
            src={songUrl}
            onPlay={e => console.log("onPlay")}
            ref={player}
            onListen={handleListen}
        />


        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;