import ProjectCard from '../projects/ProjectCard';
import { projects } from '../projects/ProjectsData';
import '../projects/Projects.css';
export default function Projects() {
    return (
      <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    );
}
