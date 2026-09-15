import { labels, portfolio, publicUrl, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { SectionHeader } from '../components/SectionHeader'
import { SectionFilm } from '../components/SectionFilm'
import { Terminal } from '../components/Terminal'

export function Security() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  return (
    <section id="security" className="section security cinematic-section" aria-labelledby="security-title">
      <SectionFilm
        src={publicUrl('assets/server-room.webm')}
        poster={publicUrl('assets/server-room-poster.jpg')}
        tone="server"
      />
      <div className="security__network" aria-hidden="true"><i/><i/><i/><i/><i/><span/><span/><span/></div>
      <div className="container">
        <SectionHeader kicker={copy.securityKicker} title={copy.securityTitle} intro={copy.securityIntro} id="security-title"/>
        <div className="security__content">
          <div className="security-path" data-reveal="up">
            <span className="micro-label">{copy.learningPath}</span>
            <ol>{portfolio.security.topics.map((topic, index) => <li key={index}><span>{String(index+1).padStart(2,'0')}</span><strong>{text(topic, language)}</strong><i/></li>)}</ol>
          </div>
          <Terminal/>
        </div>
      </div>
    </section>
  )
}
