import { useState, useEffect } from "react";
import { projects, projectCategories } from "../../data/SiteData";
import {
  ExternalLink,
  Github,
  Filter,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Server,
  Code2,
  Star,
  Play,
  Pause,
  Zap,
} from "lucide-react";
import styles from "./Projects.module.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [autoPlay, setAutoPlay] = useState(true);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    const icons = {
      Fullstack: <Code2 size={16} />,
      Frontend: <Monitor size={16} />,
      Backend: <Server size={16} />,
      Featured: <Star size={16} />,
    };
    return icons[category] || <Code2 size={16} />;
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            A collection of my work showcasing fullstack applications, frontend
            interfaces, and backend systems built with modern technologies.
          </p>

          <div className={styles.controls}>
            <div className={styles.filters}>
              <Filter size={18} className={styles.filterIcon} />
              {projectCategories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${
                    activeFilter === category ? styles.active : ""
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {getCategoryIcon(category)}
                  {category}
                </button>
              ))}
            </div>

            <button
              className={`${styles.autoPlayBtn} ${
                autoPlay ? styles.active : ""
              }`}
              onClick={() => setAutoPlay(!autoPlay)}
              title={autoPlay ? "Pause auto-play" : "Start auto-play"}
            >
              {autoPlay ? <Pause size={16} /> : <Play size={16} />}
              Auto-play
            </button>
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              autoPlay={autoPlay}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <Code2 size={48} className={styles.noProjectsIcon} />
            <h3>No projects found</h3>
            <p>Try selecting a different category to see more projects.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, autoPlay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isNavHovered, setIsNavHovered] = useState(false);

  useEffect(() => {
    setIsPlaying(autoPlay);
  }, [autoPlay]);

  useEffect(() => {
    if (!isPlaying || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getRepoType = () => {
    if (project.repositories.single) return "single";
    if (project.repositories.frontend && project.repositories.backend)
      return "fullstack";
    if (project.repositories.frontend) return "frontend";
    if (project.repositories.backend) return "backend";
    return "single";
  };

  const repoType = getRepoType();

  return (
    <div
      className={styles.projectCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsNavHovered(false);
      }}
    >
      <div className={styles.projectHeader}>
        <div className={styles.projectBadge}>
          {project.featured && <Star size={14} />}
          {project.category}
        </div>
        <div className={styles.repoType}>
          {repoType === "fullstack" && <Zap size={14} />}
          {repoType}
        </div>
      </div>

      <div className={styles.projectImage}>
        <div className={styles.imageContainer}>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
            className={styles.projectImg}
          />
          <div className={styles.imageOverlay}></div>
        </div>

        {project.images.length > 1 && (
          <div
            className={styles.carouselControls}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {project.images.length}
            </div>

            <button
              className={styles.playPauseBtn}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        )}

        <div
          className={`${styles.projectOverlay} ${
            isHovered && !isNavHovered ? styles.visible : ""
          }`}
        >
          <div className={styles.projectLinks}>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.demoLink} ${styles.projectBtn}`}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            <div className={styles.githubLinks}>
              {project.repositories.single ? (
                <a
                  href={project.repositories.single}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.githubLink} ${styles.projectBtn}`}
                >
                  <Github size={18} />
                  View Code
                </a>
              ) : (
                <>
                  {project.repositories.frontend && (
                    <a
                      href={project.repositories.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.githubLink} ${styles.projectBtn}`}
                    >
                      <Github size={18} />
                      Frontend
                    </a>
                  )}
                  {project.repositories.backend && (
                    <a
                      href={project.repositories.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.githubLink} ${styles.projectBtn}`}
                    >
                      <Github size={18} />
                      Backend
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.techStack}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.projectMeta}>
          <div className={styles.repoInfo}>
            <Github size={16} />
            <span>
              {repoType === "fullstack" && "Frontend + Backend Repos"}
              {repoType === "frontend" && "Frontend Repository"}
              {repoType === "backend" && "Backend Repository"}
              {repoType === "single" && "Single Repository"}
            </span>
          </div>
          <div className={styles.imageCount}>
            {project.images.length} screenshot
            {project.images.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
