import { useEffect, useRef } from 'react'
import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'

export function Hero() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const person = portfolio.personal
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { video.pause(); return }
    video.currentTime = 0
    video.play().catch(() => {})
  }, [])

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__video" aria-hidden="true">
        <video ref={videoRef} id="heroVideo" autoPlay muted playsInline preload="metadata" poster="/assets/hero-core.jpg">
          <source src="/assets/cinematic-hero.webm" type="video/webm"/>
        </video>
      </div>
      <div className="hero__overlay" aria-hidden="true"/>
      <div className="hero__grid" aria-hidden="true"/>
      <div className="hero__ambient" aria-hidden="true"/>

      <div className="container hero__layout">
        <div className="hero__copy">
          <div className="hero__eyebrow animate-intro" style={{ '--intro-delay': '120ms' }}>
            <span>{copy.greeting}</span><strong>{text(person.name, language)}</strong>
          </div>
          <span className="hero__role animate-intro" style={{ '--intro-delay': '220ms' }}>{text(person.role, language)} · {text(person.secondRole, language)}</span>
          <h1 id="hero-title" className="animate-intro" style={{ '--intro-delay': '300ms' }}>
            <span>{text(person.headlineLead, language)}</span>{' '}
            <em>{text(person.headlineAccent, language)}</em>{' '}
            <span>{text(person.headlineTail, language)}</span>
          </h1>
          <p className="hero__statement animate-intro" style={{ '--intro-delay': '420ms' }}>{text(person.statement, language)}</p>
          <div className="hero__actions animate-intro" style={{ '--intro-delay': '520ms' }}>
            <Button href="#projects">{copy.viewWork}</Button>
            <Button href={person.resumeUrl} variant="secondary" icon="download" download>{copy.downloadCV}</Button>
            <Button href={person.whatsapp} variant="text" icon="arrowUpRight">{copy.whatsapp}</Button>
          </div>
          <div className="availability animate-intro" style={{ '--intro-delay': '600ms' }}><i/><span>{copy.status}</span></div>
        </div>

        <dl className="hero__facts animate-intro" style={{ '--intro-delay': '680ms' }}>
          <div><dt>{copy.locationLabel}</dt><dd>{text(person.location, language)}</dd></div>
          <div><dt>{copy.availabilityLabel}</dt><dd>{text(person.availability, language)}</dd></div>
          <div><dt>{copy.semesterLabel}</dt><dd>{text(person.academicLevel, language)}</dd></div>
        </dl>
      </div>

      <a className="scroll-cue" href="#about"><span>{copy.scroll}</span><i/><Icon name="down" size={15}/></a>
    </section>
  )
}
