import React from 'react';
import './SongCard.css'

// const SpotifySongCard = ({ title, artist, album, duration }) => {
const SongCard = () => {
    const cardStyle = {
        backgroundImage: `url('/test.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className="card top-row"  style={cardStyle}>
      <img src="/test.png" className="card-img-top" alt="Songs" />
      <div className="card-body">
        <h5 className="card-title">title</h5>
        <p className="card-text">
          Artist: artist<br />
          Album: album<br />
          Duration: duration
        </p>
        <a href="#" className="btn btn-primary">Play</a>
      </div>
    </div>
  );
}

export default SongCard;

