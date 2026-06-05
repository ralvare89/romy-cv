// NavDots.jsx
import { useEffect, useState } from 'react'
import styles from './NavDots.module.scss'

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'education', 'portfolio', 'refs', 'contact']

export default function NavDots() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={styles.nav} aria-label="Secciones">
      {SECTIONS.map((id) => (
        <button
          key={id}
          className={`${styles.dot} ${active === id ? styles.active : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={id}
        />
      ))}
    </nav>
  )
}
