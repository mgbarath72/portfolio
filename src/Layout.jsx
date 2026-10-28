import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigationType } from "react-router-dom";

import { profile } from "./profile";

export function ArrowLink({ href, children, download = false }) {
  const external = href.startsWith("http");
  return (
    <a className="text-link" href={href} download={download || undefined} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}<span aria-hidden="true">↗</span>
    </a>
  );
}

export function SectionHeading({ eyebrow, title, intro }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-title-row">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Barath Balamurugan` : "Barath Balamurugan | Portfolio";
  }, [title]);
}

const scrollPositions = {};

// New pages open at the top, links like /#experience land on their section,
// and back/forward returns to where you were on that page.
export function ScrollManager() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();
  const currentKey = useRef(key);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const save = () => { scrollPositions[currentKey.current] = window.scrollY; };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, []);

  useLayoutEffect(() => {
    currentKey.current = key;
    if (navigationType === "POP" && key in scrollPositions) {
      window.scrollTo({ top: scrollPositions[key], behavior: "instant" });
    } else if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [key, hash, navigationType]);

  return null;
}

export function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="wordmark" to="/">Barath B.</Link>
      <nav aria-label="Main navigation">
        <Link to="/#experience">Experience</Link>
        <NavLink className="nav-projects" to="/projects">Projects</NavLink>
        <Link to="/#publications">Writing</Link>
      </nav>
      <a className="contact-link" href={`mailto:${profile.email}`}>Contact</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer><span>© {new Date().getFullYear()} Barath Balamurugan</span><div><a href={profile.linkedin}>LinkedIn</a><a href={profile.github}>GitHub</a></div></footer>
  );
}

export function NotFound() {
  usePageTitle("Page not found");
  return (
    <main className="page-intro">
      <p className="eyebrow">404</p>
      <h1>That page doesn’t exist.</h1>
      <div className="hero-actions">
        <Link className="text-link" to="/">Back to home</Link>
        <Link className="text-link" to="/projects">See all projects</Link>
      </div>
    </main>
  );
}
