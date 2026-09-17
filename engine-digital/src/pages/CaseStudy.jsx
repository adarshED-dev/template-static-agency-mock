import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { AnalyticsMock } from '../components/MockCard.jsx'
import { CheckIcon } from '../components/icons.jsx'
import { getProjectBySlug } from '../data/projects.js'
import './CaseStudy.css'

function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <header className="page-header case-header">
        <div className="container">
          <span className="eyebrow">{project.industry}</span>
          <h1>{project.name}</h1>
          <p>{project.result}</p>
        </div>
      </header>

      <section className="section">
        <div className="container case-grid">
          <Reveal as="div" className="case-copy">
            <div className="case-block">
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </div>
            <div className="case-block">
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </div>
            <div className="case-block">
              <h2>Results</h2>
              <ul className="check-list">
                {project.results.map((result) => (
                  <li key={result}>
                    <CheckIcon size={18} />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.testimonial && (
              <blockquote className="case-quote">
                <p>&ldquo;{project.testimonial.quote}&rdquo;</p>
                <cite>{project.testimonial.author}</cite>
              </blockquote>
            )}
          </Reveal>

          <Reveal as="div" delay={100} className="case-visual">
            <AnalyticsMock />
            <div className="case-metric-card">
              <span className="about-visual-num">{project.metric}</span>
              <span>{project.metricLabel}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Want similar results? Let's talk.</h2>
          <Link to="/contact" className="btn btn-secondary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}

export default CaseStudy
