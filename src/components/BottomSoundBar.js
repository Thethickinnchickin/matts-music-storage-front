import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { addSong, clearSong } from "../redux/songSlice";


const SpotifyPlayer = ({ cloudID }) => {
  const [songUrl, setSongUrl] = useState('');
  const player = useRef();
  const songID = useSelector((state) => state.songplayer.songID);

  const dispatch = useDispatch();

  const handleSongChange = (cloudID) => {
    dispatch(addSong(cloudID));
  };

  const handleClearSong = () => {
    dispatch(clearSong());
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
        <div>
          <h1>Current Song ID: {songID}</h1>
          <button onClick={() => handleSongChange("647511d1cf16872b2ea2592f")}>Add Song</button>
          <button onClick={handleClearSong}>Clear Song</button>
        </div>
      <div className="audio-player-container">
        <div className="audio-player">
          {/* {songUrl && (
            <audio src={songUrl} controls autoPlay className="spotify-audio-player">
              Your browser does not support the audio element.
            </audio>
          )} */}
      <AudioPlayer 
        preload='metadata'
            src={songUrl}
            onPlay={e => console.log("onPlay")}
            ref={player}
        />


        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;