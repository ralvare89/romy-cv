// App.jsx
import { useEffect } from 'react'
import cvData from './data/cv.json'

import Cursor        from './components/Cursor'
import NavDots       from './components/NavDots'
import BackgroundOrbs from './components/BackgroundOrbs'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Experience    from './components/Experience'
import Education     from './components/Education'
import References    from './components/References'
import Portfolio     from './components/Portfolio'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

import './styles/main.scss'

export default function App() {
  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('progress')
    if (!bar) return
    const onScroll = () => {
      const s = document.documentElement.scrollTop
      const h = document.documentElement.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${s / h})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div id="progress" aria-hidden="true" />
      <BackgroundOrbs />
      <Cursor />
      <NavDots />

      <main>
        <Hero       meta={cvData.meta}             contact={cvData.contact} />
        <About      profile={cvData.profile} />
        <Skills     skills={cvData.skills} />
        <Experience experience={cvData.experience} />
        <Education  education={cvData.education} />
        <Portfolio />
        <References references={cvData.references} />
        <Contact />
      </main>

      <Footer meta={cvData.meta} contact={cvData.contact} />
    </>
  )
}
