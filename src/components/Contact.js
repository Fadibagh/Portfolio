import { AtSymbolIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <AtSymbolIcon className="contact-icon" />
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-methods">
              <div className="contact-method">
                <MailIcon className="method-icon" />
                <div className="method-content">
                  <div className="method-title">Email</div>
                  <div className="method-value">
                    <a
                      href="mailto:Fadi2002.ba@gmail.com"
                      className="method-link"
                    >
                      Fadi2002.ba@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <PhoneIcon className="method-icon" />
                <div className="method-content">
                  <div className="method-title">Phone</div>
                  <div className="method-value">
                    <a href="tel:+17093304413" className="method-link">
                      +1 (709) 330-4413
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <AtSymbolIcon className="method-icon" />
                <div className="method-content">
                  <div className="method-title">Instagram</div>
                  <div className="method-value">
                    <a
                      href="https://instagram.com/fadibagh"
                      className="method-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @Fadibagh
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Fadibagh"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📁
              </a>
              <a
                href="https://instagram.com/fadibagh"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </a>
              <a href="mailto:Fadi2002.ba@gmail.com" className="social-link">
                ✉️
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                📤 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
