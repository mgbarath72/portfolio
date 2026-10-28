import React from "react";
import { Link, useParams } from "react-router-dom";

import { ArrowLink, NotFound, usePageTitle } from "./Layout";
import { projects } from "./projects";

function ProjectMedia({ item }) {
  return (
    <figure className="project-media">
      {item.type === "video"
        ? <video src={item.src} poster={item.poster} controls playsInline preload="metadata" />
        : <img src={item.src} alt={item.alt ?? ""} loading="lazy" />}
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </figure>
  );
}

function ProjectSection({ title, children }) {
  return (
    <section className="project-section">
      <h2 className="eyebrow">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  usePageTitle(project?.name);

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const [lead, ...gallery] = project.media ?? (project.cover ? [{ type: "image", ...project.cover }] : []);

  return (
    <main>
      <section className="project-hero">
        <Link className="back-link" to="/projects"><span aria-hidden="true">←</span> All projects</Link>
        <p className="eyebrow">{project.date}</p>
        <h1>{project.name}</h1>
        <p className="page-lede">{project.summary}</p>
        {project.links && (
          <div className="hero-actions">
            {project.links.map((link) => <ArrowLink key={link.href} href={link.href}>{link.label}</ArrowLink>)}
          </div>
        )}
      </section>

      <dl className="project-facts">
        <div><dt>Timeline</dt><dd>{project.timeline ?? project.date}</dd></div>
        <div><dt>Built with</dt><dd>{(project.stack ?? project.tags).join(" · ")}</dd></div>
      </dl>

      {lead && <div className="project-lead-media"><ProjectMedia item={lead} /></div>}

      {project.overview && (
        <ProjectSection title="Overview">
          {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </ProjectSection>
      )}

      {project.highlights && (
        <ProjectSection title={project.highlightsTitle ?? "What I built"}>
          <ul className="project-points">
            {project.highlights.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </ProjectSection>
      )}

      {project.results && (
        <ProjectSection title="Results">
          <div className="project-results">
            {project.results.map((result) => <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}
          </div>
        </ProjectSection>
      )}

      {gallery.length > 0 && (
        <ProjectSection title="Gallery">
          <div className="project-gallery">
            {gallery.map((item) => <ProjectMedia key={item.src} item={item} />)}
          </div>
        </ProjectSection>
      )}

      <nav className="project-pager" aria-label="More projects">
        <Link className="text-link" to="/projects">All projects</Link>
        <Link className="pager-next" to={`/projects/${next.slug}`}>
          <span className="eyebrow">Next project</span>
          <strong>{next.name} <span aria-hidden="true">→</span></strong>
        </Link>
      </nav>
    </main>
  );
}
