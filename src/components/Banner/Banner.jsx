import React, { useMemo } from 'react'
import { useMovies } from '../../hooks/useMovies'
import { ENDPOINTS, IMAGE_BASE } from '../../api/tmdb'
import styles from './Banner.module.css'

const truncate = (str, n) =>
  str?.length > n ? str.slice(0, n - 1) + '…' : str

function Banner() {
  const { data: movies = [], isLoading } = useMovies(ENDPOINTS.fetchNetflixOriginals)

  // useMemo: random pick only recalculates when movies array changes
  const movie = useMemo(() => {
    if (!movies.length) return null
    return movies[Math.floor(Math.random() * movies.length)]
  }, [movies])

  if (isLoading) return <div className={styles.skeleton} />
  if (!movie) return null

  return (
    <header
      className={styles.banner}
      style={{ backgroundImage: `url(${IMAGE_BASE}${movie.backdrop_path})` }}
    >
      <div className={styles.contents}>
        <h1 className={styles.title}>
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className={styles.buttons}>
          <button className={styles.button}>▶ Play</button>
          <button className={`${styles.button} ${styles.buttonDark}`}>+ My List</button>
        </div>
        <p className={styles.description}>{truncate(movie.overview, 150)}</p>
      </div>
      <div className={styles.fadeBottom} />
    </header>
  )
}

export default React.memo(Banner)