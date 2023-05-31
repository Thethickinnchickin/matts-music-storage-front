import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongPlayer = ({ cloudID }) => {
  const [songUrl, setSongUrl] = useState('');
  

  useEffect(() => {
    const fetchSong = async () => {
      // try {
      //   const response = await fetch(`localhost:4000/song/${cloudID}`);
      //   if (response.ok) {
      //     const songBlob = await response.blob();
      //     const songUrl = URL.createObjectURL(songBlob);
      //     setSongUrl(songUrl);
      //   } else {
      //     console.error('Error retrieving song:', response.status);
      //   }
      // } catch (error) {
      //   console.error('Error retrieving song2:', error.message);
      // }
      try {
        console.log(cloudID)
        const response = await axios.get(`http://localhost:4000/api/m-uploader/song/${cloudID}`, { responseType: 'blob' });
        console.log(response)
        if (response.status === 200) {
          const songUrl = URL.createObjectURL(response.data);
          setSongUrl(songUrl);
        } else {
          console.error('Error retrieving song:', response.status);
        }
      } catch(err) {
        console.log(err)
      }
    };

    fetchSong();
  }, [cloudID]);

  return (
    <div>
      {songUrl && (
        <audio src={songUrl} controls autoPlay>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default SongPlayer;

