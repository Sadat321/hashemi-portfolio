import { useEffect, useMemo, useState } from 'react'
import { portfolio, labels } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { useActiveSection } from '../hooks/useActiveSection'
import { Logo } from './Logo'
import { Icon } from './Icon'

function PreferenceControls({ compact = false }) {
  const { language, theme, toggleLanguage, toggleTheme } = useSitePreferences()
  const copy = labels[language]
  return (
    <div className={`preference-controls ${compact ? 'preference-controls--compact' : ''}`} aria-label="Display preferences">
      <button type="button" onClick={toggleLanguage} aria-label={copy.languageLabel} data-cursor="LANG">
        <Icon name="globe" size={16}/><span>{copy.language}</span>
      </button>
      <button type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? copy.themeLabelLight : copy.themeLabelDark} data-cursor="THEME">
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16}/><span>{theme === 'dark' ? copy.themeLight : copy.themeDark}</span>
      </button>
    </div>
  )
}

export function Nav() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ids = useMemo(() => ['home', ...portfolio.nav.map((item) => item.id)], [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-is-open', menuOpen)
    const close = (event) => event.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', close)
    return () => {
      document.documentElement.classList.remove('menu-is-open')
      document.removeEventListener('keydown', close)
    }
  }, [menuOpen])

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="site-nav__inner">
        <Logo />
        <nav className="site-nav__links" aria-label="Primary navigation">
          {portfolio.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'is-active' : ''} aria-current={active === item.id ? 'location' : undefined}>
              {copy.nav[item.label]}
            </a>
          ))}
        </nav>
        <div className="site-nav__actions">
          <PreferenceControls compact />
          <a className="nav-connect" href="#contact" data-cursor="CONNECT">{copy.connect}<Icon name="arrowUpRight" size={16}/></a>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? copy.close : copy.menu} onClick={() => setMenuOpen((value) => !value)}>
          <span>{menuOpen ? copy.close : copy.menu}</span><Icon name={menuOpen ? 'close' : 'menu'} size={20}/>
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {portfolio.nav.map((item, index) => (
            <a key={item.id} href={`#${item.id}`} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} className={active === item.id ? 'is-active' : ''} style={{ '--menu-index': index }}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{copy.nav[item.label]}</strong><Icon name="arrowUpRight"/>
            </a>
          ))}
        </nav>
        <div className="mobile-menu__bottom">
          <PreferenceControls />
          <a href={portfolio.personal.whatsapp} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1}>{portfolio.personal.phoneDisplay}</a>
        </div>
      </div>
    </header>
  )
}
