// Footer.jsx
import styles from './Footer.module.scss'
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Footer({ meta, contact }) {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.inner}>
          <p className={styles.name}>{meta.title}</p>
          <nav className={styles.links} aria-label="Contacto">
            <a href={`mailto:${contact.email}`} className={styles.link}>
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className={styles.link}>
              {contact.phone}
            </a>
            <span className={styles.link}>{contact.location}</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinBtn}
              aria-label={`${contact.linkedin} on LinkedIn`}
            >
              <IconLinkedIn />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
