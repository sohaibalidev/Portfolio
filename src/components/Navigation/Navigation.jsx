import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Folder, Mail } from "lucide-react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Tech Stack", href: "#tech", icon: Code },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.navContent}>
          <a
            href="#home"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            Sohaib.dev
          </a>

          <div
            className={`${styles.navLinks} ${
              isMobileOpen ? styles.active : ""
            }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <Icon size={18} />
                  {item.name}
                </a>
              );
            })}
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
