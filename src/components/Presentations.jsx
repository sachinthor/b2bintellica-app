import heroImage from "../assets/hero.png";

const presentations = [
  {
    title: "Proposal Presentation",
    date: "September 2025",
    type: "Group",
    status: "Available",
    href: "/docs/project-proposal.pptx",
  },
  {
    title: "Progress Presentation 1 (PP1)",
    date: "January 2026",
    type: "Group",
    status: "Available",
    href: "/docs/progress-presentation-1.pptx",
  },
  {
    title: "Progress Presentation 2 (PP2)",
    date: "March 2026",
    type: "Group",
    status: "Available",
    href: "/docs/progress-presentation-2.pptx",
  },
  {
    title: "Final Presentation",
    date: "May 2026",
    type: "Group",
    status: "Available",
    href: "/docs/final-presentation-2026.pptx",
  },
];

export default function Presentations() {
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

  return (
    <section id="presentations" className="content-section presentations-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">Presentations</p>
          <h2>Project review decks</h2>
          <p>
            Slides for proposal, progress, and final reviews will appear here as
            presentation assets are uploaded.
          </p>
        </div>

        <div className="presentation-grid">
          {presentations.map((item) => (
            <article key={item.title} className="presentation-card">
              <div className="presentation-media">
                <img
                  src={heroImage}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="presentation-copy">
                <h3>{item.title}</h3>
                <p className="presentation-meta">
                  <span>{item.date}</span>
                  <span aria-hidden="true">|</span>
                  <span>{item.type}</span>
                </p>
                <span className="presentation-status">{item.status}</span>
                {item.href && (
                  <a
                    href={assetPath(item.href)}
                    className="presentation-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open presentation
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
