// Portfolio.jsx
import { useState } from 'react'
import useReveal from './useReveal'
import styles from './Portfolio.module.scss'

const GROUPS = [
  {
    cms: 'AEM',
    color: '#ff6b35',
    sites: [
      { name: 'Rinvoq HCP',     url: 'https://www.rinvoqhcp.com' },
      { name: 'AbbVie',         url: 'https://www.abbvie.com' },
      { name: 'Spinraza HCP',   url: 'https://www.spinrazahcp.com' },
      { name: 'Spinraza',       url: 'https://www.spinraza.com' },
      { name: 'Skyclarys HCP',  url: 'https://www.skyclaryshcp.com' },
      { name: 'Skyclarys',      url: 'https://www.skyclarys.com' },
      { name: 'Zurzuvae',       url: 'https://www.zurzuvae.com' },
      { name: 'Biogen Options', url: 'https://www.biogenoptions.com' },
    ],
  },
  {
    cms: 'Sitecore',
    color: '#e84a5f',
    sites: [
      { name: 'Gilead Canada',           url: 'https://www.gilead.ca' },
      { name: 'Gilead Spain',            url: 'https://www.gilead.es' },
      { name: 'Gilead UK',               url: 'https://www.gilead.co.uk' },
      { name: 'Gilead Germany',          url: 'https://www.gileadsciences.de' },
      { name: 'Gilead France',           url: 'https://www.gilead.fr' },
      { name: 'Help Stop The Virus Pro', url: 'https://www.helpstoptheviruspro.com/en' },
      { name: 'Help Stop The Virus',     url: 'https://www.helpstopthevirus.com' },
      { name: 'Biktarvy',                url: 'https://www.biktarvy.com' },
      { name: 'Descovy',                 url: 'https://www.descovy.com' },
      { name: 'Veklury',                 url: 'https://www.veklury.com' },
    ],
  },
  {
    cms: 'Drupal',
    color: '#2daae1',
    sites: [
      { name: 'Qelbree',     url: 'https://www.qelbree.com' },
      { name: 'Qelbree HCP', url: 'https://www.qelbreehcp.com' },
      { name: 'Supernus',    url: 'https://www.supernus.com' },
      { name: 'Oxtellar XR', url: 'https://www.oxtellarxr.com' },
      { name: 'Trokendi XR', url: 'https://www.trokendixr.com' },
      { name: 'Apokyn',      url: 'https://www.apokyn.com' },
      { name: 'Apokyn HCP',  url: 'https://www.apokynhcp.com' },
      { name: 'Gocovri',     url: 'https://www.gocovri.com' },
      { name: 'Gocovri HCP', url: 'https://www.gocovrihcp.com' },
    ],
  },
  {
    cms: 'Contentful',
    color: '#fac832',
    sites: [
      { name: 'Ryan', url: 'https://ryan.com' },
    ],
  },
]

function screenshotUrl(siteUrl) {
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`
}

function SiteCard({ site, cmsColor }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.thumb}>
        <img
          src={screenshotUrl(site.url)}
          alt={site.name}
          loading="lazy"
          className={styles.screenshot}
        />
        <div className={styles.overlay} />
        <div className={styles.arrow} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.siteName}>{site.name}</p>
        <p className={styles.siteUrl}>{site.url.replace('https://www.', '')}</p>
      </div>
      <span className={styles.cmsDot} style={{ background: cmsColor }} />
    </a>
  )
}

export default function Portfolio() {
  const labelRef  = useReveal()
  const [active, setActive] = useState('AEM')

  const activeGroup = GROUPS.find(g => g.cms === active)

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="wrapper">
        <p ref={labelRef} className={styles.label}>05 — Portfolio</p>

        <div className={styles.tabs} role="tablist" aria-label="CMS filter">
          {GROUPS.map((group) => (
            <button
              key={group.cms}
              role="tab"
              aria-selected={active === group.cms}
              className={`${styles.tab} ${active === group.cms ? styles.tabActive : ''}`}
              style={{ '--cms-color': group.color }}
              onClick={() => setActive(group.cms)}
            >
              <span className={styles.tabDot} style={{ background: group.color }} />
              {group.cms}
              <span className={styles.tabCount}>{group.sites.length}</span>
            </button>
          ))}
        </div>

        <div className={styles.grid} key={active}>
          {activeGroup.sites.map((site) => (
            <SiteCard key={site.url} site={site} cmsColor={activeGroup.color} />
          ))}
        </div>
      </div>
    </section>
  )
}
