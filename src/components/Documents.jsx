import { useEffect } from "react";

const documentGroups = [
  {
    id: "docs-proposal",
    title: "Documents",
    intro: "Project submissions and written material are listed below.",
    rows: [
      {
        title: "Topic Assessment",
        submitted: "April 2026",
        type: "Group",
        href: "/docs/topic-assessment-form.pdf",
      },
      { title: "Project Proposal", submitted: "Upload in progress", type: "Individual" },
      { title: "Status Document I", submitted: "Upload in progress", type: "Individual" },
      { title: "Status Document II", submitted: "Upload in progress", type: "Individual" },
      { title: "Research Paper", submitted: "Upload in progress", type: "Group" },
      {
        title: "Final Report",
        submitted: "April 2026",
        downloads: [
          { type: "Group", href: "/docs/final-group-report-2026.pdf" },
        ],
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
  useEffect(() => {
    const hideInjectedFillButtons = () => {
      const hideElement = (element) => {
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("opacity", "0", "important");
        element.style.setProperty("pointer-events", "none", "important");
      };

      const scanRoot = (root) => {
        root.querySelectorAll("*").forEach((element) => {
          const text = element.textContent?.trim() ?? "";
          const label =
            element.getAttribute("aria-label") ??
            element.getAttribute("title") ??
            "";
          const src = element.getAttribute("src") ?? "";

          if (
            element.tagName === "IFRAME" &&
            (src.includes("extension") || label.includes("Fill"))
          ) {
            hideElement(element);
            return;
          }

          if (
            (text === "Fill" || label === "Fill" || text.includes("Fill")) &&
            text.length <= 24
          ) {
            hideElement(element);
          }

          if (element.shadowRoot) {
            scanRoot(element.shadowRoot);
          }
        });
      };

      scanRoot(document.body);
    };

    const interval = window.setInterval(hideInjectedFillButtons, 300);

    hideInjectedFillButtons();

    const observer = new MutationObserver(hideInjectedFillButtons);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      window.clearInterval(interval);
      observer.disconnect();
    };
  }, []);

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
                {group.rows.map((row) => {
                  const downloads = row.downloads ?? [
                    { type: row.type, href: row.href },
                  ];

                  return (
                    <article key={row.title} className="download-row">
                      <div className="download-card-header">
                        <h4>{row.title}</h4>
                        <p>Submitted on {row.submitted}</p>
                      </div>

                      <div className="download-actions">
                        {downloads.map((item) => (
                          item.href ? (
                            <a
                              key={item.type}
                              href={item.href}
                              className="download-action-row"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>{item.type}</span>
                              <strong>Download</strong>
                            </a>
                          ) : (
                            <div key={item.type} className="download-action-row">
                              <span>{item.type}</span>
                              <strong>Coming soon</strong>
                            </div>
                          )
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
