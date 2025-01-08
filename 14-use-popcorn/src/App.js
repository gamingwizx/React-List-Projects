import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect, useRef } from "react"
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";
import WatchList from "./WatchList";

const KEY = "3bebfb26";

function App() {
  const [isShowInfo, setIsShowInfo] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isMovieDetail, setIsMovieDetail] = useState(false)
  const [isMovieWatchlist, setIsMovieWatchlist] = useState(true)
  const [query, setSearchQuery] = useState("")
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
    setMovie(() => movie)
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
    setSearchQuery(() => value)
  }

  const handleSetWatchlist = (movie) => {
    const isExistingMovie =
    watchList.filter((watchlist) => watchlist.imdbID === movie.imdbID).length > 0
    
    if(!isExistingMovie) {
      setWatchList((watchlist) => [...watchlist, movie])
    } else {
        setWatchList((watchlist) =>
        watchlist.map((watch) => (watch.imdbID === movie.imdbID ? movie : watch)))
    }
    setIsMovieDetail(!isMovieDetail)
    setIsMovieWatchlist(!isMovieWatchlist)
  }
  
  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {

          const res = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(() => data?.Search)

        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
          }
        } finally {
        }
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [setMovies, query]
  );
  return (
    <div className="App">
      <header className="movie-header">
        <img src="./popcorn.png" />
        <input
          onChange={(e) => filterResult(e.target.value)}
          className="movie-search-input"
          placeholder="Search movie..."
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




export default App
