const milestones = [
  {
    title: "Project Proposal",
    date: "September 2025",
    description:
      "Initial research proposal submitted with project background, problem statement, objectives, and planned methodology.",
  },
  {
    title: "Progress Presentation 01",
    date: "January 2026",
    description:
      "First progress review covering literature findings, early design decisions, and implementation direction.",
  },
  {
    title: "Progress Presentation 02",
    date: "March 2026",
    description:
      "Second progress review focused on prototype improvement, system progress, and feedback-based refinements.",
  },
  {
    title: "Website Assessment",
    date: "April 2026",
    description:
      "Assessment of the project website, including navigation, content completeness, visual structure, and usability.",
  },
  {
    title: "Logbook",
    date: "April 2026",
    description:
      "Submission of the project logbook documenting weekly progress, work distribution, and supervisor guidance.",
  },
  {
    title: "Final Report",
    date: "April 2026",
    description:
      "Final project report containing the complete research background, design, implementation, results, and conclusion.",
  },
  {
    title: "Final Presentation & Viva",
    date: "May 2026",
    description:
      "Final presentation and viva session to explain, demonstrate, and defend the project outcomes.",
  },
  {
    title: "Research Paper",
    date: "June 2026",
    description:
      "Research paper prepared to summarize the study, proposed solution, findings, and academic contribution.",
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="content-section milestones-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">Milestones</p>
          <h2>Project Timeline</h2>
          <p>
            The milestones show the main academic checkpoints completed
            throughout the final year research project.
          </p>
        </div>

        <div className="timeline">
          {milestones.map((item) => (
            <article key={item.title} className="timeline-item info-card">
              <div className="timeline-marker" aria-hidden="true" />
              <p className="timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
