// src/components/GeoApp/GeoApp.js
// import { Link } from 'react-router-dom';
// import React from 'react';

import './style.css';

const GeoApp = () => {
  // GeoApp
  return (
    <div className="Geo">
      <div>Geolocation</div>
      <div className='image'>
        <img src="https://images.pexels.com/photos/4394104/pexels-photo-4394104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/1496378/pexels-photo-1496378.jpeg" alt="Bild" width="500" height="600" />
        <p>Welcome!</p>
      </div>
    </div>
  );
};

export default GeoApp;