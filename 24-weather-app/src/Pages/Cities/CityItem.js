import styles from "./CityItem.module.css";
import { useCities } from "../../Context/CitiesContext";
import { useNavigate } from "react-router-dom";
export default function CityItem({ city }) {
  const { deleteCity } = useCities();
  const navigate = useNavigate();
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };
  const handleDeleteCity = () => {
    deleteCity(city.id);
  };
  const handleClick = () => {
    navigate(`/app/cities/${city.id}`);
  };
  return (
    <div className={styles.cityItem} onClick={() => handleClick()}>
      <div>
        <span className={styles.emoji}>{city.emoji}</span>
        {city.cityName}
      </div>
      <div className={styles.right}>
        <span>{formatDate(city.date)}</span>
        <button className={styles.cross} onClick={() => handleDeleteCity()}>
          x
        </button>
      </div>
    </div>
  );
}
