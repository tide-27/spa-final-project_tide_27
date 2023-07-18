// src/components/WeatherApp/WeatherAPI.js

import axios from 'axios';

// const API_KEY = 'YOUR_OPENWEATHER_API_KEY';
const API_URL = 'https://api.wazirx.com/sapi/v1/tickers/24hr';

const getWeather = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: 'city-name',
        // appid: API_KEY,
      },
    });

    // Wetterdaten verarbeiten

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default getWeather;




// import { useState } from 'react';
// import axios from 'axios';
// import './style.css';

// const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={0855b84a84850f39b1a61da2d994e050}';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(API_URL, {
//         params: {
//           q: city,
//         },
//       });

//       // Verarbeiten der Wetterdaten
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Weather App</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           value={city}
//           onChange={handleCityChange}
//           placeholder="Enter city"
//         />
//         <button onClick={getWeather}>Get Weather</button>
//       </div>
//       {weatherData && (
//         <div className="weather-data">
//           <h2>{weatherData.name}</h2>
//           <p>Temperature: {weatherData.temp}</p>
//           <p>Wind Speed: {weatherData.windSpeed}</p>
//           <p>Time: {weatherData.time}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;