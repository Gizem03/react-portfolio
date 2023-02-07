import "./Components.css";

import projects from "./project-data.json";

function Project(props) {
  return (
    <a href={props.href} target="_blank" className="project" id={props.id}>
      <div className="label">
        <div>{props.name}</div>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section className="page-section" id="work">
      <h2>Work</h2>
      <div className="page-section-content" id="work-grid">
        {projects.map((project) => {
          return (
            <Project
              key={project.name+ project.id}
              href={project.href}
              id={project.id}
              name={project.name}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
