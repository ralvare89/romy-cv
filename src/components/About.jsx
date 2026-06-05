// About.jsx
import useReveal from './useReveal'
import styles from './About.module.scss'

export default function About({ profile }) {
  const labelRef = useReveal()
  const gridRef  = useReveal()

  return (
    <section id="about" className={styles.about}>
      <div className="wrapper">
        <p ref={labelRef} className={styles.label}>01 — Profile</p>

        <div ref={gridRef} className={styles.grid}>
          <div className={styles.text}>
            {profile.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className={styles.stats}>
            {profile.stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
