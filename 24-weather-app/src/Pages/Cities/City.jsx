import {useCities} from "../../Context/CitiesContext"
import CityItem from "./CityItem.js"
import styles from "./City.module.css"
export default function City() {
    const {cities} = useCities()
    return (
        <div className={styles.city}>
        {cities.map((city) => (
            <CityItem city={city}/>
        ))}
        </div>
    )
}