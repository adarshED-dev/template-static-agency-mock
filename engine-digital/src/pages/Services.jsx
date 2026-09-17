import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { AmazonMock, WebsiteMock, WebAppMock, AnalyticsMock } from '../components/MockCard.jsx'
import {
  CheckIcon,
  SearchIcon,
  TargetIcon,
  GaugeIcon,
  RepeatIcon,
} from '../components/icons.jsx'
import './Services.css'

const serviceSections = [
  {
    id: 'amazon-management',
    title: 'Amazon Account Management',
    intro:
      'End-to-end management to grow your Amazon sales, optimize ads, and protect your brand.',
    bullets: [
      'Account setup and optimization',
      'Product listing optimization (SEO, images, copy)',
      'PPC campaign management and optimization',
      'Inventory and pricing strategy',
      'Brand protection and compliance',
      'Regular performance reporting',
    ],
    cta: { label: 'Get an Amazon Account Audit', to: '/contact' },
    Mock: AmazonMock,
  },
  {
    id: 'website-development',
    title: 'Website Development',
    intro: 'We design and build fast, conversion-focused websites.',
    bullets: [
      'Custom UI/UX design',
      'Responsive, mobile-first development',
      'Ecommerce integrations (Shopify, WooCommerce, etc.)',
      'SEO-friendly architecture',
      'Performance optimization and security',
    ],
    cta: { label: 'Discuss Your Website Project', to: '/contact' },
    Mock: WebsiteMock,
  },
  {
    id: 'web-app-development',
    title: 'Web App Development',
    intro: 'Tailored web applications to automate and scale your operations.',
    bullets: [
      'Requirement analysis and solution design',
      'Frontend and backend development',
      'API integrations (ERP, CRM, payment, logistics)',
      'Cloud deployment and scalability',
      'Ongoing maintenance and support',
    ],
    cta: { label: 'Talk to Our Tech Team', to: '/contact' },
    Mock: WebAppMock,
  },
  {
    id: 'ecommerce-strategy',
    title: 'Ecommerce Strategy & Support',
    intro: 'Data-driven strategies and ongoing support to scale your online revenue.',
    bullets: [
      'Cross-channel growth strategy',
      'Analytics, forecasting, and reporting',
      'Marketplace and DTC channel planning',
      'Conversion rate optimization',
      'Ongoing advisory and account support',
    ],
    cta: { label: 'Plan Your Ecommerce Strategy', to: '/contact' },
    Mock: AnalyticsMock,
  },
]

const process = [
  {
    icon: SearchIcon,
    title: 'Discovery & Audit',
    text: 'We audit your accounts, sites, and data to find the biggest growth levers.',
  },
  {
    icon: TargetIcon,
    title: 'Strategy & Roadmap',
    text: 'A prioritized, revenue-focused roadmap tailored to your business.',
  },
  {
    icon: GaugeIcon,
    title: 'Execution & Optimization',
    text: 'Our team ships improvements weekly and iterates based on results.',
  },
  {
    icon: RepeatIcon,
    title: 'Reporting & Growth',
    text: 'Transparent reporting keeps you informed as we scale what works.',
  },
]

function Services() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Our Services</h1>
          <p>
            From Amazon growth to custom web solutions, we build the digital engine
            behind your business.
          </p>
        </div>
      </header>

      {serviceSections.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section service-detail ${i % 2 === 1 ? 'section-alt' : ''}`}
        >
          <div className={`container service-detail-grid ${i % 2 === 1 ? 'reverse' : ''}`}>
            <Reveal as="div">
              <span className="pill">{`0${i + 1}`}</span>
              <h2>{service.title}</h2>
              <p className="service-detail-intro">{service.intro}</p>
              <ul className="check-list">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckIcon size={18} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link to={service.cta.to} className="btn btn-primary mt-lg">
                {service.cta.label}
              </Link>
            </Reveal>

            <Reveal as="div" delay={100} className="service-detail-visual">
              <service.Mock />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head center">
            <span className="eyebrow">Our Process</span>
            <h2>How We Work</h2>
            <p>A clear, repeatable process that keeps growth predictable.</p>
          </Reveal>

          <div className="process-row">
            {process.map((step, i) => (
              <Reveal as="div" key={step.title} delay={i * 100} className="process-step">
                <div className="process-icon">
                  <step.icon size={22} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {i < process.length - 1 && <span className="process-connector" aria-hidden="true" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Not sure which service fits your needs?</h2>
          <Link to="/contact" className="btn btn-secondary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
