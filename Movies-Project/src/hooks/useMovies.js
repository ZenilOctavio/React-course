import { useCallback, useState, useRef, useMemo } from "react";
import { getMovies } from "../services/getMovies";

export function useMovies({search, sorted}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)
    
    const searchMovies = useCallback(async (search) => {

      if(search == previousSearch.current) return
      if (!search) return

      try{
        setLoading(true)
        console.log(search)
        previousSearch.current = search
        const movies = await getMovies(search)
        console.log(movies)
        setMovies(movies)
  
      } catch(error){
        console.log(error.message)
        
      } finally{
        setLoading(false)
      }

    },[])
    
    const sortedMovies = useMemo(() => {
      return sorted ?
        [...movies].sort((a,b) => a.title.localeCompare(b.title))
        :
        movies
    },[sorted, movies])
    
    return {movies: sortedMovies, searchMovies, loading}
}