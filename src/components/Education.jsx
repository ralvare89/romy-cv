// Education.jsx
import useReveal from './useReveal'
import styles from './Education.module.scss'

export default function Education({ education }) {
  const labelRef = useReveal()
  const gridRef  = useReveal()

  return (
    <section id="education" className={styles.education}>
      <div className="wrapper">
        <p ref={labelRef} className={styles.label}>04 — Education</p>

        <div ref={gridRef} className={styles.grid}>
          {education.map((edu) => (
            <div key={edu.degree} className={styles.card}>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={styles.institution}>{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
