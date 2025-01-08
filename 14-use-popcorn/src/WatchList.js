import { useEffect, useState } from "react"
import Movie from "./Movie"
export default function WatchList({ watchList, onMovieClicked }) {
    const [watchTimeHour, setWatchTimeHour] = useState(0)
    const [watchTimeMinute, setWatchTimeMinute] = useState(0)
    const [averageRating, setAverageRating] = useState(0)
    const [ownRating, setOwnRating] = useState(0)
   

    useEffect(() => {
      const totalMinutes = watchList.reduce(
        (sum, watch) => parseInt(watch.Runtime?.replace(" min", "")) + sum,
        0
      )
      setWatchTimeHour(() => Math.floor(totalMinutes / 60))
      setWatchTimeMinute(() => totalMinutes % 60) 
      setAverageRating(() => (
        watchList.reduce((sum, watch) => parseInt(watch.imdbRating) + sum, 0) / watchList.length
      ).toFixed(2))
      setOwnRating(() => (
        watchList.reduce((sum, watch) => watch.userRating + sum, 0) /
        watchList.length
      ).toFixed(2))
    }, [setWatchTimeHour, setWatchTimeMinute, setAverageRating, setOwnRating])

    return (
      <div className="movie-details">
        <div className="movie-watchlist">
          <div className="movie-statistic-summary-container">
            <h2>Movies you watched</h2>
            <div class="movie-statistic-summary">
              <label>{watchList.length} movies</label>
              <label>🌟 {averageRating}</label>
              <label>⭐ {ownRating}</label>
              <label>⌛ {watchTimeHour}h {watchTimeMinute} mins</label>
            </div>
          </div>
          {watchList.map((watch) => (
            <Movie onMovieClicked={() => onMovieClicked(watch)} movie={watch} />
          ))}
          {/* <div class="movie-watchlist-results">
            <div className="movie-result movie-result--watchlist">
              <div class="movie-image">
                <img src="./movie1.png" />
              </div>
              <div className="movie-result-info movie-result-info--watchlist">
                <h2>Interstellar</h2>
                <p>📆&nbsp;8.6&nbsp;9&nbsp;169 mins</p>
              </div>
              <button className="remove-button">X</button>
            </div>
          </div> */}
        </div>
      </div>
    )
  }