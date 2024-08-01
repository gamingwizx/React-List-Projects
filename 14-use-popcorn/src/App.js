import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect, useRef } from "react"
function App() {
  const [isShowInfo, setIsShowInfo] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isMovieDetail, setIsMovieDetail] = useState(false)
  const [isMovieWatchlist, setIsMovieWatchlist] = useState(false)
  const [isMinimized, setMinimized] = useState(true)
  const [watchList, setWatchList] = useState([])
  const [a, setA] = useState(0)
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const aw = useRef([])

  const onMovieClicked = (movie) => {
    setIsMovieDetail(!isMovieDetail)
    isMovieWatchlist === true
      ? setIsMovieWatchlist(!isMovieWatchlist)
      : setIsMovieWatchlist(isMovieWatchlist)
    setMovie(aw.current.filter((mov) => mov.id === movie.id)[0])
    setMinimized(true)
  }
  const onBackClicked = () => {
    setIsMovieDetail(!isMovieDetail)
    setIsMovieWatchlist(!isMovieWatchlist)
  }
  const onMinimized = () => {
    setMinimized(!isMinimized)
  }

  const filterResult = (value) => {
    setMovies((movies) =>
      aw.current.filter((movie) =>
        movie.title.toUpperCase().includes(value.toUpperCase())
      )
    )
  }

  const handleSetWatchlist = (movie) => {
    const isExistingMovie =
      watchList.filter((watchlist) => watchlist.id === movie.id).length > 0

    !isExistingMovie
      ? setWatchList((watchlist) => [...watchlist, movie])
      : setWatchList((watchlist) =>
          watchlist.map((watch) => (watch.id === movie.id ? movie : watch))
        )
    setIsMovieDetail(!isMovieDetail)
    setIsMovieWatchlist(!isMovieWatchlist)
  }
  useEffect(() => {
    const data = null

    const xhr = new XMLHttpRequest()

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        setMovies(JSON.parse(this.responseText))
        aw.current = JSON.parse(this.responseText)
      }
    })

    xhr.open("GET", "https://freetestapi.com/api/v1/movies")
    // xhr.setRequestHeader(
    //   "x-rapidapi-key",
    //   "26f8c061c1msh39d96eb5b8ebdd5p13ffffjsn98ca653b7857"
    // )
    // xhr.setRequestHeader("x-rapidapi-host", "moviedatabase8.p.rapidapi.com")

    xhr.send(data)
  }, [])
  return (
    <div className="App">
      <header className="movie-header">
        <img src="./popcorn.png" />
        <input
          onChange={(e) => filterResult(e.target.value)}
          className="movie-search-input"
        />
        <label>Found {movies.length} Results</label>
      </header>
      <div className="container container--movie">
        <MovieList onMovieClicked={onMovieClicked} movies={movies} />
        {(isMovieDetail || isMovieWatchlist) && isMinimized && (
          <>
            <button onClick={onMinimized} className="minimize">
              −
            </button>
            {isMovieDetail && (
              <MovieDetail
                onBackClicked={onBackClicked}
                isMinimized={isMinimized}
                onRate={handleSetWatchlist}
                movie={movie}
              />
            )}
            {isMovieWatchlist && (
              <WatchList
                onMovieClicked={onMovieClicked}
                watchList={watchList}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}
function MovieDetail({ onBackClicked, isMinimized, onRate, movie }) {
  const [a, setA] = useState(0)
  const ratingChosen = a
  const [updateRating, setUpdateRating] = useState(false)
  const TOTAL_RATING = 10

  const onHoverRating = (index) => {
    setUpdateRating(!updateRating)
    setA(index)
  }
  const handleRate = () => {
    movie["userRating"] = a
    onRate(movie)
  }
  return (
    <div class="movie-details">
      <div className="movie-details-section">
        <button onClick={onBackClicked} className="back">
          🠔
        </button>
        <div class="movie-details-header">
          <div class="movie-detail-image">
            <img src={movie.poster} />
          </div>
          <div className="movie-details-info">
            <h2>{movie.title}</h2>
            <p>
              {movie.year} • {movie.runtime} mins
            </p>
            <p>{movie.genre.map((genre) => genre)}</p>
            <p>⭐ {movie.rating} IMDb rating</p>
          </div>
        </div>
        <div className="movie-details-bottom">
          <div className="rating">
            <div className="rating-bar">
              {Array.from({ length: TOTAL_RATING }, (_, i) => i + 1).map(
                (num) => (
                  <div onMouseEnter={() => onHoverRating(num)} className="star">
                    {num <= ratingChosen ? "★" : "☆"}
                  </div>
                )
              )}
              {a > 0 && <label>{ratingChosen}</label>}
            </div>
            {a > 0 && (
              <button onClick={handleRate} className="rating-button">
                + Add to List
              </button>
            )}
          </div>
          <div className="description">
            <p>{movie.plot}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
function WatchList({ watchList, onMovieClicked }) {
  const averageRating = (
    watchList.reduce((sum, watch) => watch.rating + sum, 0) / watchList.length
  ).toFixed(2)
  const ownRating = (
    watchList.reduce((sum, watch) => watch.userRating + sum, 0) /
    watchList.length
  ).toFixed(2)
  const totalWatchTime = watchList.reduce(
    (sum, watch) => watch.runtime + sum,
    0
  )
  return (
    <div className="movie-details">
      <div className="movie-watchlist">
        <div className="movie-statistic-summary-container">
          <h2>Movies you watched</h2>
          <div class="movie-statistic-summary">
            <label>{watchList.length} movies</label>
            <label>🌟 {averageRating}</label>
            <label>⭐ {ownRating}</label>
            <label>⌛ {totalWatchTime} mins</label>
          </div>
        </div>
        {watchList.map((watch) => (
          <Movie onMovieClicked={onMovieClicked} movie={watch} />
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
function MovieList({ onMovieClicked, movies }) {
  return (
    <div className="movie-search-results">
      {movies.slice(0, 5).map((movie) => (
        <Movie key={movie.id} onMovieClicked={onMovieClicked} movie={movie} />
      ))}
    </div>
  )
}

function Movie({ onMovieClicked, movie }) {
  return (
    <div onClick={() => onMovieClicked(movie)} className="movie-result">
      <div class="movie-image">
        <img src={movie.poster} />
      </div>
      <div className="movie-result-info">
        <h2>{movie.title}</h2>
        <p>📆&nbsp;{movie.year}</p>
      </div>
    </div>
  )
}
export default App
