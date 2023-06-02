// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CreateSong from './pages/song/create';
import Navbar from './components/NavBar';
import SongPage from './pages/play/song';
import PlaylistPage from './pages/playlist/show';
import BottomScroll from './components/BottomSoundBar';
import Home from './pages/home';
import Top from './pages/songPages/top'

function App() {

  return (
    <Router>
      <div className="app-container">
        <div className="navbar-container">
          <Navbar className="navbar-position" />
        </div>
        <div className="content">
          <Routes>
            <Route path="/create/song" element={<CreateSong />} />
            {/* <Route path="/play/song" element={<Song />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/topSongs" element={<Top />} />
            <Route path="/song/:id" element={<SongPage/>} />
            <Route path="/playlists" element={<PlaylistPage/>} />
          </Routes>
        </div>
        <div className="bottom-scroll-container">
          <BottomScroll className="bottom-scroll" cloudID={'647511d1cf16872b2ea2592f'} />
        </div>

      </div>
    </Router>
  );
}

export default App;
