// src/components/WeatherApp/WeatherApp.js

import { useEffect } from 'react';
// import WeatherApp from "./components/WeatherApp/WeatherApp";
import getWeather from "./WeatherAPI";

import './style.css';

const WeatherApp = () => {
  useEffect(() => {
    getWeather();
  }, []);

  return (<div className='Weter'>
    <div>Weter</div>
    <br />
    <div className='image'>
        <img src="https://images.pexels.com/photos/954713/pexels-photo-954713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/589808/pexels-photo-589808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/1006121/pexels-photo-1006121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />
        <img src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bild" width="500" height="600" />

        <p>Welcome!</p>
      </div>
  </div>)
};

export default WeatherApp;