import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { SectionHeader } from '../components/SectionHeader'

export function Education() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader kicker={copy.educationKicker} title={copy.educationTitle} intro={copy.educationIntro} id="education-title"/>
        <div className="education-list" data-reveal="up">
          {portfolio.education.map((item, index) => (
            <article key={index}>
              <span className="education-list__number">{String(index+1).padStart(2,'0')}</span>
              <div><h3>{text(item.degree, language)}</h3><p>{text(item.field, language)}</p></div>
              <dl>
                <div><dt>{copy.institution}</dt><dd>{text(item.institution, language)}</dd></div>
                <div><dt>{copy.period}</dt><dd>{text(item.period, language)}</dd></div>
                <div><dt>{copy.result}</dt><dd>{text(item.result, language)}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
