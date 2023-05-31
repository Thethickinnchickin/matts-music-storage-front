import React from 'react';
import SpotifyPlayer from '../../components/SpotifyPlayer';

function PlaySong() {
  return (
    <div>
      <h1>My Music Player</h1>
      <SpotifyPlayer 
      cloudID={'647511d1cf16872b2ea2592f'}

      />
    </div>
  );
}

export default PlaySong;