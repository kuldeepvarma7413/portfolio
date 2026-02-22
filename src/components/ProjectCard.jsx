import React, { useEffect } from "react";
import "./ProjectCard.css";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({ title, description, image, githubLink, link = "", tag = "Project" }) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="project-card" data-aos="fade-up">
      {/* Image area */}
      <div className="pc-image-wrap">
        <img src={image} alt={title} loading="lazy" decoding="async" />
        <div className="pc-overlay" />
        <span className="pc-tag">{tag}</span>
      </div>

      {/* Content */}
      <div className="pc-content">
        <h3 className="pc-title">{title}</h3>
        <p className="pc-desc">{description}</p>
        <div className="pc-actions">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="pc-btn pc-btn-live">
              <FaArrowUpRightFromSquare size={12} /> Live
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="pc-btn pc-btn-gh">
              <FaGithub size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
