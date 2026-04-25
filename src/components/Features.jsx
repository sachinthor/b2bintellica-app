import researchDomainImage from "../assets/research-domain-overview.png";

const literatureThemes = [
  "Agentic demand forecasting with explainability, uncertainty calibration, and order automation.",
  "Privacy-preserving analytics using federated architectures, differential privacy, and zero-knowledge authentication.",
  "Blockchain-supported logistics workflows for traceability, payment verification, and route efficiency.",
  "Autonomous negotiation systems using reinforcement learning, fairness constraints, and trust-aware decision-making.",
];

export default function Features() {
  return (
    <section id="domain" className="content-section domain-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <h2>Literature Survey</h2>
        </div>

        <div className="scope-article info-card">
          <div className="scope-media">
            <img
              src={researchDomainImage}
              alt="B2B INTELLICA research domain overview"
              className="research-domain-image"
              loading="lazy"
              decoding="async"
            />
            <p>Figure 1. Overview of the research areas covered by the proposed platform</p>
          </div>

          <div className="scope-copy">
            <h3>Background of the study</h3>
            <p>
              Sri Lanka&apos;s FMCG trade sector still depends heavily on field
              sales representatives for order collection, demand estimation,
              business intelligence, logistics coordination, and procurement
              communication. This model is expensive, difficult to scale, and
              highly dependent on delayed human decision cycles. Recent
              literature shows strong progress in artificial intelligence,
              machine learning, privacy-preserving analytics, and intelligent
              automation, but these capabilities are usually deployed as
              isolated solutions rather than as one complete B2B trade system.
            </p>
            <p>
              This research explores a unified AI-driven platform that combines
              agentic demand forecasting, privacy-preserving federated
              analytics, autonomous procurement negotiation, and blockchain-
              based logistics for Sri Lankan FMCG markets. By integrating these
              domains, B2B INTELLICA addresses the gap between academic advances
              and the practical need for a trustworthy, connected, and
              commercially relevant trade-intelligence workflow.
            </p>
          </div>
        </div>

        <div className="reference-block info-card">
          <h3>Key literature themes</h3>
          <ol>
            {literatureThemes.map((theme) => (
              <li key={theme}>{theme}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
