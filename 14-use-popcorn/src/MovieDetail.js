import {useState, useEffect} from "react"
const KEY = "3bebfb26";
export default function MovieDetail({ onBackClicked, isMinimized, onRate, movie }) {
  
  const [a, setA] = useState(0)
  const [movieDetail, setMovieDetail] = useState({})
  const [ratingSelected, setRatingSelected] = useState(0)
  const [updateRating, setUpdateRating] = useState(false)
  const TOTAL_RATING = 10

  useEffect(() => {
    async function fetchMovieDetail() {
      const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${KEY}`,)
      if (!res.ok) throw new Error("Something went wrong when fetching movie details")
      const data = await res.json()
      if (!data) throw new Error("Data is empty!")
      setMovieDetail(() => data)
      return data
    }

    fetchMovieDetail()

  }, [])

  const onHoverRating = (index) => {
    if (movie.isWatchList) return
    setUpdateRating(!updateRating)
    setA(() => index)
    setRatingSelected(() => index)
  }
  const handleRate = () => {
    movieDetail["userRating"] = a
    movieDetail["isWatchList"] = true
    onRate(movieDetail)
  }
  return (
    <div class="movie-details">
      <div className="movie-details-section">
        <button onClick={onBackClicked} className="back">
          🠔
        </button>
        <div class="movie-details-header">
          <div class="movie-detail-image">
            <img src={movieDetail.Poster} />
          </div>
          <div className="movie-details-info">
            <h2>{movieDetail.Title}</h2>
            <p>
              {movieDetail.Year} • {movieDetail.runtime} mins
            </p>
            <p>{movieDetail.Genre}</p>
            <p>⭐ {movie.userRating ? movie.userRating : movieDetail.imdbRating} IMDb rating</p>
          </div>
        </div>
        <div className="movie-details-bottom">
          <div className="rating">
            <div className="rating-bar">
              {Array.from({ length: TOTAL_RATING }, (_, i) => i + 1).map(
                (num) => (
                  <div onMouseEnter={() => onHoverRating(num)} className="star">
                    {num <= (movie.userRating ? movie.userRating : ratingSelected) ? "★" : "☆"}
                  </div>
                )
              )}
              {ratingSelected > 0 && <label>{ratingSelected}</label>}
              {movie.userRating && <label>{movie.userRating}</label>}
            </div>
            {ratingSelected > 0 && (
              <button onClick={handleRate} className="rating-button">
                + Add to List
              </button>
            )}
          </div>
          <div className="description">
            <p>{movieDetail.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  )
}