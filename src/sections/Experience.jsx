import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { SectionHeader } from '../components/SectionHeader'

export function Experience() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader kicker={copy.experienceKicker} title={copy.experienceTitle} intro={copy.experienceIntro} id="experience-title"/>
        <div className="experience-list">
          {portfolio.experience.map((item, index) => (
            <article className="experience-item" key={index} data-reveal="up">
              <div className="experience-item__period"><span>{String(index+1).padStart(2,'0')}</span><time>{text(item.period, language)}</time></div>
              <div className="experience-item__main"><h3>{text(item.role, language)}</h3><p>{text(item.organization, language)}</p><small>{text(item.location, language)}</small></div>
              <div className="experience-item__details"><span className="micro-label">{copy.responsibilities}</span><ul>{item.details.map((detail, detailIndex) => <li key={detailIndex}>{text(detail, language)}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
