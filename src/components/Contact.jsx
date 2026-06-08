// Contact.jsx
import { useState } from 'react'
import useReveal from './useReveal'
import styles from './Contact.module.scss'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // Simula envío — conectar a un backend real aquí
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section id="contact" ref={ref}>
      <div className="wrapper">
        <p className={styles.label}>07 — Contact</p>

        <div className={styles.grid}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Let's talk about<br />
              <span className={styles.accent}>your next project</span>
            </h2>
            <p className={styles.body}>
              I'm open to freelance opportunities, full-time roles, or simply a conversation about front-end. Reach out and I'll get back to you soon.
            </p>
            <ul className={styles.details}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:ralvare89@gmail.com">ralvare89@gmail.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Grecia, Costa Rica — available remotely
              </li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'sent'}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'sent'}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === 'sent'}
              />
            </div>

            {status === 'sent' ? (
              <p className={styles.success}>
                Message sent! I'll get back to you soon.
              </p>
            ) : (
              <button
                type="submit"
                className={styles.btn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
