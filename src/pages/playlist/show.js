
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlaylistCard from '../../components/PlaylistCard';
import './show.css';


const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch the playlists from the API
    const fetchPlaylists = async () => {
      try {
        console.log("hererer")
        const response = await axios.get('http://localhost:4000/api/playlist', {
            headers: {
            'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZlYWVlYjMzY2IzMTc5ZWQwOTFkOGQiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX192IjowLCJpYXQiOjE2ODU1ODAxMDcsImV4cCI6MTY4NjE4NDkwN30.NvPdnEfmQH1p03htW6k1iVPEwaZwNMrHm8jmrT0vbWg"
            }
        });
        console.log(response)
        if (response.status === 200) {
            const jsonData = response.data;
          setPlaylists(jsonData.playlists);
        } else {
            console.log(response)
          console.error('Error retrieving playlists:', response.status);
        }
      } catch (error) {
        console.log(error)
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="playlist-page">
      <h1>My Playlists</h1>
      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
