import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'

export function Footer() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div><strong>{text(portfolio.personal.name, language)}</strong><span>{text(portfolio.personal.secondRole, language)}</span></div>
        <div><span>{copy.availableFor}</span><p>{copy.opportunities}</p></div>
        <a href="#home">{copy.backTop}<span>↑</span></a>
      </div>
      <div className="container footer__bottom"><span>© {portfolio.meta.year} {text(portfolio.personal.name, language)}</span><span>{copy.builtWith}</span></div>
    </footer>
  )
}
