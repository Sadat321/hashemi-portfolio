import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SitePreferencesProvider } from './context/SitePreferences'
import './styles/tokens.css'
import './styles/global.css'
import './styles/components.css'
import './styles/sections.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SitePreferencesProvider>
      <App />
    </SitePreferencesProvider>
  </React.StrictMode>,
)
