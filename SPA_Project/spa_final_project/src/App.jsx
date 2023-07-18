// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultimediaPlayer from "./pages/MultimediaPlayer/MultimediaPlayer";
import WeatherApp from "./pages/WeatherApp/WeatherApp";
import RecordStoreClient from "./pages/RecordStoreClient/RecordStoreClient.jsx";
import MusicApp from "./pages/MusicApp/MusicApp";
import GeoApp from "./pages/GeoApp/GeoApp";
import { Navbar } from "./components/Navbar/Navbar";
// import { Footer } from "./components/Footer/Footer";

import './App.css';

const App = () => {
  return (
    <Router>
      <div>

        <Navbar />
        <Routes>

          <Route path="/" exact element={<Home/>} />
          <Route path="/multimedia-player" element={<MultimediaPlayer/>} />
          <Route path="/weather-app" element={<WeatherApp/>} />
          <Route path="/record-store-client" element={<RecordStoreClient/>} />
          <Route path="/music-app" element={<MusicApp/>} />
          <Route path="/geo-app" element={<GeoApp/>} />

        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="Home">
    <h1>Home</h1>
    <div className='image'>
        <img src="./dist/assets/1.jpg" alt="Bild" width="400" height="400" />
        <img src="./dist/assets/2.jpg" alt="Bild" width="400" height="400" />
        <img src="./dist/assets/3.jpg" alt="Bild" width="400" height="400" />
        <img src="./dist/assets/4.jpg" alt="Bild" width="400" height="400" />
        <img src="./dist/assets/5.jpg" alt="Bild" width="400" height="400" />
        <h1>Welcome!</h1>
      </div>
  </div>
);

export default App;