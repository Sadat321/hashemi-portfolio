import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { SectionHeader } from '../components/SectionHeader'
import { Icon } from '../components/Icon'

export function Projects({ onOpenProject }) {
  const { language } = useSitePreferences()
  const copy = labels[language]
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader kicker={copy.projectsKicker} title={copy.projectsTitle} intro={copy.projectsIntro} id="projects-title"/>
        <div className="projects__list">
          {portfolio.projects.map((project, index) => (
            <article className="project" key={project.id} data-reveal="up">
              <button className="project__media" type="button" onClick={() => onOpenProject(project)} aria-label={`${copy.viewCase}: ${text(project.title, language)}`} data-cursor="VIEW">
                <img src={project.image} alt={text(project.alt, language)} width="1440" height="960" loading={index === 0 ? 'eager' : 'lazy'}/>
                <span className="project__live"><i/>{copy.liveProject}</span>
                <span className="project__number">{project.id}</span>
                <span className="project__media-action">{copy.viewCase}<Icon name="arrowUpRight"/></span>
              </button>
              <div className="project__info">
                <div className="project__heading"><span>{text(project.category, language)} · {text(project.year, language)}</span><h3>{text(project.title, language)}</h3></div>
                <p>{text(project.summary, language)}</p>
                <dl>
                  <div><dt>{copy.role}</dt><dd>{text(project.role, language)}</dd></div>
                  <div><dt>{copy.technology}</dt><dd>{project.technologies.join(' · ')}</dd></div>
                </dl>
                <div className="project__links">
                  <button type="button" onClick={() => onOpenProject(project)}>{copy.viewCase}<Icon name="arrow"/></button>
                  <a href={project.url} target="_blank" rel="noreferrer">{copy.visitWebsite}<Icon name="external"/></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
