import React from 'react';
import SongCard from '../components/SongCard';
import { useNavigate } from 'react-router-dom';
import '../pages/home.css';


function Home() {
    const navigate = useNavigate();

    const handleRowClick = (destination) => {
      navigate(destination);
    };

    return (
        <div >
          <div className='row m-5'>
            <div className='row'>
              <h2 className='row-title col-2' onClick={() => handleRowClick('/destination1')}>
                Top Songs &gt;
              </h2>
              <div className='col-10'></div>
            </div>
            <div className='row'>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col-1 row-more m-auto'>
                    more &gt;
                </div>
            </div>
        </div>
    
          <div className='row  m-5'>
          <div className='row'>
              <h2 className='row-title col-2' onClick={() => handleRowClick('/destination1')}>
                Liked Songs &gt;
              </h2>
              <div className='col-10'></div>
            </div>
            <div className='row'>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
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
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col'>
                    <SongCard />  
                </div>
                <div className='col-1 row-more m-auto'>
                    more &gt;
                </div>
            </div>
          </div>
        </div>
      );
}

export default Home;
