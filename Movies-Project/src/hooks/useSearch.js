import { useState, useEffect, useRef } from 'react'

export function useSearch() {
    const [search, updateSearch] = useState('')
    const isFirstSearch = useRef(true)
    const [searchError, setSearchError] = useState(null)

    useEffect(() => {
      if(isFirstSearch.current){
        isFirstSearch.current = search == ''
        return
      }

      if(search.startsWith(' ')){
        setSearchError('Space at the beginning of the search')
        return
      }

      if(search == ''){
        setSearchError('Empty search')
        return
      }

      if(search.length < 3){
        setSearchError('Not enough characters')
        return
      }

      setSearchError(null)

    },[search])
    
    return {search, updateSearch, searchError}
  }