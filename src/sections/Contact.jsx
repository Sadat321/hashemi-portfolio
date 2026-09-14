import { useState } from 'react'
import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'

export function Contact() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(portfolio.personal.email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${portfolio.personal.email}` }
  }
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true"/>
      <div className="container">
        <div className="contact__header" data-reveal="up"><span className="section-header__kicker">{copy.contactKicker}</span><h2 id="contact-title">{copy.contactTitle}</h2><p>{copy.contactIntro}</p></div>
        <div className="contact__primary" data-reveal="up">
          <a href={`mailto:${portfolio.personal.email}`}>{portfolio.personal.email}<Icon name="arrowUpRight"/></a>
          <button type="button" onClick={copyEmail} aria-label={`${copy.copy} ${copy.email}`}><Icon name={copied ? 'check' : 'copy'}/>{copied ? copy.copied : copy.copy}</button>
        </div>
        <div className="contact__actions" data-reveal="up">
          <Button href={portfolio.personal.whatsapp}>{copy.whatsapp}</Button>
          <Button href={`tel:${portfolio.personal.phone}`} variant="secondary" icon="phone">{copy.call}</Button>
          <Button href={portfolio.personal.resumeUrl} variant="secondary" icon="download" download>{copy.downloadCV}</Button>
        </div>
        <div className="contact__channels" data-reveal="up">
          {portfolio.social.map((item) => <a href={item.url} key={item.url} target={item.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span>{text(item.label, language)}</span><strong>{item.value}</strong><Icon name="arrowUpRight"/></a>)}
        </div>
      </div>
    </section>
  )
}
