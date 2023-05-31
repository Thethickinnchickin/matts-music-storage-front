import CreateSong from './pages/song/create';
import Navbar from './components/NavBar';
import Song from './pages/play/song';
import BottomScroll from './components/BottomSoundBar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addSong, clearSong } from "./redux/songSlice";






function App() {
  const songID = useSelector((state) => state.songplayer.songID);

  const dispatch = useDispatch();

  const handleSongChange = (newSongID) => {
    dispatch(addSong(newSongID));
  };

  const handleClearSong = () => {
    dispatch(clearSong());
  };


  return (
    <Router>
      <div className="app-container">
        <div className='row-1'>
          <Navbar />
        </div>
        <div className='row-8'>
        <Routes>
            <Route path="/create/song" element={<CreateSong />} />
            <Route path="/play/song" element={<Song />} />
            <Route path="/" element={<Home/>}/>
          </Routes>
          
          
        </div>
        <div className='row-1 mb-0'>

          <BottomScroll className='bottom-scroll' cloudID={'647511d1cf16872b2ea2592f'}/>
        </div>
      </div>

    </Router>
  );
}

export default App;
