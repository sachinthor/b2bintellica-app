import researchDomainImage from "../assets/research-domain-overview.png";

const literatureThemes = [
  {
    text: "Agentic demand forecasting with explainability, uncertainty calibration, and order automation.",
    citations: "[7], [8], [13], [25], [41], [42], [43], [48]",
  },
  {
    text: "Privacy-preserving analytics using federated architectures, differential privacy, and zero-knowledge authentication.",
    citations: "[3], [4], [5], [6], [18], [19], [22], [50]",
  },
  {
    text: "Blockchain-supported logistics workflows for traceability, payment verification, and route efficiency.",
    citations: "[35], [36], [40]",
  },
  {
    text: "Autonomous negotiation systems using reinforcement learning, fairness constraints, and trust-aware decision-making.",
    citations: "[28], [29], [30], [31], [32], [33], [34], [44], [45]",
  },
];

const literatureReferences = [
  {
    id: "[3]",
    text: 'H. B. McMahan et al., "Communication-efficient learning of deep networks from decentralized data," in Proc. ICML, 2017, pp. 1273-1282.',
  },
  {
    id: "[4]",
    text: 'C. Dwork, "Differential privacy," in Proc. ICALP, 2006, pp. 1-12.',
  },
  {
    id: "[6]",
    text: 'S. Goldwasser, S. Micali, and C. Rackoff, "The knowledge complexity of interactive proof systems," SIAM J. Comput., vol. 18, no. 1, pp. 186-208, 1989.',
  },
  {
    id: "[7]",
    text: 'G. Ke et al., "LightGBM: A highly efficient gradient boosting decision tree," in Proc. NeurIPS, 2017.',
  },
  {
    id: "[8]",
    text: 'S. M. Lundberg and S.-I. Lee, "A unified approach to interpreting model predictions," in Proc. NeurIPS, 2017, pp. 4765-4774.',
  },
  {
    id: "[13]",
    text: 'K. Stankeviciute, A. M. Alaa, and M. van der Schaar, "Conformal time-series forecasting," in Proc. NeurIPS, 2021.',
  },
  {
    id: "[18]",
    text: 'K. Kairouz et al., "Advances and open problems in federated learning," Found. Trends Mach. Learn., vol. 14, no. 1-2, pp. 1-210, 2021.',
  },
  {
    id: "[19]",
    text: 'P. Kairouz et al., "Federated analytics: Collaborative data science without data collection," arXiv:2012.10069, 2020.',
  },
  {
    id: "[22]",
    text: 'Y. Chen, W. Gan, Y. Wu, and P. S. Yu, "Privacy-preserving federated mining of frequent itemsets," Inf. Sci., vol. 625, pp. 504-520, 2023.',
  },
  {
    id: "[25]",
    text: 'A. N. Angelopoulos and S. Bates, "A gentle introduction to conformal prediction and distribution-free uncertainty quantification," arXiv, 2022.',
  },
  {
    id: "[28]",
    text: 'S. Zhang, J. Yang, J. Li, and L. Wang, "Multi-agent RL with attention mechanisms for dynamic coalition formation," IEEE Trans. Artif. Intell., vol. 7, no. 2, pp. 145-158, 2026.',
  },
  {
    id: "[29]",
    text: 'Y. Chen, H. Liu, and X. Wang, "Trust-aware MARL for B2B procurement automation," Expert Syst. Appl., vol. 238, art. 121845, 2025.',
  },
  {
    id: "[30]",
    text: 'M. Rodriguez, P. Fernandez, and J. Silva, "Explainable deep RL for automated negotiation with fairness constraints," Artif. Intell., vol. 325, art. 104015, 2024.',
  },
  {
    id: "[35]",
    text: 'J. Nowicka, "Blockchain and IoT in the logistic of work and education," vol. 18, no. 1, 2025.',
  },
  {
    id: "[36]",
    text: 'V. Aleksieva, H. Valchanov, V. Maleshkov, and A. Haka, "Blockchain solutions for logistic management," 2023.',
  },
  {
    id: "[40]",
    text: 'Parliament of Sri Lanka, "Personal Data Protection Act No. 9 of 2022," Gazette of the Democratic Socialist Republic of Sri Lanka, Mar. 2022.',
  },
  {
    id: "[41]",
    text: 'B. Lim et al., "Temporal fusion transformers for interpretable multi-horizon time series forecasting," Int. J. Forecasting, vol. 37, no. 4, pp. 1748-1764, 2021.',
  },
  {
    id: "[42]",
    text: 'D. Salinas et al., "DeepAR: Probabilistic forecasting with autoregressive recurrent networks," Int. J. Forecasting, vol. 36, no. 3, pp. 1181-1191, 2020.',
  },
  {
    id: "[43]",
    text: 'M. Jin et al., "Time-LLM: Time series forecasting by reprogramming LLMs," in Proc. ICLR, 2024.',
  },
  {
    id: "[48]",
    text: "V. Vovk, A. Gammerman, and G. Shafer, Algorithmic Learning in a Random World. Springer, 2005.",
  },
];

export default function Features() {
  return (
    <section id="domain" className="content-section domain-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <h2>Literature Survey</h2>
          <p>
            The survey below includes the main research areas and reference
            sources taken from the final group report.
          </p>
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
              automation [3], [4], [7], [18], [19], [25], but these
              capabilities are usually deployed as isolated solutions rather
              than as one complete B2B trade system.
            </p>
            <p>
              This research explores a unified AI-driven platform that combines
              agentic demand forecasting, privacy-preserving federated
              analytics, autonomous procurement negotiation, and blockchain-
              based logistics for Sri Lankan FMCG markets [28], [29], [30],
              [35], [36], [40]. By integrating these domains, B2B INTELLICA
              addresses the gap between academic advances and the practical need
              for a trustworthy, connected, and commercially relevant
              trade-intelligence workflow.
            </p>
          </div>
        </div>

        <div className="reference-block info-card">
          <h3>Key literature themes with citations</h3>
          <ol>
            {literatureThemes.map((theme) => (
              <li key={theme.text}>
                {theme.text} <span className="citation-tag">{theme.citations}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="reference-block info-card literature-reference-block">
          <h3>Literature survey references</h3>
          <ol className="literature-reference-list">
            {literatureReferences.map((reference) => (
              <li key={reference.id}>
                <span>{reference.id}</span>
                <p>{reference.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
