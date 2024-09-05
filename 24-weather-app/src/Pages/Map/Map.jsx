import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from "react-leaflet"
import {useNavigate, useSearchParams} from "react-router-dom"
import {useCities} from "../../Context/CitiesContext.jsx"
import {useState} from "react"
import styles from "./Map.module.css";
function Map() {
    const {cities} = useCities()
    const [mapPosition, setMapPosition] = useState([40, 0]);
    return (
        <div className="map">
            <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"/>
            {cities.map(city => (
                <p id={city.id}>{city.cityName}</p>
            ))}
            <ChangeCenter position={mapPosition} />
            <DetectClick />
        </MapContainer>
        </div>
    )
}

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
  }
  
  function DetectClick() {
    const navigate = useNavigate();
  
    useMapEvents({
      click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
  }

export default Map