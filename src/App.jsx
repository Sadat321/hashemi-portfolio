import { useCallback, useEffect, useState } from 'react'
import { labels, portfolio, text } from './data/portfolio'
import { useSitePreferences } from './context/SitePreferences'
import { useReveal } from './hooks/useReveal'
import { Nav } from './components/Nav'
import { CustomCursor } from './components/CustomCursor'
import { PageProgress } from './components/PageProgress'
import { ProjectModal } from './components/ProjectModal'
import { Icon } from './components/Icon'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Expertise } from './sections/Expertise'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Security } from './sections/Security'
import { Languages } from './sections/Languages'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const [selectedProject, setSelectedProject] = useState(null)
  useReveal()

  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let pointerFrame = 0
    let scrollFrame = 0
    const onPointer = (event) => {
      cancelAnimationFrame(pointerFrame)
      pointerFrame = requestAnimationFrame(() => {
        root.style.setProperty('--pointer-x', `${event.clientX}px`)
        root.style.setProperty('--pointer-y', `${event.clientY}px`)
      })
    }
    const onScroll = () => {
      if (reduced) return
      cancelAnimationFrame(scrollFrame)
      scrollFrame = requestAnimationFrame(() => root.style.setProperty('--hero-parallax', `${Math.min(window.scrollY * .075, 80)}px`))
    }
    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(pointerFrame)
      cancelAnimationFrame(scrollFrame)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const name = text(portfolio.personal.name, language)
    const title = language === 'fa'
      ? `${name} — علوم کامپیوتر، توسعه وب و تکنالوژی معلوماتی`
      : `${name} — Computer Science, Web Development & IT`
    const description = text(portfolio.personal.statement, language)
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [language])

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org', '@type': 'Person',
      name: 'Sayed Masbah Hashimi', alternateName: 'سید مصباح هاشمی',
      url: portfolio.meta.siteUrl, email: `mailto:${portfolio.personal.email}`,
      telephone: portfolio.personal.phone,
      jobTitle: 'Computer Science & IT Student / Web Developer',
      address: { '@type': 'PostalAddress', addressLocality: 'Kabul', addressCountry: 'AF' },
      alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'Gharjistan University' }],
      sameAs: portfolio.social.filter((item) => item.url.startsWith('https://')).map((item) => item.url),
    }
    const node = document.createElement('script')
    node.type = 'application/ld+json'
    node.text = JSON.stringify(schema)
    document.head.appendChild(node)
    return () => node.remove()
  }, [])

  const closeProject = useCallback(() => setSelectedProject(null), [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <PageProgress/>
      <Nav/>
      <CustomCursor/>
      <main id="main-content">
        <Hero/>
        <About/>
        <Expertise/>
        <Projects onOpenProject={setSelectedProject}/>
        <Experience/>
        <Education/>
        <Security/>
        <Languages/>
        <Contact/>
      </main>
      <Footer/>
      <a className="whatsapp-float" href={portfolio.personal.whatsapp} target="_blank" rel="noreferrer" aria-label={`${copy.whatsapp}: ${portfolio.personal.phoneDisplay}`} data-cursor="CHAT">
        <i aria-hidden="true"/><span>{copy.whatsapp}</span><Icon name="arrowUpRight" size={16}/>
      </a>
      <ProjectModal project={selectedProject} onClose={closeProject}/>
    </>
  )
}

export default App
