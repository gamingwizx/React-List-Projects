export default function Movie({ onMovieClicked, movie }) {
    return (
      <div onClick={() => onMovieClicked(movie)} className="movie-result">
        <div class="movie-image">
          <img src={movie.Poster} />
        </div>
        <div className="movie-result-info">
          <h2>{movie.Title}</h2>
          <p>📆&nbsp;{movie.Year}</p>
        </div>
      </div>
    )
  }