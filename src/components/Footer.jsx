export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <div className="footer-brand">
          <h3>B2B INTELLICA</h3>
          <p>
            AI-driven trade intelligence research platform prepared for academic
            review, milestone tracking, and submission access.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#domain">Research Domain</a>
            <a href="#milestones">Milestones</a>
            <a href="#docs">Documents</a>
            <a href="#presentations">Presentations</a>
            <a href="#about">About Team</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Project Status</h4>
          <p>Website structure completed and final research content integrated.</p>
          <div className="status-bar" aria-hidden="true">
            <span />
          </div>
          <strong>Progress: 95%</strong>
        </div>
      </div>
    </footer>
  );
}
