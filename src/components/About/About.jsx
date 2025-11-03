import {
  Code2,
  Zap,
  Wrench,
  Target,
  BookOpen,
  Award,
  Users,
} from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          About <span className="gradient-text">Me</span>
        </h2>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.story}>
              <h3>My Journey</h3>
              <p>
                My journey in web development began with a simple curiosity
                about how websites work. What started as experimenting with HTML
                and CSS has evolved into building sophisticated fullstack
                applications that solve real-world problems.
              </p>
              <p>
                I'm passionate about creating digital experiences that are not
                only visually appealing but also performant, accessible, and
                user-friendly. Every project is an opportunity to learn, grow,
                and push the boundaries of what's possible.
              </p>
            </div>

            <div className={styles.skills}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <Code2 size={32} />
                </div>
                <h3>Fullstack Development</h3>
                <p>
                  Crafting complete solutions from responsive UIs to robust
                  backend APIs. Proficient in React, Node.js, and modern
                  development practices.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <Zap size={32} />
                </div>
                <h3>Performance Optimization</h3>
                <p>
                  Building lightning-fast applications with optimized code,
                  efficient algorithms, and modern performance techniques.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <Wrench size={32} />
                </div>
                <h3>Problem Solving</h3>
                <p>
                  Transforming complex requirements into elegant solutions
                  through analytical thinking and creative approaches.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.focusCard}>
              <div className={styles.cardHeader}>
                <Target size={24} />
                <h4>Current Focus</h4>
              </div>
              <p>
                Building scalable SaaS products with React & Node.js ecosystem
              </p>
            </div>

            <div className={styles.focusCard}>
              <div className={styles.cardHeader}>
                <BookOpen size={24} />
                <h4>Learning Goals</h4>
              </div>
              <p>
                Advanced backend architecture, microservices, and cloud
                technologies
              </p>
            </div>

            <div className={styles.focusCard}>
              <div className={styles.cardHeader}>
                <Award size={24} />
                <h4>My Approach</h4>
              </div>
              <p>
                Clean code, best practices, and continuous improvement in every
                project
              </p>
            </div>

            <div className={styles.focusCard}>
              <div className={styles.cardHeader}>
                <Users size={24} />
                <h4>Collaboration</h4>
              </div>
              <p>
                Working effectively in teams and communicating clearly with
                stakeholders
              </p>
            </div>
          </div>
        </div>

        <div className={styles.passion}>
          <h3>What Drives Me</h3>
          <p>
            I believe in the power of technology to create positive change.
            Whether it's building an e-commerce platform that helps small
            businesses or creating tools that improve productivity, I'm
            motivated by the impact my work can have on people's lives.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or mentoring aspiring
            developers. I'm always excited to take on new challenges and
            collaborate on innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
