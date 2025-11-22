import { useState, useEffect, useRef } from 'react';
import { Rocket, ArrowRight, Folder, Calendar, Cpu, Download } from 'lucide-react';
import { handleNavClick } from '../Navigation/Navigation';
import styles from './Hero.module.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ['Fullstack Developer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (displayedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentWordIndex]);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const portraitRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!portraitRef.current) return;

    const rect = portraitRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 8;
    const moveY = (y - 0.5) * 8;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Resume download handler
  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume/sohaib-ali-resume.pdf';

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sohaib-Ali-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <a
              key={'Contact'}
              href={'#contact'}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className={styles.badgeLink}
            >
              <div className={styles.badge}>
                <Rocket size={16} />
                Available for new projects
              </div>
            </a>

            <h1 className={styles.title}>
              Hi, I'm <span className="gradient-text">Sohaib</span>
            </h1>

            <h2 className={styles.subtitle}>
              {displayedText}
              <span className={styles.cursor}>|</span>
            </h2>

            <p className={styles.description}>
              I build performant, scalable web applications with modern technologies. Passionate
              about creating solutions that make a difference.
            </p>

            <div className={styles.buttons}>
              <a
                key={'Projects'}
                href={'#projects'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#projects');
                }}
                className={'btn'}
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                key={'Contact'}
                href={'#contact'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className={'btn btn-secondary'}
              >
                Get In Touch
              </a>
              <button
                onClick={handleResumeDownload}
                className={`btn btn-secondary ${styles.resumeBtn}`}
              >
                Download Resume
                <Download size={18} />
              </button>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <Folder size={24} />
                <div className={styles.statNumber}>8+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div className={styles.stat}>
                <Calendar size={24} />
                <div className={styles.statNumber}>2+</div>
                <div className={styles.statLabel}>Years</div>
              </div>
              <div className={styles.stat}>
                <Cpu size={24} />
                <div className={styles.statNumber}>14+</div>
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
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                ref={portraitRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
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