// Hero.jsx
import styles from './Hero.module.scss'

export default function Hero({ meta, contact }) {
  return (
    <header id="hero" className={styles.hero}>
      <div className={styles.gridBg} aria-hidden="true" />
      <div className="wrapper">
        <p className={styles.tag}>
          Senior Front-End Engineer · 12+ years of experience
        </p>

        <h1 className={styles.name}>
          {meta.title.split(' ')[0]}<br />
          <span className={styles.nameOutline}>
            {meta.title.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <p className={styles.tagline}>{meta.subtitle}</p>

        <ul className={styles.metaList} aria-label="Información de contacto">
          <li className={styles.pill}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            {contact.location}
          </li>
          <li className={styles.pill}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          </li>
          <li className={styles.pill}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        </ul>

        <div className={styles.line} aria-hidden="true" />
      </div>
    </header>
  )
}
