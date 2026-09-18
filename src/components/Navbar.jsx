import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './icons.jsx'
import './Navbar.css'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="navbar-logo-mark">A</span>
          Agency Mock
        </NavLink>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn btn-primary navbar-cta">
          Get a Free Audit
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`navbar-mobile ${open ? 'is-open' : ''}`}>
        <nav className="navbar-mobile-links" aria-label="Mobile">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
          Get a Free Audit
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
