import { contact } from "../../data/siteData"; // Changed from ContactObj to contact
import { Heart, Coffee } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <h3>Sohaib.dev</h3>
            <p>Fullstack Developer</p>
          </div>

          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.social}>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={`mailto:${contact.email}`}>Email</a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} Muhammad Sohaib Ali. Made with
            <Heart size={16} /> and <Coffee size={16} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
