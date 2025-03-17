import { useState, useEffect } from 'react';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Erreur lors du chargement des projets');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio de Développeur</h1>
      </header>
      <main>
        {loading && <p>Chargement...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div className="projects">
            <h2>Mes projets</h2>
            {projects.length > 0 ? (
              <div className="projects-grid">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
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
                ))}
              </div>
            ) : (
              <p>Aucun projet à afficher</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}