import './MockCard.css'

function Frame({ className = '', children }) {
  return (
    <div className={`mock-card ${className}`}>
      <div className="mock-card-bar">
        <span />
        <span />
        <span />
        <div className="mock-card-url" />
      </div>
      <div className="mock-card-body">{children}</div>
    </div>
  )
}

export function AnalyticsMock({ className }) {
  return (
    <Frame className={className}>
      <div className="mock-stat-row">
        <div className="mock-stat">
          <span className="mock-stat-label">Revenue</span>
          <span className="mock-stat-value">$482,910</span>
          <span className="mock-stat-delta up">+18.4%</span>
        </div>
        <div className="mock-stat">
          <span className="mock-stat-label">Ad Spend</span>
          <span className="mock-stat-value">$41,220</span>
          <span className="mock-stat-delta down">-6.2%</span>
        </div>
      </div>
      <div className="mock-bars">
        {[38, 55, 42, 70, 60, 84, 95].map((h, i) => (
          <div key={i} className="mock-bar" style={{ '--h': `${h}%` }} />
        ))}
      </div>
      <svg className="mock-line" viewBox="0 0 200 50" preserveAspectRatio="none">
        <polyline points="0,40 30,32 60,36 90,20 120,24 150,10 180,16 200,4" />
      </svg>
    </Frame>
  )
}

export function AmazonMock({ className }) {
  return (
    <Frame className={className}>
      <div className="mock-amazon-row">
        <div className="mock-thumb" />
        <div className="mock-amazon-info">
          <span className="mock-line-full" />
          <span className="mock-line-half" />
          <div className="mock-stars">★★★★★</div>
        </div>
        <span className="pill-mini">Buy Box</span>
      </div>
      <div className="mock-amazon-row">
        <div className="mock-thumb" />
        <div className="mock-amazon-info">
          <span className="mock-line-full" />
          <span className="mock-line-half" />
          <div className="mock-stars">★★★★☆</div>
        </div>
        <span className="pill-mini alt">Ranked #2</span>
      </div>
      <div className="mock-bars small">
        {[30, 60, 45, 80, 65].map((h, i) => (
          <div key={i} className="mock-bar" style={{ '--h': `${h}%` }} />
        ))}
      </div>
    </Frame>
  )
}

export function WebAppMock({ className }) {
  return (
    <Frame className={className}>
      <div className="mock-app">
        <div className="mock-app-sidebar">
          <span className="mock-dot" />
          <span className="mock-line-tiny" />
          <span className="mock-line-tiny" />
          <span className="mock-line-tiny" />
        </div>
        <div className="mock-app-content">
          <span className="mock-line-half" />
          <div className="mock-app-grid">
            <div className="mock-app-tile" />
            <div className="mock-app-tile" />
            <div className="mock-app-tile" />
            <div className="mock-app-tile" />
          </div>
        </div>
      </div>
    </Frame>
  )
}

export function WebsiteMock({ className }) {
  return (
    <Frame className={className}>
      <div className="mock-website-hero" />
      <span className="mock-line-half" />
      <span className="mock-line-full" />
      <div className="mock-website-btn" />
    </Frame>
  )
}

export default Frame
