import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { useMovies } from '../../hooks/useMovies'
import { IMAGE_BASE, tmdbClient } from '../../api/tmdb'
import styles from './Row.module.css'

const ytOpts = {
  height: '390', width: '100%',
  playerVars: { autoplay: 1 },
}

function Row({ title, fetchUrl, endpointKey, isLargeRow }) {
  const { data: movies = [], isLoading } = useMovies(fetchUrl, endpointKey)
  const [trailerUrl, setTrailerUrl] = useState('')

  const handleClick = async (movie) => {
    if (trailerUrl) { setTrailerUrl(''); return }
    const mediaType = movie.first_air_date ? 'tv' : 'movie'
    const { data } = await tmdbClient.get(`/api/trailer/${mediaType}/${movie.id}`)
    const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube')
    if (trailer) setTrailerUrl(trailer.key)
  }

  if (isLoading) return <div style={{ color: 'white', padding: '20px' }}>Loading {title}...</div>

  return (
    <section className={styles.row}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.posters}>
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`${styles.poster} ${isLargeRow ? styles.large : ''}`}
            src={`${IMAGE_BASE}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name || movie.title}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={ytOpts} />}
    </section>
  )
}

export default React.memo(Row)