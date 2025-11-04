import { useState } from 'react';
import { Mail, Phone, Github, Send, Loader2 } from 'lucide-react';
import { contact } from '@/data/SiteData.js';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const showMessage = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_FORM_API_KEY;

    const formPayload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const data = await res.json();

      if (data.success) {
        showMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        showMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      showMessage('Error sending message!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      {showAlert && <div className={styles.alertBox}>{alertMessage}</div>}
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>
              Let's <span className="gradient-text">Talk</span>
            </h2>

            <p className={styles.description}>
              Have a project in mind? Let's discuss how we can work together to bring your ideas to
              life.
            </p>

            <div className={styles.contactMethods}>
              <a href={`mailto:${contact.email}`} className={styles.contactMethod}>
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
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
