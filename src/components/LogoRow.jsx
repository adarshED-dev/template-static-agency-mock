import './LogoRow.css'

const defaultLogos = ['amazon', 'shopify', 'aws', 'react', 'stripe', 'meta ads']

function LogoRow({ logos = defaultLogos, className = '', marquee = false }) {
  if (marquee) {
    return (
      <div className={`logo-marquee ${className}`}>
        <div className="logo-marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <span key={`${logo}-${i}`}>{logo}</span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <ul className={`logo-row ${className}`}>
      {logos.map((logo) => (
        <li key={logo}>{logo}</li>
      ))}
    </ul>
  )
}

export default LogoRow
