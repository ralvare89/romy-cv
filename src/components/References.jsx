// References.jsx
import useReveal from './useReveal'
import styles from './References.module.scss'

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function References({ references }) {
  const labelRef = useReveal()
  const gridRef  = useReveal()

  return (
    <section id="refs" className={styles.refs}>
      <div className="wrapper">
        <p ref={labelRef} className={styles.label}>07 — References</p>

        <div ref={gridRef} className={styles.grid}>
          {references.map((ref) => (
            <div key={ref.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar} aria-hidden="true">{ref.initials}</div>
                {ref.linkedin && (
                  <a
                    href={ref.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinBtn}
                    aria-label={`${ref.name} on LinkedIn`}
                  >
                    <IconLinkedIn />
                  </a>
                )}
              </div>

              <p className={styles.name}>{ref.name}</p>
              <p className={styles.role}>
                {ref.role}<br />{ref.company}
              </p>

              <div className={styles.contacts}>
                {ref.phone && (
                  <a href={`tel:${ref.phone.replace(/[\s-]/g, '')}`} className={styles.contactItem}>
                    <IconPhone />
                    {ref.phone}
                  </a>
                )}
                {ref.email && (
                  <a href={`mailto:${ref.email}`} className={styles.contactItem}>
                    <IconEmail />
                    {ref.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
