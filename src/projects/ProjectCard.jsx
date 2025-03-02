export default function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <div className="project-image">
          <img src={project.image} alt="Project Thumbnail" />
          <div className="overlay"></div>
        </div>
        <div className="project-content">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description lusitana-regular">{project.description}</p>
  
          {/* 🔹 Display Features as a List */}
          <h6> Key Features</h6>
          <ul className="project-features">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
  
          <p className="tech-stack">Tech Stack: {project.techStack.join(", ")}</p>
          <div className="project-links">
            <a href={project.liveLink} className="btn live" target="_blank" rel="noopener noreferrer">🔗 View Project</a>
            <a href={project.codeLink} className="btn code" target="_blank" rel="noopener noreferrer">💻 View Code</a>
          </div>
        </div>
      </div>
    );
  }
  