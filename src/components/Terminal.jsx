import { useMemo, useState } from 'react'
import { labels, portfolio, text } from '../data/portfolio'
import { useSitePreferences } from '../context/SitePreferences'
import { Icon } from './Icon'

export function Terminal() {
  const { language } = useSitePreferences()
  const copy = labels[language]
  const commands = useMemo(() => ({
    whoami: language === 'fa' ? ['دانشجوی علوم کامپیوتر و IT', 'مسیر: وب + نرم‌افزار + امنیت'] : ['computer-science & IT student', 'direction: web + software + security'],
    'learning --status': portfolio.security.topics.map((item, index) => `${index < 2 ? '[ok]' : '[~]'} ${text(item, language)}`),
    'cat values.txt': language === 'fa' ? ['یادگیری پیوسته', 'ساخت کاربردی', 'امنیت از ابتدا'] : ['continuous learning', 'useful building', 'security from the start'],
  }), [language])
  const [history, setHistory] = useState([])

  const run = (command) => {
    if (command === 'clear') return setHistory([])
    setHistory((items) => [...items, { command, lines: commands[command] || [] }].slice(-3))
  }

  return (
    <div className="terminal" data-reveal="up" aria-label={copy.safeMode}>
      <div className="terminal__bar"><span><i/><i/><i/></span><strong><Icon name="terminal" size={14}/>{copy.safeMode}</strong><em>SIMULATED</em></div>
      <div className="terminal__body" aria-live="polite">
        <p className="terminal__success">{text(portfolio.security.terminal.welcome, language)}</p>
        <p>{text(portfolio.security.terminal.notice, language)}</p>
        {history.map((entry, index) => (
          <div className="terminal__entry" key={`${entry.command}-${index}`}>
            <p><b>student@portfolio:~$</b> {entry.command}</p>
            {entry.lines.map((line) => <p key={line}>{line}</p>)}
          </div>
        ))}
        <p className="terminal__prompt"><b>student@portfolio:~$</b><i/></p>
      </div>
      <div className="terminal__commands">
        {['whoami', 'learning --status', 'cat values.txt', 'clear'].map((command) => <button type="button" key={command} onClick={() => run(command)}>{command}</button>)}
      </div>
    </div>
  )
}
