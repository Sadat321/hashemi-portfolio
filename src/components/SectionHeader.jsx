export function SectionHeader({ kicker, title, intro, id, align = 'split' }) {
  return (
    <header className={`section-header section-header--${align}`} data-reveal="up">
      <span className="section-header__kicker">{kicker}</span>
      <div className="section-header__copy">
        <h2 id={id}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  )
}
