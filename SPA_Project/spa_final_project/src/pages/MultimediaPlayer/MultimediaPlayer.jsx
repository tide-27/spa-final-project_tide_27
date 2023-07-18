// src/components/MultimediaPlayer/MultimediaPlayer.js

// import React from 'react';
import './style.css';

const MultimediaPlayer = () => {
  // MultimediaPlayer
  return (
  <div className = "Player">
    <div>Player</div>
    <br />
    <div className='image'>
        <img src="https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bild" width="500" height="600" />
        <p>Welcome!</p>
      </div>

  </div>

  )
};

export default MultimediaPlayer;