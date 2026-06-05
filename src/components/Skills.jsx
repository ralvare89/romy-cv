// Skills.jsx
import useReveal from './useReveal'
import styles from './Skills.module.scss'

export default function Skills({ skills }) {
  const labelRef = useReveal()
  const gridRef  = useReveal()

  return (
    <section id="skills" className={styles.skills}>
      <div className="wrapper">
        <p ref={labelRef} className={styles.label}>02 — Tech Stack</p>

        <div ref={gridRef} className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.group}>
              <p className={styles.groupTitle}>{group.category}</p>
              <div className={styles.tags}>
                {group.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
