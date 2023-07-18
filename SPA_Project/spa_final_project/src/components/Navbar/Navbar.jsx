import { Link } from "react-router-dom";
import './style.css';


export const Navbar = () => {
    return (
        <div>
            <h1>Apps</h1>
            <div className="Navbar">
                <nav>
                    <Link to="/">🌍️___Home___🌍️ </Link>
                    <Link to="https://github.com/tide-27?tab=repositories" className="link"> 👾️___<i>GitHub</i>___👾️ </Link>
                    <Link to="/multimedia-player">🎼️___Player___🎼️</Link>
                    <Link to="https://www.spotify.com/de/premium/" className="link">🎶️___ <i>Spotify</i> ___🎶️</Link>
                    <Link to="/weather-app">☀️___Weter___🌨️</Link>
                    <Link to="https://www.wetter.com/wetter_aktuell/wettervorhersage/16_tagesvorhersage/deutschland/berlin/DE0001020.html" className="link"> <i>🌪️Wetterverhältnisse☂️</i></Link>
                    <Link to="/record-store-client">🎛️Records-Client📢️</Link>
                    <Link to="https://learn.microsoft.com/de-de/previous-versions/office/sharepoint-csom/mt684372(v=office.15)" className="link"> <i>📁️Dokumentation🎓️</i> </Link>
                    <Link to="/music-app">🎹️🎸️Music🎹️🎸️</Link>
                    <Link to="https://rapidapi.com/hub" className="link">🔐️___API___🔑️</Link>
                    <Link to="/geo-app">🌐️Geolocation🛰️</Link>
                    <Link to="https://www.geolocation.com/de" className="link"> <i>🗺️___IP___🧭️</i> </Link>
                </nav>
            </div>
        </div>
    )
}