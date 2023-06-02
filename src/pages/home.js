import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from '../components/SongCard';
import { useNavigate } from 'react-router-dom';
import '../pages/home.css';


function Home() {
  const [topSongs, setTopSongs] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [discoverSongs, setDiscoverSongs] = useState([]);
  const navigate = useNavigate();

  const handleRowClick = (destination) => {
    navigate(destination);
  };



  useEffect(() => {
    const fetchTopData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/song/top/songs/by/views/5');
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
    const fetchDiscData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/song/discover');
        console.log(response);
        if (response.status === 200) {
          const jsonData = response.data;
          setDiscoverSongs(jsonData.songs);
        } else {
          console.error('Error retrieving songs:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchLikedData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/user/likedSongs/5`, {
          headers: {
          'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZlYWVlYjMzY2IzMTc5ZWQwOTFkOGQiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX192IjowLCJpYXQiOjE2ODU1ODAxMDcsImV4cCI6MTY4NjE4NDkwN30.NvPdnEfmQH1p03htW6k1iVPEwaZwNMrHm8jmrT0vbWg"
          }
      });
        console.log(response);
        if (response.status === 200) {
          const jsonData = response.data;
          setLikedSongs(jsonData.songs)
          console.log(jsonData)
        } else {
          console.error('Error retrieving songs:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTopData();
    fetchDiscData();
    fetchLikedData()
  }, []);

    return (
        <div >
          <div className='row m-5'>
            <div className='row'>
              <h2 className='row-title col-2' onClick={() => handleRowClick('/topSongs')}>
                Top Songs &gt;
              </h2>
              <div className='col-10'></div>
            </div>
            
            <div className='row'>
                
            {Array.isArray(topSongs) &&
            topSongs.map((song, index) => (
              <div className='col' key={index}>
                <SongCard song={song} />
              </div>
            ))}
               <div className='col-1 row-more m-auto'>
                    more &gt;
                </div>
            </div>
        </div>
    
          <div className='row  m-5'>
          <div className='row'>
              <h2 className='row-title col-2' onClick={() => handleRowClick('/destination1')}>
                Discover &gt;
              </h2>
              <div className='col-10'></div>
            </div>
            <div className='row'>
            {Array.isArray(discoverSongs) &&
            topSongs.map((song, index) => (
              <div className='col' key={index}>
                <SongCard song={song} />
              </div>
            ))}
            <div className='col-1 row-more m-auto'>
                more &gt;
            </div>
            </div>
            
          </div>
    
          <div className='row  m-5'>
            <div className='row'>
              <h2 className='row-title col-2' onClick={() => handleRowClick('/destination1')}>
                Liked &gt;
              </h2>
              <div className='col-10'></div>
            </div>
            <div className='row'>
            {Array.isArray(likedSongs) &&
            likedSongs.map((song, index) => (
              <div className='col' key={index}>
                <SongCard song={song} />
              </div>
            ))}
                <div className='col-1 row-more m-auto'>
                    more &gt;
                </div>
            </div>
          </div>
        </div>
      );
}

export default Home;
