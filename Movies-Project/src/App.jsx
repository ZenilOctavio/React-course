import './App.css'
import { Loader } from './components/Loader/Loader'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useDebouncer } from './hooks/useDebouncer'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'

function App() {

  const [sorted, setSorted] = useState(false)
  const {search, updateSearch, searchError} = useSearch()
  const {movies, searchMovies, loading} = useMovies({search, searchError, sorted})
  useDebouncer({debouncedFunction: () => {
    console.log('rendered')
    searchMovies(search)
    
  }, dependency: search, delay: 500})

  const handleClick = (event) => {
    event.preventDefault()
    searchMovies(search)
  }


  const handleChange = (event) => {
    event.preventDefault()
    const newQuery = event.target.value

    updateSearch(newQuery)
    console.log(newQuery)
  }

  const handleSort = () => {
    setSorted(!sorted)
  }
  
  return (
    <div>
      <header>
        
        <h2>Movies App</h2>
        
        <form className="search">
          
          <label htmlFor="search">
            Search a movie
            <input value={search} onChange={handleChange} name="search" type="text" placeholder="Matrix, La La Land, etc..."/>
          </label>
          <label htmlFor="sort">
            Sort by name
            <input value={sorted} onChange={handleSort} type="checkbox" name="sort" id="" />
          </label>
          <button onClick={handleClick}>Search</button>
          
        </form>
        {
          searchError &&
          <p className="error" >{searchError}</p>
        }
      </header>

      <main>
        {
          loading ?
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Loader/>
            </div>
              :
              <Movies movies={movies}/> 
        }
      </main>
        
    </div>
  )
}

export default App
