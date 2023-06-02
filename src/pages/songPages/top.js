import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../../components/SongCard';
import './top.css';

function Top() {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    const fetchTopData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/song/top/songs/by/views/15');
        console.log(response);
        if (response.status === 200) {
          const jsonData = response.data;
          setTopSongs(jsonData.songs);
        } else {
          console.error('Error retrieving songs:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTopData();
  }, []);

  const renderSongCards = () => {
    if (Array.isArray(topSongs)) {
      const rows = [];
      const itemsPerRow = 5;

      for (let i = 0; i < topSongs.length; i += itemsPerRow) {
        const rowSongs = topSongs.slice(i, i + itemsPerRow);
        const row = (
          <div className='row' key={i}>
            {rowSongs.map((song, index) => (
              <div className='col py-4' key={index}>
                <SongCard song={song} />
              </div>
            ))}
          </div>
        );
        rows.push(row);
      }

      return rows;
    }
    return null;
  };

  return (
    <div>
      <div className='row m-5'>
        <div className='row'>
          <h2 className='row-title col-2'>Top Songs &gt;</h2>
          <div className='col-10'></div>
        </div>

        {renderSongCards()}

      </div>
    </div>
  );
}

export default Top;
