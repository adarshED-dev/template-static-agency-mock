import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo">
            <span className="navbar-logo-mark">A</span>
            Agency Mock
          </Link>
          <p>
            The growth engine behind ambitious ecommerce brands — Amazon account
            management, websites, and web apps.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Amazon Account Management</Link></li>
            <li><Link to="/services">Website Development</Link></li>
            <li><Link to="/services">Web App Development</Link></li>
            <li><Link to="/services">Ecommerce Strategy</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Case Studies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:hello@agencymock.com">hello@agencymock.com</a></li>
            <li>Remote-first, serving clients globally</li>
          </ul>
          <Link to="/contact" className="btn btn-secondary footer-cta">
            Book a Free Call
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Agency Mock. All rights reserved.</p>
        <p>Built for brands that want to scale.</p>
      </div>
    </footer>
  )
}

export default Footer
