import { useState } from 'react'
import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { SectionHeader } from '../components/SectionHeader'
import { Icon } from '../components/Icon'

export function Expertise() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const [open, setOpen] = useState(0)
  return (
    <section id="expertise" className="section expertise" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeader kicker={copy.expertiseKicker} title={copy.expertiseTitle} intro={copy.expertiseIntro} id="expertise-title"/>
        <div className="expertise-list" data-reveal="up">
          {portfolio.expertise.map((item, index) => {
            const expanded = index === open
            return (
              <article className={`expertise-row ${expanded ? 'is-open' : ''}`} key={item.number}>
                <button type="button" aria-expanded={expanded} aria-controls={`expertise-${index}`} onClick={() => setOpen(expanded ? -1 : index)}>
                  <span>{item.number}</span>
                  <strong>{text(item.title, language)}</strong>
                  <small>{copy.level}: {text(item.level, language)}</small>
                  <Icon name={expanded ? 'minus' : 'plus'}/>
                </button>
                <div id={`expertise-${index}`} className="expertise-row__panel" hidden={!expanded}>
                  <p>{text(item.description, language)}</p>
                  <ul>{item.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
