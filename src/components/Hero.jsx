import heroImage from "../assets/b2b-intellica-home.png";

const heroMetrics = [
  { value: "18.0%", label: "Forecast MAPE", tone: "cyan" },
  { value: "92%", label: "Federated accuracy", tone: "green" },
  { value: "23%", label: "Route distance cut", tone: "orange" },
];

const systemSignals = [
  "Demand forecast calibrated",
  "Privacy layer active",
  "Logistics chain verified",
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Federated AI + FMCG Operations</p>
          <h1>B2B INTELLICA</h1>
          <h2 className="hero-subtitle">
            AI-Driven Trade Intelligence Platform for Sri Lankan FMCG Markets
          </h2>
          <p className="hero-text">
            B2B INTELLICA is a unified research platform designed to reduce the
            dependency on field sales representatives by combining agentic
            demand forecasting, privacy-preserving federated analytics,
            autonomous procurement negotiation, and blockchain-based logistics
            coordination into one connected workflow.
          </p>

          <div className="hero-actions">
            <a href="#domain" className="button button-primary">
              Explore Research
            </a>
            <a href="#docs" className="button button-secondary">
              View Documents
            </a>
          </div>

          <div className="hero-metrics" aria-label="Project performance highlights">
            {heroMetrics.map((metric) => (
              <div className={`hero-metric hero-metric-${metric.tone}`} key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-figure">
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-purple" />
          <div className="hero-console-header" aria-hidden="true">
            <span />
            <strong>TRADE INTELLIGENCE OS</strong>
            <em>LIVE</em>
          </div>
          <img
            src={heroImage}
            alt="B2B INTELLICA platform dashboard preview"
            className="hero-platform-image"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-status-card" aria-label="System status">
            <p>System Signals</p>
            {systemSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
          <div className="hero-proof-card" aria-label="Research validation status">
            <strong>4</strong>
            <span>Integrated research components</span>
          </div>
        </div>
      </div>
    </section>
  );
}
