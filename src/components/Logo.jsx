import { portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'

export function Logo() {
  const { language } = useSitePreferences()
  return (
    <a className="logo" href="#home" aria-label={`${text(portfolio.personal.name, language)} — home`} data-cursor="TOP">
      <span className="logo__mark" aria-hidden="true">{portfolio.personal.initials}</span>
      <span className="logo__text">
        <strong>{text(portfolio.personal.name, language)}</strong>
        <small>CS · IT · WEB · SECURITY</small>
      </span>
    </a>
  )
}
