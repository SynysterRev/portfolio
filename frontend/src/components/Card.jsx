export default function Card ({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.technologies && <p>Technologies: {project.technologies}</p>}
      <div className="project-links">
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noopener noreferrer">Site Live</a>
        )}
      </div>
    </div>
  );
}