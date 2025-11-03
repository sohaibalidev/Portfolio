import { useState } from "react";
import { skills } from "../../data/siteData";
import { Code2, Database, Server, GitBranch } from "lucide-react";
import styles from "./TechStack.module.css";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      Frontend: <Code2 size={18} />,
      Backend: <Server size={18} />,
      Database: <Database size={18} />,
      Tools: <GitBranch size={18} />,
    };
    return icons[category] || <Code2 size={18} />;
  };

  return (
    <section id="tech" className={styles.tech}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Tech <span className="gradient-text">Stack</span>
        </h2>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillCategory}>{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
