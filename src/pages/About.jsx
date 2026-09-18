import Reveal from '../components/Reveal.jsx'
import LogoRow from '../components/LogoRow.jsx'
import { TargetIcon, ShieldIcon, SparkleIcon, HandshakeIcon } from '../components/icons.jsx'
import './About.css'

const values = [
  {
    icon: TargetIcon,
    title: 'Results First',
    text: 'Every engagement is measured against revenue and growth, not vanity metrics.',
  },
  {
    icon: ShieldIcon,
    title: 'Transparency & Trust',
    text: 'Clear reporting and honest communication, every step of the way.',
  },
  {
    icon: SparkleIcon,
    title: 'Premium Quality',
    text: 'We hold our design and engineering work to a high, consistent standard.',
  },
  {
    icon: HandshakeIcon,
    title: 'Long-Term Partnerships',
    text: 'We aim to be the growth partner brands keep coming back to.',
  },
]

const team = [
  { initials: 'AK', name: 'Aditya Kapoor', role: 'Amazon Ads Specialist' },
  { initials: 'MS', name: 'Maya Singh', role: 'Senior Full-Stack Developer' },
  { initials: 'RD', name: 'Rohan Desai', role: 'Ecommerce Strategy Lead' },
  { initials: 'PJ', name: 'Priya Jain', role: 'UI/UX Designer' },
]

const techLogos = ['amazon', 'shopify', 'aws', 'react', 'node.js', 'woocommerce']

function About() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">About Agency Mock</span>
          <h1>About Agency Mock</h1>
          <p>
            We're a premium IT and ecommerce partner focused on one thing: growing
            your digital revenue.
          </p>
        </div>
      </header>

      {/* Story & mission */}
      <section className="section">
        <div className="container about-grid">
          <Reveal as="div">
            <span className="eyebrow">Our Story</span>
            <h2>Built for ambitious ecommerce brands</h2>
            <p className="about-text">
              Agency Mock started with a simple observation: brands selling on
              Amazon and online were being underserved by generalist agencies that
              didn't understand marketplace mechanics or modern web engineering.
              We brought both disciplines under one roof — Amazon specialists and
              full-stack engineers working from the same playbook.
            </p>
            <p className="about-text">
              Today we manage Amazon accounts, build websites, and develop custom
              web applications for ecommerce brands that expect a premium standard
              of execution.
            </p>
            <div className="mission-box">
              <h4>Our Mission</h4>
              <p>To be the growth engine behind ambitious ecommerce brands.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={100} className="about-visual">
            <div className="about-visual-block">
              <span className="about-visual-num">7+</span>
              <span>Years combined marketplace & engineering experience</span>
            </div>
            <div className="about-visual-block alt">
              <span className="about-visual-num">2</span>
              <span>Disciplines, one accountable team</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section section-tint">
        <div className="container">
          <Reveal as="div" className="section-head center">
            <span className="eyebrow">What We Stand For</span>
            <h2>Our Values</h2>
          </Reveal>

          <div className="values-grid">
            {values.map((value, i) => (
              <Reveal as="div" key={value.title} delay={i * 80} className="card value-card">
                <div className="service-icon">
                  <value.icon size={22} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head center">
            <span className="eyebrow">Our Team</span>
            <h2>The People Behind the Engine</h2>
          </Reveal>

          <div className="team-grid">
            {team.map((member, i) => (
              <Reveal as="div" key={member.name} delay={i * 80} className="team-card">
                <div className="team-avatar">{member.initials}</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & platforms */}
      <section className="section section-alt">
        <div className="container text-center">
          <Reveal as="div" className="section-head center">
            <span className="eyebrow">Our Stack</span>
            <h2>Technologies and Platforms We Master</h2>
          </Reveal>
          <Reveal as="div">
            <LogoRow logos={techLogos} className="center" />
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default About
