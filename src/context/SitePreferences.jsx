import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const SitePreferencesContext = createContext(null)

const getInitialLanguage = () => {
  const saved = localStorage.getItem('portfolio-language')
  if (saved === 'fa' || saved === 'en') return saved
  const browserLanguage = navigator.language?.toLowerCase() || 'en'
  return browserLanguage.startsWith('fa') || browserLanguage.startsWith('prs') ? 'fa' : 'en'
}

const getInitialTheme = () => {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved === 'dark' || saved === 'light') return saved
  return 'dark'
}

export function SitePreferencesProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.lang = language === 'fa' ? 'fa-AF' : 'en'
    root.dir = language === 'fa' ? 'rtl' : 'ltr'
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#030305' : '#f2f1ee')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const value = useMemo(() => ({
    language,
    theme,
    setLanguage,
    setTheme,
    toggleLanguage: () => setLanguage((current) => current === 'en' ? 'fa' : 'en'),
    toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark'),
    isRTL: language === 'fa',
  }), [language, theme])

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext)
  if (!context) throw new Error('useSitePreferences must be used inside SitePreferencesProvider')
  return context
}
