import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section text-center">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p style={{ marginTop: 16, color: 'var(--color-muted)' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary mt-lg">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
