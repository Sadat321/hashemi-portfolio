import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { SectionHeader } from '../components/SectionHeader'

export function Languages() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  return (
    <section id="languages" className="section languages" aria-labelledby="languages-title">
      <div className="container">
        <SectionHeader kicker={copy.languagesKicker} title={copy.languagesTitle} intro={copy.languagesIntro} id="languages-title"/>
        <div className="language-list" data-reveal="up">
          {portfolio.languages.map((item, index) => (
            <article key={index}><span>{String(index+1).padStart(2,'0')}</span><h3>{text(item.name, language)}</h3><strong>{text(item.level, language)}</strong><p>{text(item.detail, language)}</p></article>
          ))}
        </div>
      </div>
    </section>
  )
}
