const team = [
  {
    name: "De Silva K G G C D",
    position: "Group Leader",
    institute: "Sri Lanka Institute of Information Technology (SLIIT).",
    department: "BSc (Hons) in Information Technology",
    image: "/team/charuka.jpeg",
  },
  {
    name: "Madusanka R.R.V",
    institute: "Sri Lanka Institute of Information Technology (SLIIT).",
    department: "BSc (Hons) in Information Technology",
    image: "/team/Rashmika.png",
  },
  {
    name: "Vithana V A S",
    institute: "Sri Lanka Institute of Information Technology (SLIIT).",
    department: "BSc (Hons) in Information Technology",
    image: "/team/Subodhi.png",
  },
  {
    name: "Wanigasinghe C.P",
    institute: "Sri Lanka Institute of Information Technology (SLIIT).",
    department: "BSc (Hons) in Information Technology",
    image: "/team/Chami.png",
  },
];

const supervisors = [
  {
    name: "Samanthi Siriwardena",
    position: "Academic Supervisor",
    education: "Supervisor",
    institute: "York St John University, London, UK",
    department: "Research Supervision",
    image: "/team/Samanthi Siriwardhana Supervisor.jpeg",
  },
  {
    name: "Ishara Weerathunga",
    position: "Co-supervisor",
    education: "Co-supervisor",
    institute: "Sri Lanka Institute of Information Technology (SLIIT)",
    department: "Department of Information Technology",
    image: "/team/Ishara Weerathunga Co-Supervisor.jpeg",
  },
];

const people = [...supervisors, ...team];

export default function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">Project Members</p>
          <h2>Meet the project members.</h2>
          <p>
            The B2B INTELLICA project is guided by academic supervision and
            developed by a final-year research team specializing in information
            technology.
          </p>
        </div>

        <div className="team-grid">
          {people.map((person) => (
            <article
              key={person.name}
              className={`info-card ${person.image ? "supervisor-card" : "team-card"}`}
            >
              <div className="profile-media">
                {person.image && (
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
              <h3>{person.name}</h3>
              <div className="member-details">
                {person.position && <p>{person.position}</p>}
                <p>{person.education}</p>
                <p>{person.institute}</p>
                <p>{person.department}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
