import { useState, useEffect } from "react";
import { Rocket, ArrowRight, Folder, Calendar, Cpu } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["Fullstack Developer", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (displayedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentWordIndex]);

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <Rocket size={16} />
              Available for new projects
            </div>

            <h1 className={styles.title}>
              Hi, I'm <span className="gradient-text">Sohaib</span>
            </h1>

            <h2 className={styles.subtitle}>
              {displayedText}
              <span className={styles.cursor}>|</span>
            </h2>

            <p className={styles.description}>
              I build performant, scalable web applications with modern
              technologies. Passionate about creating solutions that make a
              difference.
            </p>

            <div className={styles.buttons}>
              <a href="#projects" className="btn">
                View My Work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <Folder size={24} />
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div className={styles.stat}>
                <Calendar size={24} />
                <div className={styles.statNumber}>2+</div>
                <div className={styles.statLabel}>Years</div>
              </div>
              <div className={styles.stat}>
                <Cpu size={24} />
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Technologies</div>
              </div>
            </div>
          </div>

          <div className={styles.portraitSection}>
            <div className={styles.portraitContainer}>
              <img
                src="/assets/portrait.png"
                alt="Muhammad Sohaib Ali"
                className={styles.portrait}
              />
              <div className={styles.portraitGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
