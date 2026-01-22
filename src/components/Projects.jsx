import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'CoMotion Patent Family Tree',
      description: 'Graph visualization with ReactFlow. CSV ingestion. Dynamic edges. Screenshot export. Database work with Postgres and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB', 'Postgres', 'ReactFlow'],
      // demo: '#',
      // github: '#'
    },
    {
      title: 'Kiku music discovery app',
      description: 'Spotify API with PKCE. Similar artists. New releases. Top tracks. Google Maps for nearby concerts.',
      tech: ['API', 'Spotify', 'Google Maps'],
      // demo: '#',
      // github: '#'
    },
    {
      title: 'under construction',
      description: '',
      tech: [''],
      // demo: '#',
      // github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project {index + 1}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {/* <div className="project-links">
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

