import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Thank you for your message. The project team can connect with you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-shell">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">Contact Us</p>
          <h2>Get in Touch</h2>
          <p>
            Contact the B2B INTELLICA research team for academic inquiries,
            project discussions, or collaboration related to the platform.
          </p>
        </div>

        <div className="contact-form-layout">
          <form className="contact-form info-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message or Query
              <textarea
                rows="5"
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <div className="form-note">
              This form is currently a frontend demonstration for the project
              website. Connect it to email or backend handling if you want live
              message delivery.
            </div>
            <button type="submit" className="button button-primary">
              Send Message
            </button>
          </form>

          <aside className="contact-details info-card">
            <h3>Contact Details</h3>
            <p>
              For formal communication, use the team email address below or add
              the final institutional contact details before submission.
              <br />
              <a href="mailto:team.b2bintelica@gmail.com">team.b2bintelica@gmail.com</a>
            </p>
            <p>
              You can also list supervisor emails, department contacts, or a
              project coordinator address in this panel.
            </p>
            <strong>- Team B2B INTELLICA -</strong>
          </aside>
        </div>
      </div>
    </section>
  );
}
