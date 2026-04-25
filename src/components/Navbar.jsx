import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "Research Domain", href: "#domain" },
  { label: "Technologies", href: "#technologies" },
  { label: "Project Milestones", href: "#milestones" },
  { label: "Documents", href: "#docs" },
  { label: "Presentations", href: "#presentations" },
  { label: "About Team", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="section-shell nav-shell" aria-label="Primary">
        <a href="#home" className="brand-mark" onClick={() => setIsOpen(false)}>
          <img
            src="/reference/cognify-logo.png"
            alt=""
            className="brand-logo"
            aria-hidden="true"
          />
          <span>
            <strong>B2B INTELLICA</strong>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="site-nav-links"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="site-nav-links"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${item.active ? "is-active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
