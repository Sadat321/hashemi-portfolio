import { useEffect, useRef } from 'react'
import { labels, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { Icon } from './Icon'
import { Button } from './Button'

export function ProjectModal({ project, onClose }) {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined
    const previous = document.activeElement
    document.documentElement.classList.add('modal-is-open')
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return
      const nodes = [...dialogRef.current.querySelectorAll('button, a[href]')]
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.classList.remove('modal-is-open')
      document.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="project-modal">
      <button className="project-modal__scrim" type="button" aria-label={copy.modalClose} onClick={onClose}/>
      <article ref={dialogRef} className="project-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <header className="project-modal__topbar">
          <span>{copy.liveProject} / {project.id}</span>
          <button ref={closeRef} type="button" onClick={onClose}>{copy.close}<Icon name="close"/></button>
        </header>
        <div className="project-modal__media">
          <img src={project.image} alt={text(project.alt, language)}/>
          <span>{copy.projectScreenshot}</span>
        </div>
        <div className="project-modal__content">
          <div className="project-modal__heading">
            <span>{text(project.category, language)} · {text(project.year, language)}</span>
            <h2 id="project-dialog-title">{text(project.title, language)}</h2>
            <p>{text(project.overview, language)}</p>
          </div>
          <dl className="project-modal__meta">
            <div><dt>{copy.role}</dt><dd>{text(project.role, language)}</dd></div>
            <div><dt>{copy.technology}</dt><dd>{project.technologies.join(' · ')}</dd></div>
            <div><dt>{copy.outcome}</dt><dd>{text(project.outcome, language)}</dd></div>
          </dl>
          <div className="project-modal__details">
            <section><span>01</span><h3>{copy.objective}</h3><p>{text(project.objective, language)}</p></section>
            <section><span>02</span><h3>{copy.solution}</h3><p>{text(project.solution, language)}</p></section>
          </div>
          <div className="project-modal__footer"><span>{copy.publishingNote}</span><Button href={project.url} variant="primary" icon="external">{copy.visitWebsite}</Button></div>
        </div>
      </article>
    </div>
  )
}
