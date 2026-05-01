import architectureDiagram from "../assets/architecture-diagram.png";

const researchGaps = [
  {
    title: "No unified platform",
    description:
      "Current research addresses forecasting, analytics, logistics, and negotiation as separate solutions rather than as one end-to-end B2B trade intelligence platform.",
  },
  {
    title: "Trust and privacy limitations",
    description:
      "Existing systems rarely combine calibrated prediction intervals, explainable outputs, secure authentication, and privacy-preserving collaboration across organisations.",
  },
  {
    title: "Weak operational automation",
    description:
      "Order confirmation, delivery coordination, and procurement negotiation remain manual, delayed, and difficult to scale in Sri Lankan FMCG environments.",
  },
];

const objectives = [
  {
    title: "Replace manual sales functions",
    description:
      "Automate the key functions traditionally carried out by field sales representatives across forecasting, BI, negotiation, and logistics.",
  },
  {
    title: "Integrate four AI components",
    description:
      "Connect forecasting, federated analytics, blockchain logistics, and autonomous negotiation through shared APIs and event-driven workflows.",
  },
  {
    title: "Validate on Sri Lankan data",
    description:
      "Evaluate the full system using real local FMCG datasets, supplier behaviour, and market conditions relevant to deployment.",
  },
  {
    title: "Deliver trustworthy performance",
    description:
      "Ensure the platform is explainable, privacy-aware, auditable, and commercially valuable through measurable performance improvements.",
  },
];

const methodologyComponents = [
  "Agentic demand forecasting with calibrated prediction intervals and WhatsApp order confirmation",
  "Federated business intelligence with differential privacy and zero-knowledge authentication",
  "Blockchain-based logistics with route optimisation and smart contract payment verification",
  "Autonomous procurement negotiation using reinforcement learning, fairness, and trust management",
];

const technologies = [
  {
    name: "LangGraph",
    image: "/tech/langgraph.svg",
  },
  {
    name: "LightGBM",
    image: "/tech/lightgbm.svg",
  },
  {
    name: "SHAP",
    image: "/tech/shap.svg",
  },
  {
    name: "MAPIE",
    image: "/tech/mapie.svg",
  },
  {
    name: "LangChain-OpenAI",
    image: "/tech/langchain-openai.svg",
  },
  {
    name: "WhatsApp Business API",
    image: "https://cdn.simpleicons.org/whatsapp/25D366",
  },
  {
    name: "Facebook Prophet",
    image: "/tech/prophet.svg",
  },
  {
    name: "statsmodels",
    image: "/tech/statsmodels.svg",
  },
  {
    name: "MLxtend",
    image: "/tech/mlxtend.svg",
  },
  {
    name: "Apache Parquet",
    image: "/tech/parquet.svg",
  },
  {
    name: "FastAPI",
    image: "https://cdn.simpleicons.org/fastapi/009688",
  },
  {
    name: "MongoDB Atlas",
    image: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "PyTorch",
    image: "https://cdn.simpleicons.org/pytorch/EE4C2C",
  },
  {
    name: "Gymnasium",
    image: "/tech/gymnasium.svg",
  },
  {
    name: "Flask",
    image: "https://cdn.simpleicons.org/flask/ffffff",
  },
  {
    name: "PostgreSQL",
    image: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    name: "Ethereum / Hyperledger",
    image: "/tech/hyperledger.svg",
  },
  {
    name: "React + Vite",
    image: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Pandas / NumPy",
    image: "https://cdn.simpleicons.org/pandas/150458",
  },
  {
    name: "pytest + pytest-asyncio",
    image: "https://cdn.simpleicons.org/pytest/0A9EDC",
  },
];

