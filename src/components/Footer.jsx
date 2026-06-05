// Footer.jsx
import styles from './Footer.module.scss'

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
          </nav>
        </div>
      </div>
    </footer>
  )
}
