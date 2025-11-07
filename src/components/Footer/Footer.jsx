import { contact } from "@/data/SiteData";
import { Heart, Coffee } from "lucide-react";
import styles from "./Footer.module.css";
import { handleNavClick } from "../Navigation/Navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <h3>Sohaib Ali</h3>
            <p>Fullstack Developer</p>
          </div>

          <div className={styles.links}>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(`#${item.toLowerCase()}`);
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className={styles.social}>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} Sohaib Ali. Made with
            <Heart size={16} /> and <Coffee size={16} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
