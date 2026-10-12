import { BrowserRouter, NavLink, Outlet, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Contact from './Pages/Contact.jsx'
import Blog from './Pages/Blog.jsx'
import ProjectDetails from './Pages/ProjectDetails.jsx'
import BlogPostDetails from './Pages/BlogPostDetails.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <Link to="/" className="brand-wrap" aria-label="Lusherz Interiors home">
          <div className="brand-mark">L</div>
          <div>
            <div className="brand-name">Lusherz</div>
            <div className="brand-tag">Interiors</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-button ${isActive ? 'active-nav' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <span className="header-call">+44 20 5555 0194</span>
          <Link to="/contact" className="primary-btn">
            Book a consult
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
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
            <NavLink to="/about" className="footer-link">About</NavLink>
            <NavLink to="/portfolio" className="footer-link">Portfolio</NavLink>
            <NavLink to="/services" className="footer-link">Services</NavLink>
            <NavLink to="/journal" className="footer-link">Journal</NavLink>
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/journal/:slug" element={<BlogPostDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
