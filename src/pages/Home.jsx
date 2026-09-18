import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import LogoRow from '../components/LogoRow.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import { AnalyticsMock } from '../components/MockCard.jsx'
import { projects } from '../data/projects.js'
import {
  CartIcon,
  CodeIcon,
  LayersIcon,
  ChartIcon,
  ShieldIcon,
  ArrowRightIcon,
  TargetIcon,
  GaugeIcon,
} from '../components/icons.jsx'
import './Home.css'

const Hero3D = lazy(() => import('../components/Hero3D.jsx'))

const services = [
  {
    icon: CartIcon,
    title: 'Amazon Account Management',
    text: 'End-to-end management to grow your Amazon sales, optimize ads, and protect your brand.',
  },
  {
    icon: CodeIcon,
    title: 'Website Development',
    text: 'Custom, high-performance websites that convert visitors into customers.',
  },
  {
    icon: LayersIcon,
    title: 'Web App Development',
    text: 'Scalable web applications tailored to your business workflows.',
  },
  {
    icon: ChartIcon,
    title: 'Ecommerce Strategy & Support',
    text: 'Data-driven strategies to scale your online revenue.',
  },
]

const reasons = [
  'Amazon and ecommerce specialists, not generalists',
  'Data-driven strategies and transparent reporting',
  'Premium design and engineering standards',
  'Dedicated account managers and fast communication',
]

const stats = [
  { value: '$50Mn+', label: 'Revenue managed' },
  { value: '300+', label: 'Amazon accounts optimized' },
  { value: '120+', label: 'Websites & web apps delivered' },
  { value: '38%', label: 'Average sales growth' },
]

function Home() {
  const heroVisualRef = useRef(null)
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 981px)')
    setShow3D(query.matches)
    const handler = (e) => setShow3D(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  const handleHeroMouseMove = (e) => {
    const node = heroVisualRef.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    node.style.setProperty('--tiltX', `${y * -6}deg`)
    node.style.setProperty('--tiltY', `${x * 8}deg`)
    node.style.setProperty('--shiftX', `${x * 14}px`)
    node.style.setProperty('--shiftY', `${y * 14}px`)
  }

  const handleHeroMouseLeave = () => {
    const node = heroVisualRef.current
    if (!node) return
    node.style.setProperty('--tiltX', '0deg')
    node.style.setProperty('--tiltY', '0deg')
    node.style.setProperty('--shiftX', '0px')
    node.style.setProperty('--shiftY', '0px')
  }

  return (
    <>
      {/* Hero */}
      <section className="hero" onMouseMove={handleHeroMouseMove} onMouseLeave={handleHeroMouseLeave}>
        <div className="hero-blobs" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
        </div>
        <div className="hero-grid-pattern" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow on-dark reveal-in">Amazon Growth · Web Development</span>
            <h1 className="reveal-in" style={{ animationDelay: '80ms' }}>
              We Build and Scale <span className="gradient-text">Profitable Ecommerce Engines</span>
            </h1>
            <p className="reveal-in" style={{ animationDelay: '160ms' }}>
              Agency Mock helps brands win on Amazon and online with expert account
              management and custom web solutions.
            </p>
            <div className="hero-actions reveal-in" style={{ animationDelay: '240ms' }}>
              <Link to="/contact" className="btn btn-primary btn-shine">
                Book a Free Strategy Call <ArrowRightIcon size={18} />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                See Our Work
              </Link>
            </div>
            <div className="hero-trust reveal-in" style={{ animationDelay: '320ms' }}>
              <span>Trusted alongside</span>
              <LogoRow className="on-dark" marquee />
            </div>
          </div>

          <div className="hero-visual-wrap reveal-in" style={{ animationDelay: '160ms' }}>
            {show3D && (
              <Suspense fallback={null}>
                <Hero3D className="hero-3d" />
              </Suspense>
            )}
            <div className="hero-visual" ref={heroVisualRef}>
              <AnalyticsMock />
              <div className="floating-chip chip-a">
                <span className="chip-dot" />
                Buy Box won +4.2%
              </div>
              <div className="floating-chip chip-b">
                <span className="chip-dot alt" />
                Live sync active
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* Services teaser */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head center">
            <span className="eyebrow">What We Do</span>
            <h2>Everything your ecommerce engine needs</h2>
            <p>Three specialized capabilities, one accountable team.</p>
          </Reveal>

          <div className="service-grid">
            {services.map((service, i) => (
              <Reveal as="div" key={service.title} delay={i * 90} className="card service-card">
                <span className="service-card-glow" aria-hidden="true" />
                <div className="service-icon">
                  <service.icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to="/services" className="service-link">
                  Learn more <ArrowRightIcon size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section-tint">
        <div className="container why-grid">
          <Reveal as="div">
            <span className="eyebrow">Why Agency Mock</span>
            <h2>Why Brands Trust Agency Mock</h2>
            <ul className="reason-list">
              {reasons.map((reason, i) => (
                <Reveal as="li" key={reason} delay={i * 90}>
                  <ShieldIcon size={20} />
                  <span>{reason}</span>
                </Reveal>
              ))}
            </ul>
            <Link to="/about" className="btn btn-secondary mt-lg">
              More about us
            </Link>
          </Reveal>

          <Reveal as="div" delay={120} className="why-visual">
            <div className="why-card floaty">
              <TargetIcon size={26} />
              <h4>Focused strategy</h4>
              <p>Every account gets a roadmap tied to revenue, not vanity metrics.</p>
            </div>
            <div className="why-card offset floaty floaty-alt">
              <GaugeIcon size={26} />
              <h4>Fast execution</h4>
              <p>Optimizations shipped weekly, backed by transparent reporting.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="hero-grid-pattern subtle" aria-hidden="true" />
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 90} className="stat-item">
              <span className="stat-value">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head center">
            <span className="eyebrow">Case Studies</span>
            <h2>Some of Our Work</h2>
            <p>Real accounts, real revenue impact.</p>
          </Reveal>

          <div className="project-grid">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal as="div" key={project.slug} delay={i * 90} className="card project-card">
                <div className="project-thumb" aria-hidden="true">
                  <span>{project.metric}</span>
                </div>
                <div className="project-body">
                  <span className="pill">{project.industry}</span>
                  <h3>{project.name}</h3>
                  <p className="project-result">{project.result}</p>
                  <Link to={`/projects/${project.slug}`} className="service-link">
                    View case study <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container cta-inner">
          <Reveal as="div">
            <h2>Ready to Scale Your Ecommerce Engine?</h2>
            <p>Book a free 30-minute strategy session with our experts.</p>
            <Link to="/contact" className="btn btn-secondary btn-shine">
              Book Your Free Call
            </Link>
            <span className="cta-note">No obligation. Confidential discussion.</span>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Home
