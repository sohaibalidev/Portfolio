import { useState } from "react";
import { contact } from "../../data/SiteData.js";
import { Mail, Phone, Github, Send, Loader2 } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent! I'll get back to you soon.");
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>
              Let's <span className="gradient-text">Talk</span>
            </h2>

            <p className={styles.description}>
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>

            <div className={styles.contactMethods}>
              <a
                href={`mailto:${contact.email}`}
                className={styles.contactMethod}
              >
                <Mail size={24} />
                <span>{contact.email}</span>
              </a>

              <a href={`tel:${contact.phone}`} className={styles.contactMethod}>
                <Phone size={24} />
                <span>{contact.phone}</span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactMethod}
              >
                <Github size={24} />
                <span>View my GitHub</span>
              </a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
