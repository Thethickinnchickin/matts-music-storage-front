import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { pause, resume } from '../redux/songSlice';
import './BottomScroll.css'
import { FaPlay, FaHeart, FaPause } from 'react-icons/fa';


const SpotifyPlayer = () => {
  const [songUrl, setSongUrl] = useState('');
  const [totalTime, setTotalTime] = useState(0);
  const [viewSent, setViewSent] = useState(false);
  const player = useRef();
  const songID = useSelector((state) => state.songplayer.songID);
  const isPaused = useSelector((state) => state.songplayer.isPaused);
  const dispatch = useDispatch();
  


  const handlePause = () => {
    dispatch(pause())
  }




  const handleListen = (e) => {
    checkPaused()
    if(!viewSent) {
      setTotalTime(e.target.duration)
      if(e.target.duration) {     
        const currentTime = e.target.currentTime;
        if(currentTime > (totalTime/2)) {
          sendView();
        }
      }
    }
  };

  const handlePlay = () => {
    dispatch(resume())
  }

  const sendView = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/api/song/add/view/${songID}`);
      if (response.status === 200) {
        setViewSent(true)
      } else {
        console.error('Error retrieving song:', response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkPaused = () => {
    
    if (isPaused) {
      console.log("Checking")
      player.current.audio.current.pause();
    }
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
    checkPaused();
    fetchSong();
  }, [songID]);

  return (
    <div className="spotify-player">

      <div className="audio-player-container">
        <div className="audio-player">
      <AudioPlayer 
          className='audio-nerd'
          preload='metadata'
          src={songUrl}
          onPlay={handlePlay}
          ref={player}
          onListen={handleListen}
          onPause={handlePause}
          showJumpControls={false}
          customIcons={{
            play: isPaused ? (
              <FaPlay className="play-icon" />
            ) : (
              <FaPause className="play-icon" />
            ),
          }}
        />


        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;