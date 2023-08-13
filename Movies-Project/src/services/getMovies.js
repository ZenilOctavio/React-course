import { MOVIES_BY_NAME_ENDPOINT } from "../constants/endpoints"
// import results from '../mocks/searchWithResult.json'
import mapMovie from './mapMovie'

export function getMovies(content) {
    return (
        fetch(`${MOVIES_BY_NAME_ENDPOINT}${content}`)
        .then(response => {
            if (!response.ok) throw new Error('Error while getting the movies')
            return response.json()
        })
        .then(jsonObject => {
            if (!jsonObject.Search) throw new Error('No results')
            return jsonObject.Search
        })
        .then(movies => movies.map((movie) => mapMovie(movie)))
        .catch(error => {
            return error
        })
    )

    // console.log(`Actual search: ${content}`)
    // return new Promise((res) => {
    //     res(results.Search.map(movie => mapMovie(movie)))
    // })
}