export default function ResearchDetails() {
  return (
    <section id="research" className="content-section research-section">
      <div className="section-shell">
        <div id="research-gap" className="scope-section">
          <div className="section-intro section-intro-centered">
            <h2>Research Gap</h2>
            <p>
              Despite major advances in AI, business intelligence, and supply
              chain automation, current systems still do not provide a unified
              approach for replacing the full field-sales workflow in Sri Lankan
              FMCG operations.
            </p>
          </div>

          <div className="reference-block info-card">
            <h3>Key gaps in current approaches</h3>
            <ol>
              <li>Existing systems treat forecasting, analytics, logistics, and procurement as separate applications instead of one connected workflow.</li>
              <li>Most platforms do not combine explainability, calibrated uncertainty, privacy-preserving collaboration, and automation in a single solution.</li>
              <li>Cross-organisational intelligence sharing is limited because raw transactional data is commercially sensitive and difficult to protect.</li>
              <li>Operational steps such as order confirmation, route planning, and procurement negotiation still depend heavily on manual coordination.</li>
            </ol>
          </div>

          <div className="research-grid">
            {researchGaps.map((gap) => (
              <article key={gap.title} className="info-card research-card">
                <h3>{gap.title}</h3>
                <p>{gap.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="research-problem" className="scope-section">
          <div className="section-intro section-intro-centered">
            <h2>Proposed Solution</h2>
            <p>
              This research focuses on the need for a scalable and intelligent
              trade platform that can continuously support demand sensing, data
              sharing, logistics execution, and procurement decisions in a
              trustworthy and commercially practical way.
            </p>
          </div>

          <div className="problem-layout">
            <article className="info-card problem-card">
              <h3>How can Sri Lankan FMCG firms replace fragmented field-sales operations with a continuous intelligence cycle?</h3>
              <p>
                Current trade intelligence systems in Sri Lankan FMCG markets
                are reactive, fragmented, and operationally expensive. Most
                solutions rely on delayed demand signals, isolated datasets, and
                manual coordination between forecasting, order handling,
                procurement, and logistics. As a result, organisations struggle
                to maintain a continuous, calibrated, privacy-preserving, and
                trustworthy demand-to-delivery decision cycle.
              </p>
              <p>
                Current methods are often reactive rather than proactive. They
                provide disconnected support for planning or reporting, but they
                do not maintain an adaptive workflow that can respond to changes
                in market demand, supplier behaviour, or delivery conditions in
                real time.
              </p>
            </article>

            <article className="info-card problem-card">
              <h3>Proposed Solution</h3>
              <p>
                B2B INTELLICA addresses this problem through four integrated
                components operating as one platform: agentic demand
                forecasting, privacy-preserving federated business
                intelligence, blockchain-based logistics, and autonomous
                procurement negotiation. The solution is designed to improve
                decision quality, reduce manual dependency, protect sensitive
                transactional data, and create a more intelligent operational
                workflow across the FMCG trade lifecycle.
              </p>
              <p>
                The platform brings together multiple AI and systems-engineering
                approaches into one architecture so that outputs from one
                component can support the next. This allows the project to move
                beyond isolated automation and toward a full trade-intelligence
                ecosystem.
              </p>
            </article>
          </div>
        </div>

        <div id="research-objectives" className="scope-section">
          <div className="section-intro section-intro-centered">
            <h2>Main objectives of B2B INTELLICA</h2>
            <p>
              The project was designed to build and validate a deployable
              AI-driven trade intelligence platform that supports forecasting,
              analytics, procurement, and logistics through a connected system.
            </p>
          </div>

          <div className="reference-block info-card">
            <h3>Specific objectives</h3>
            <ol>
              <li>Automate the major functions previously handled by field sales representatives in Sri Lankan FMCG workflows.</li>
              <li>Integrate forecasting, federated analytics, logistics management, and negotiation support through shared APIs and event-driven communication.</li>
              <li>Validate the system on real local datasets and operational constraints relevant to deployment in Sri Lankan trade environments.</li>
              <li>Deliver measurable improvements in accuracy, privacy protection, negotiation performance, and logistics efficiency.</li>
            </ol>
          </div>

          <div className="objective-grid">
            {objectives.map((objective, index) => (
              <article key={objective.title} className="info-card objective-card">
                <span>{index + 1}</span>
                <h3>{objective.title}</h3>
                <p>{objective.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="methodology" className="scope-section">
          <div className="section-intro section-intro-centered">
            <p className="eyebrow">Methodology</p>
            <h2>High Level Architecture of the system</h2>
            <p>
              The proposed platform follows a multi-component architecture in
              which each subsystem automates a specific trade function while
              sharing data through common interfaces and event-driven
              integration.
            </p>
          </div>

          <div className="reference-block info-card">
            <h3>Core functional layers</h3>
            <ol>
              <li>Demand forecasting and order confirmation through an agentic prediction pipeline.</li>
              <li>Privacy-preserving business intelligence through federated analytics and secure authentication.</li>
              <li>Procurement decision support through reinforcement learning-based negotiation automation.</li>
              <li>Delivery verification and coordination through blockchain-based logistics workflows.</li>
            </ol>
          </div>

          <div className="methodology-panel info-card">
            <div className="methodology-copy">
              <img
                src={architectureDiagram}
                alt="High level overview of the integrated B2B INTELLICA platform"
                className="architecture-diagram"
                loading="lazy"
                decoding="async"
              />
              <p>Figure 2. High level overview of the integrated B2B INTELLICA platform</p>
            </div>

            <div>
              <h3>The proposed system consists of four integrated components.</h3>
              <ul className="component-list">
                {methodologyComponents.map((component) => (
                  <li key={component}>{component}</li>
                ))}
              </ul>
              <p>
                The system is structured to support continuous trade
                intelligence rather than isolated decision support. Confirmed
                orders can trigger logistics workflows, federated analytics can
                improve forecasting features, and procurement outcomes can be
                recorded as verified agreements. This architecture enables the
                platform to operate as a connected ecosystem rather than four
                disconnected tools.
              </p>
            </div>
          </div>
        </div>

        <div id="technologies" className="scope-section">
          <div className="section-intro section-intro-centered">
            <p className="eyebrow">Tools & Technologies</p>
            <h2>Technologies Used</h2>
          </div>

          <div className="tool-grid">
            {technologies.map((technology) => (
              <div key={technology.name} className="info-card tool-card">
                <div
                  className={`tool-card-visual tool-visual-${technology.theme || "icon"}`}
                  aria-hidden="true"
                >
                  {technology.image ? (
                    <img
                      src={technology.image}
                      alt=""
                      className="tool-card-image"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="tool-card-logo">{technology.logoText}</div>
                  )}
                </div>
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
