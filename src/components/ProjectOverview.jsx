import platformDemoImage from "../assets/platform-demo-workflow.png";

const researchQuestions = [
  "How can Sri Lankan FMCG manufacturers replace manual field sales processes with a continuous AI-driven intelligence cycle?",
  "How can forecasting, privacy-preserving analytics, procurement negotiation, and logistics coordination be integrated into one platform?",
  "How can the platform remain trustworthy through calibrated predictions, privacy protection, explainability, and tamper-proof execution?",
];

const resultHighlights = [
  {
    title: "Forecasting performance",
    description:
      "The demand forecasting component achieved 18.0% overall MAPE with calibrated conformal intervals and a WhatsApp-based order confirmation loop.",
  },
  {
    title: "Privacy-preserving analytics",
    description:
      "The federated business intelligence component reached 92% analytical accuracy at epsilon 1.0 while keeping raw organisational data local.",
  },
  {
    title: "Logistics efficiency",
    description:
      "The blockchain logistics component improved delivery transparency while route optimisation reduced total delivery distance by 23%.",
  },
  {
    title: "Autonomous negotiation",
    description:
      "The negotiation engine achieved a 68% success rate with average savings of LKR 70,200 per negotiation.",
  },
];

const demoItems = [
  "Agentic demand forecasting and order confirmation workflow",
  "Federated BI dashboards with privacy-preserved insights",
  "Blockchain logistics tracking and autonomous procurement negotiation",
];

const workflowSteps = [
  { step: "01", title: "Sense Demand", detail: "Forecast demand and confirm orders" },
  { step: "02", title: "Protect Data", detail: "Share intelligence without raw data" },
  { step: "03", title: "Negotiate", detail: "Automate supplier decision logic" },
  { step: "04", title: "Verify Delivery", detail: "Track logistics and payments" },
];

export default function ProjectOverview() {
  return (
    <section id="overview" className="content-section overview-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">Project Overview</p>
          <h2>Abstract, context, questions, and key outcomes</h2>
          <p>
            This section summarizes the project at a high level before moving
            into the research domain, methodology, and milestone material.
          </p>
        </div>

        <div className="intelligence-flow" aria-label="B2B INTELLICA workflow">
          {workflowSteps.map((item) => (
            <article key={item.step} className="flow-step">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="overview-grid">
          <article className="info-card overview-card">
            <h3>Project abstract</h3>
            <p>
              B2B INTELLICA is an integrated AI-driven trade intelligence
              platform developed for Sri Lankan FMCG markets. It combines four
              validated components: agentic demand forecasting, privacy-
              preserving federated analytics, blockchain-based logistics, and
              autonomous procurement negotiation. Together they support a
              continuous demand-to-delivery workflow without depending on
              traditional field sales representatives.
            </p>
            <p>
              The platform was designed to move beyond isolated automation by
              connecting forecasting, business intelligence, procurement, and
              logistics into one coordinated architecture. This enables a more
              responsive, measurable, and commercially relevant decision-support
              environment for B2B trade operations.
            </p>
          </article>

          <article className="info-card overview-card">
            <h3>Research context</h3>
            <p>
              Sri Lankan FMCG distribution still depends heavily on human sales
              representatives for order collection, demand estimation,
              procurement coordination, logistics follow-up, and business
              intelligence. This creates delays, high operational cost, and weak
              cross-organisational visibility. The research addresses that gap
              by designing a unified platform that is automated, explainable,
              privacy-aware, and deployable in local business settings.
            </p>
            <p>
              Instead of treating demand sensing, data sharing, negotiation, and
              delivery management as separate business problems, the project
              approaches them as connected layers of the same trade cycle. This
              makes the research more practical for real organisational use and
              more aligned with the operational realities of the FMCG sector.
            </p>
          </article>
        </div>

        <div className="reference-block info-card">
          <h3>Overview of the integrated platform</h3>
          <ol>
            <li>Agentic forecasting supports demand prediction, uncertainty estimation, and order confirmation workflows.</li>
            <li>Federated analytics enables privacy-preserving intelligence sharing without centralising raw transactional data.</li>
            <li>Autonomous negotiation supports procurement efficiency through reinforcement learning-based decision logic.</li>
            <li>Blockchain logistics improves delivery traceability, route coordination, and payment verification.</li>
          </ol>
        </div>

        <div id="research-questions" className="scope-section">
          <div className="section-intro section-intro-centered">
            <h2>Core questions guiding the study</h2>
            <p>
              These questions guided the design of the architecture, the
              component integrations, and the evaluation of practical business
              impact across the final system.
            </p>
          </div>

          <div className="question-list">
            {researchQuestions.map((question, index) => (
              <article key={question} className="info-card question-card">
                <span>{index + 1}</span>
                <p>{question}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="results" className="scope-section">
          <div className="section-intro section-intro-centered">
            <h2>Key project outcomes</h2>
            <p>
              The integrated platform was evaluated using real Sri Lankan FMCG
              datasets and produced measurable gains in forecasting accuracy,
              privacy-preserved analytics, logistics efficiency, and automated
              procurement performance.
            </p>
          </div>

          <div className="reference-block info-card">
            <h3>Evaluation highlights</h3>
            <ol>
              <li>Demand forecasting achieved strong predictive performance with calibrated intervals and explainable decision support.</li>
              <li>Federated analytics preserved local data ownership while maintaining useful collaborative intelligence.</li>
              <li>Blockchain logistics improved delivery transparency and route efficiency in operational workflows.</li>
              <li>Autonomous negotiation showed measurable cost savings and better success rates than baseline approaches.</li>
            </ol>
          </div>

          <div className="overview-grid">
            {resultHighlights.map((item) => (
              <article key={item.title} className="info-card overview-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="demo" className="scope-section">
          <div className="demo-panel info-card">
            <div className="demo-copy">
              <h3>Platform demonstration areas</h3>
              <p>
                The final platform demonstration can highlight how the four
                components operate as one system, from demand sensing and order
                confirmation through procurement, analytics, and logistics
                execution.
              </p>
              <p>
                This section can be strengthened further by attaching real
                screenshots, diagrams, dashboards, and workflow visuals from the
                implemented components so reviewers can directly observe the
                practical behavior of the system.
              </p>
              <ul className="component-list">
                {demoItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <img
              src={platformDemoImage}
              alt="B2B INTELLICA integrated platform demonstration workflow"
              className="demo-workflow-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
