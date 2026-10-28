import React from "react";
import { Link } from "react-router-dom";

import { usePageTitle } from "./Layout";
import { projects } from "./projects";

function ProjectCover({ project, index }) {
  if (project.cover) return <img src={project.cover.src} alt="" loading="lazy" />;
  return (
    <div className="cover-placeholder" aria-hidden="true">
      <span>{project.tags[0]}</span>
      <span>0{index + 1}</span>
    </div>
  );
}

export default function ProjectsPage() {
  usePageTitle("Projects");
  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Things I’ve built across robotics, perception, and XR.</h1>
        <p className="page-lede">Pick a project to see how it works, what I built, and the demos and code behind it.</p>
      </section>

      <section className="project-grid" aria-label="All projects">
        {projects.map((project, index) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className={index === 0 ? "project-card project-card--featured" : "project-card"}>
            <div className="project-card-cover"><ProjectCover project={project} index={index} /></div>
            <div className="project-card-body">
              <p className="project-date">{project.date}</p>
              <h2>{project.name}</h2>
              <p className="card-summary">{project.summary}</p>
              <p className="meta-line">{project.tags.join(" · ")}</p>
              <span className="card-cta">View project <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
