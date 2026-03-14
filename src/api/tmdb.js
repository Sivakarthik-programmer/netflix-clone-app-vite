import axios from 'axios'

export const tmdbClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: 'en-US',
    },
})

export const IMAGE_BASE = 'https://image.tmdb.org/t/p/original'

export const ENDPOINTS = {
    fetchNetflixOriginals: '/discover/tv',
    fetchTrending: '/trending/all/week',
    fetchTopRated: '/movie/top_rated',
    fetchActionMovies: '/discover/movie',
    fetchComedyMovies: '/discover/movie',
    fetchHorrorMovies: '/discover/movie',
    fetchRomanceMovies: '/discover/movie',
    fetchDocumentaries: '/discover/movie',
}

// Extra params per endpoint (merged in by useMovies hook)
export const ENDPOINT_PARAMS = {
    fetchNetflixOriginals: { with_network: 213 },
    fetchActionMovies: { with_genres: 28 },
    fetchComedyMovies: { with_genres: 35 },
    fetchHorrorMovies: { with_genres: 27 },
    fetchRomanceMovies: { with_genres: 10749 },
    fetchDocumentaries: { with_genres: 99 },
}