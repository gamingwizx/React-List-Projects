import Movie from "./Movie"
export default function MovieList({ onMovieClicked, movies }) {
    return (
      <div className="movie-search-results">
        <label className="movie-search-results__label">Movie List</label>
        {movies.length <= 0 && <label>Start searching for movies now!</label>}
        {movies.length > 0 && movies?.slice(0, 5).map((movie) => (
          <Movie key={movie.id} onMovieClicked={onMovieClicked} movie={movie} />
        ))}
      </div>
    )
  }