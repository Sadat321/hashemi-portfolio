import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { SectionHeader } from '../components/SectionHeader'

export function About() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const person = portfolio.personal

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader kicker={copy.aboutKicker} title={copy.aboutTitle} intro={copy.aboutLead} id="about-title"/>

        <div className="about__profile" data-reveal="up">
          <figure className="profile-portrait">
            <img src={person.portrait} width="1057" height="1080" alt={copy.photoAlt} loading="lazy"/>
            <figcaption>{text(person.name, language)} · {text(person.location, language)}</figcaption>
          </figure>

          <div className="about__profile-copy">
            <span className="micro-label">{copy.profile} / {copy.verified}</span>
            <p>{text(person.biography, language)}</p>
            <dl className="about__facts">
              {portfolio.aboutFacts.map((fact, index) => (
                <div key={index}><dt>{text(fact.value, language)}</dt><dd>{text(fact.label, language)}</dd></div>
              ))}
            </dl>
          </div>
        </div>

        <div className="journey" data-reveal="up">
          <span className="micro-label">{copy.timelineLabel}</span>
          <ol>{portfolio.journey.map((item, index) => <li key={index}><span>{String(index + 1).padStart(2,'0')}</span><strong>{text(item, language)}</strong><i/></li>)}</ol>
        </div>
      </div>
    </section>
  )
}
