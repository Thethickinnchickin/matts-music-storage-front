import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from 'axios';
import './SpotifyPlayer.css';

const SpotifyPlayer = ({ cloudID }) => {
  const [songUrl, setSongUrl] = useState('');
  const player = useRef();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/m-uploader/song/${cloudID}`, { responseType: 'blob' });
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
  }, [cloudID]);

  return (
    <div className="spotify-player mt-5">
      <div className="main-content">
        <div className="album-artwork">
          <img src="/test.png" alt="Album Artwork" />
        </div>
        <div className="track-info">
          <div className="track-name">Song Name</div>
          <div className="artist">Artist Name</div>
        </div>
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
