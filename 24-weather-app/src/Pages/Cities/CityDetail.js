import styles from "./CityDetail.module.css";
import { useCities } from "../../Context/CitiesContext";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.module.css";
function CityDetail() {
  const { placeId } = useParams();
  const { getCity, currentCity, updateCity, isLoading } = useCities();
  const [note, setNote] = useState("");
  const [queriedDate, setQueriedDate] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getCity(placeId.toString());
  }, [placeId, getCity]);

  const { emoji, cityName, date, notes, id, country, position } = currentCity;
  function formatDate(date) {
    const formattedDate = new Intl.DateTimeFormat("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
    return formattedDate;
  }

  useEffect(() => {
    if (!isLoading) return;
    setNote(notes);
    setQueriedDate(date);
  }, [isLoading]);

  const handleUpdate = () => {
    const updatedCity = {
      id,
      emoji,
      notes: note,
      cityName,
      country,
      date: queriedDate,
      position,
    };
    updateCity(updatedCity);
    setNote("");
    setQueriedDate(null);
    navigate(`/app/cities`);
  };

  const handleBack = () => {
    navigate("/app/cities");
  };

  return (
    <div className={styles.CityDetail}>
      <div className={styles.row}>
        <p className={styles.name}>City Name</p>
        <p className={styles.country}>
          <span>{emoji}</span>&nbsp;
          {cityName}
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.name}>You went to {cityName} On</p>
        <DatePicker
          id="date"
          selected={queriedDate}
          onChange={(date) => setQueriedDate(date)}
          dateFormat={"dd/MM/yyyy"}
        ></DatePicker>
      </div>
      <div className={styles.row}>
        <p className={styles.name}>Your Notes</p>
        <p>
          <textarea
            className={styles.notes}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.name}>Learn more</p>
        <p>
          <a>Check out {cityName} on Wikipedia →</a>
        </p>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleUpdate()}>Update</button>
        <button onClick={() => handleBack()} className={styles.back}>
          Back
        </button>
      </div>
    </div>
  );
}

export default CityDetail;
