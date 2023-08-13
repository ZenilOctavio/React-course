function MoviesWithResults({movies}){
        
    return (
        <ul className="movies-list">
        { 
          movies.map((movie) => (
            <li className="movie" key={movie.id}>
              <img src={movie.poster} alt={`something`} />
              <footer>
                <h4>{movie.title}</h4>
                <p>{movie.year}</p>
              </footer>
            </li>
          ))
        }
    </ul>
    )
}

function MoviesWithNoResults() {
    return(
        <h5>No movies found</h5>
    )
}

export function Movies({movies}){
    const hasMovies = movies?.length > 0
    return(
        hasMovies ? 
            <MoviesWithResults movies={movies}/>
            :
            <MoviesWithNoResults/>
    )
}