import { useState } from 'react'
import { MailIcon, PhoneIcon, PinIcon, MapIcon } from '../components/icons.jsx'
import Reveal from '../components/Reveal.jsx'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: 'Amazon Management',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Get in Touch</span>
          <h1>Get in Touch</h1>
          <p>Tell us about your project. We'll respond within 24 hours.</p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-grid">
          <Reveal as="div" className="card contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <h2>Thanks — message received.</h2>
                <p>A member of our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@brand.com"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Company (optional)
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your brand"
                    />
                  </label>
                  <label>
                    Service interested in
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option>Amazon Management</option>
                      <option>Website Development</option>
                      <option>Web App Development</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your project and goals..."
                  />
                </label>

                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal as="div" delay={100} className="contact-info">
            <div className="contact-info-item">
              <MailIcon size={20} />
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@agencymock.com">hello@agencymock.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <PhoneIcon size={20} />
              <div>
                <h4>Phone / WhatsApp</h4>
                <a href="tel:+10000000000">+1 (000) 000-0000</a>
              </div>
            </div>
            <div className="contact-info-item">
              <PinIcon size={20} />
              <div>
                <h4>Location</h4>
                <p>Remote-first, serving clients globally</p>
              </div>
            </div>

            <div className="contact-map">
              <MapIcon size={32} />
            </div>

            <div className="contact-calendly">
              <h4>Prefer a quick call?</h4>
              <p>Skip the form and grab a slot directly on our calendar.</p>
              <a href="#book" className="btn btn-secondary btn-block">
                Book a Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
