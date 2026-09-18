import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { ArrowRightIcon } from '../components/icons.jsx'
import { projects } from '../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Case Studies</span>
          <h1>Our Projects</h1>
          <p>Real results for real brands across ecommerce and tech.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="project-grid projects-page-grid">
            {projects.map((project, i) => (
              <Reveal as="div" key={project.slug} delay={(i % 3) * 80} className="card project-card">
                <div className="project-thumb" aria-hidden="true">
                  <span>{project.metric}</span>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill">{tag}</span>
                    ))}
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-industry">{project.industry}</p>
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

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Want results like these for your brand?</h2>
          <Link to="/contact" className="btn btn-secondary">
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  )
}

export default Projects
