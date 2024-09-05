import styles from "./Form.module.css";
import useLocation from "../../hooks/useLocation";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useCities } from "../../Context/CitiesContext";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function NewCoordinate() {
  const { lat, long } = useLocation();
  const [location, setLocation] = useState([]);
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const { createCity } = useCities();
  const navigate = useNavigate();
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  useEffect(() => {
    async function fetchLocation() {
      const URL = `${BASE_URL}?latitude=${lat}&longitude=${long}`;
      const res = await fetch(URL);
      if (!res.ok)
        throw new Error("Something went wrong when fetching data...");
      const data = await res.json();
      setLocation(data);
    }
    fetchLocation();
  }, [lat, long]);

  const convertCodeToFlag = (code) => {
    const test = code.split("").map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...test);
  };

  const handleSubmit = () => {
    console.log(convertCodeToFlag(location.countryCode));
    const newCity = {
      emoji: convertCodeToFlag(location.countryCode),
      notes: notes,
      cityName: location.city,
      country: location.countryName,
      date: date.toISOString(),
      position: {
        lat: location.latitude,
        lng: location.longitude,
      },
      id: location.plusCode,
    };
    createCity(newCity);
    navigate("/app/cities");
  };
  return (
    <form className={styles.form} onSubmit={() => handleSubmit()}>
      <div className={styles.input}>
        <label>City name</label>
        <input value={location.city} disabled="true"></input>
      </div>
      <div className={styles.input}>
        <label>When did you go to "country"</label>
        <DatePicker
          className={styles.picker}
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        ></DatePicker>
      </div>
      <div className={styles.input}>
        <label>Notes about your trp to "country"</label>
        <input
          onChange={(e) => setNotes(e.target.value)}
          values={notes}
        ></input>
      </div>
      <div className={styles.buttons}>
        <button className={styles.add}>Add</button>
        <button className={styles.back}>← Back</button>
      </div>
    </form>
  );
}
