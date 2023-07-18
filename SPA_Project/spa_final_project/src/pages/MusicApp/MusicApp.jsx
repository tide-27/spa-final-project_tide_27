// src/components/MusicApp/MusicApp.js

// import React from 'react';
import './style.css';

const MusicApp = () => {
  // MusicApp
  return ( 
  <div className="Music">
    <div>Musik-App</div>
    <br />
      <div className='image'>
        <img src="https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/4089492/pexels-photo-4089492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/3587475/pexels-photo-3587475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <p>Welcome!</p>
      </div>
  </div>)
};

export default MusicApp;
