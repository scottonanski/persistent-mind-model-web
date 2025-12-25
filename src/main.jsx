import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/Header.css'
import './css/SystemTelemetry.css'
import './css/LedgerTerminal.css'
import './css/SectionRSM.css';
import './css/SectionHero.css'
import './css/SectionCore.css'
import './css/SectionSubstrate.css'
import './css/blurs.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
