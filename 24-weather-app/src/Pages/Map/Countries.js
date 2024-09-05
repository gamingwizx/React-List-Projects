import { useCities } from "../../Context/CitiesContext";
import styles from "./Countries.module.css";
export default function Countries() {
  const { cities } = useCities();

  return (
    <div className={styles.countryContainer}>
      {cities.map((city) => (
        <div className={styles.country}>
          <span>{city.emoji}</span>
          <span>{city.cityName}</span>
        </div>
      ))}
    </div>
  );
}
