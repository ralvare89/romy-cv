// Experience.jsx
import { useEffect, useRef } from 'react'
import useReveal from './useReveal'
import styles from './Experience.module.scss'

function ExpItem({ item, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={styles.item}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.dateCol}>
        <p className={styles.period}>{item.period}</p>
        <p className={styles.company}>{item.company}</p>
      </div>

      <div className={styles.content}>
        <h3 className={styles.role}>
          {item.role}
          {item.current && (
            <span className={styles.badgeCurrent} aria-label="Current position">Current</span>
          )}
          {item.badge && !item.current && (
            <span className={styles.badgeChip}>{item.badge}</span>
          )}
        </h3>

        <ul className={styles.bullets}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience({ experience }) {
  const labelRef = useReveal()

  return (
    <section id="experience" className={styles.experience}>
      <div className="wrapper">
        <p ref={labelRef} className={styles.label}>03 — Experience</p>
        <div className={styles.list}>
          {experience.map((item, i) => (
            <ExpItem key={`${item.company}-${item.period}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
