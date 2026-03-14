import React, { useState, useEffect, useCallback } from 'react'
import styles from './Nav.module.css'

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  // useCallback gives a stable reference for add/remove
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
    //                              ^^^^^^^^^^^^ same reference — works!
  }, [handleScroll])

  return (
     <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
    <img
      className={styles.logo}
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix"
      width={92}
      height={25}
    />
  </nav>
  )
}

export default React.memo(Nav)