import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Biomedical Chat Assistant",
      description: "AI stack project using langchain, chromadb, and Ollama",
      tags: ["Python", "AI", "LLM"],
      github: "https://github.com/sadieflick/biomedical_graphrag"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "This portfolio website built with React and Flask",
      tags: ["React", "Flask", "CSS"],
      github: "https://github.com/sadieflick/sadie-portfolio"
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
