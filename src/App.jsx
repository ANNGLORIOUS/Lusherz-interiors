import { useState } from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Contact from './Pages/Contact.jsx'

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'contact', label: 'Contact' },
]

const pages = {
  home: Home,
  about: About,
  services: Services,
  portfolio: Portfolio,
  contact: Contact,
}

function App() {
  const [activePage, setActivePage] = useState('home')
  const CurrentPage = pages[activePage]

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap" aria-label="Lusherz Interiors home">
          <div className="brand-mark">L</div>
          <div>
            <div className="brand-name">Lusherz</div>
            <div className="brand-tag">Interiors</div>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`nav-button ${activePage === item.key ? 'active-nav' : ''}`}
              onClick={() => setActivePage(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <span className="header-call">+44 20 5555 0194</span>
          <button type="button" className="primary-btn">
            Book a consult
          </button>
        </div>
      </header>

      <main>
        <CurrentPage />
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-wrap">
              <div className="brand-mark">L</div>
              <div>
                <div className="brand-name">Lusherz</div>
                <div className="brand-tag">Interiors</div>
              </div>
            </div>
            <p>Designing soulful, high-performing spaces that feel rich in texture, calm in rhythm, and deeply personal.</p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <button type="button" className="footer-link" onClick={() => setActivePage('about')}>About</button>
            <button type="button" className="footer-link" onClick={() => setActivePage('portfolio')}>Portfolio</button>
            <button type="button" className="footer-link" onClick={() => setActivePage('services')}>Services</button>
            <button type="button" className="footer-link" onClick={() => setActivePage('contact')}>Contact</button>
          </div>

          <div className="footer-column">
            <h4>Visit</h4>
            <p>14 Mercer Lane</p>
            <p>London, United Kingdom</p>
            <p>hello@lusherzinteriors.com</p>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <p>Instagram</p>
            <p>Pinterest</p>
            <p>LinkedIn</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Lusherz Interiors</span>
          <span>Privacy Policy • Terms</span>
        </div>
      </footer>
    </div>
  )
}

export default App
