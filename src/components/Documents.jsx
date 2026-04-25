const documentGroups = [
  {
    id: "docs-proposal",
    title: "Documents",
    intro: "Project submissions and written material are listed below.",
    rows: [
      { title: "Topic Assessment", submitted: "Upload in progress", type: "Group" },
      { title: "Project Charter", submitted: "Upload in progress", type: "Group" },
      { title: "Project Proposal", submitted: "Upload in progress", type: "Individual" },
      { title: "Status Document I", submitted: "Upload in progress", type: "Individual" },
      { title: "Status Document II", submitted: "Upload in progress", type: "Individual" },
      { title: "Research Paper", submitted: "Upload in progress", type: "Group" },
      {
        title: "Final Report",
        submitted: "Available now",
        type: "Group",
        href: "/docs/Website.pdf",
      },
    ],
  },
  {
    id: "docs-progress",
    title: "Presentations",
    intro: "Slides and review decks prepared for milestone evaluations.",
    rows: [
      {
        title: "Project Proposal",
        submitted: "September 2025",
        type: "Group",
        href: "/docs/project-proposal.pptx",
      },
      {
        title: "Progress Presentation I",
        submitted: "January 2026",
        type: "Group",
        href: "/docs/progress-presentation-1.pptx",
      },
      {
        title: "Progress Presentation II",
        submitted: "March 2026",
        type: "Group",
        href: "/docs/progress-presentation-2.pptx",
      },
      { title: "Final Presentation", submitted: "Upload in progress", type: "Group" },
    ],
  },
  {
    id: "docs-research",
    title: "Publications",
    intro: "Published papers and research publication details.",
    rows: [
      { title: "Research Publication", submitted: "Upload in progress", type: "Group" },
    ],
  },
];

export default function Documents() {
  return (
    <section id="docs" className="content-section docs-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">Downloads</p>
          <h2>Project Documents</h2>
          <p>
            Access the main written submissions, progress material, and final
            report resources prepared for the B2B INTELLICA research project.
          </p>
        </div>

        <div className="download-sections">
          {documentGroups.map((group) => (
            <section key={group.id} id={group.id} className="download-block info-card">
              <div className="download-heading">
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
              </div>

              <div className="download-list">
                {group.rows.map((row) => (
                  <article key={row.title} className="download-row">
                    <div>
                      <h4>{row.title}</h4>
                      <p>Submitted on {row.submitted}</p>
                    </div>
                    <span>{row.type}</span>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="download-button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open file
                      </a>
                    ) : (
                      <span className="download-button download-button-muted">
                        Coming soon
                      </span>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
