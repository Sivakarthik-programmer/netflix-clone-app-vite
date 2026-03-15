import axios from 'axios'



const BASE_URL = import.meta.env.PROD
    ? 'https://netflix-clone-app-backend.onrender.com'  // production — we'll fill this later
    : 'http://localhost:5000'


export const tmdbClient = axios.create({
    baseURL: BASE_URL,
})

export const IMAGE_BASE = 'https://image.tmdb.org/t/p/original'

export const ENDPOINTS = {
    fetchNetflixOriginals: '/api/netflix-originals',
    fetchTrending: '/api/trending',
    fetchTopRated: '/api/top-rated',
    fetchActionMovies: '/api/action',
    fetchComedyMovies: '/api/comedy',
    fetchHorrorMovies: '/api/horror',
    fetchRomanceMovies: '/api/romance',
    fetchDocumentaries: '/api/documentaries',
}

// Extra params per endpoint (merged in by useMovies hook)
export const ENDPOINT_PARAMS = {}