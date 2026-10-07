import React from "react";

import avatar from "./images/profilephoto1.jpg";

const ThemeStyle = () => (
  <style>{`
    :root {
      --bg: #01030c;
      --panel: rgba(11, 17, 36, 0.88);
      --muted: #94a3b8;
      --accent: #fcd34d;
      --accent-strong: #f59e0b;
    }

    .noise-layer {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-opacity='0.07'%3E%3Cpath d='M0 0h2v2H0z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.25;
      pointer-events: none;
    }

    .glass-card {
      background: var(--panel);
      border: 1px solid rgba(226, 232, 240, 0.08);
      backdrop-filter: blur(18px);
      box-shadow: 0 25px 60px rgba(2, 6, 23, 0.65);
    }

    .section-label {
      font-size: 0.72rem;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.72);
    }

    .tag-pill {
      border-radius: 999px;
      padding: 0.35rem 0.9rem;
      background: rgba(248, 250, 252, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 0.8rem;
      color: rgba(226, 232, 240, 0.9);
    }

    .gradient-lens {
      position: absolute;
      border-radius: 999px;
      filter: blur(60px);
      opacity: 0.6;
    }

    .gradient-lens--one {
      width: 420px;
      height: 420px;
      top: -120px;
      right: -80px;
      background: radial-gradient(circle, rgba(251, 207, 92, 0.55) 0%, rgba(15, 23, 42, 0) 70%);
    }

    .gradient-lens--two {
      width: 360px;
      height: 360px;
      bottom: -40px;
      left: -80px;
      background: radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(2, 6, 23, 0) 70%);
    }
  `}</style>
);

const profile = {
  name: "Barath Balamurugan",
  title: "Spatial computing researcher",
  location: "Boston, MA",
  email: "barath.balamurugan@outlook.com",
  phone: "+1 857-398-8279",
  linkedin: "https://www.linkedin.com/in/barath-balamurugan",
  github: "https://github.com/Barath-Balamurugan",
  highlights: [
    "Realtime robotics + sensing",
    "Collaborative VR + Apple Vision Pro",
    "XR guidance for clinicians",
  ],
};

const focusAreas = [
  {
    title: "Human-robot collaboration",
    description:
      "Ways for people to understand robot status, intent, and uncertainty while working with a system.",
    points: ["Collaborative VR", "Realtime data", "User studies"],
  },
  {
    title: "Spatial computing interfaces",
    description:
      "Spatial interfaces for Apple Vision Pro and VR, built around real tasks and clear feedback.",
    points: ["Apple Vision Pro", "RealityKit", "SwiftUI"],
  },
  {
    title: "Surgical guidance twins",
    description:
      "Sensor-driven digital twins and XR guidance tools for surgical training and intraoperative use.",
    points: ["Sensor fusion", "XR training", "Ops rehearsal"],
  },
];

const stats = [
  { value: "4.0", label: "Graduate GPA" },
  { value: "35%", label: "Validation time saved" },
  { value: "5+", label: "Custom utilities delivered" },
  { value: "3", label: "Publications" },
];

const projects = [
  {
    name: "AR-Surgery digital twin",
    summary:
      "An Apple Vision Pro app that aligns 3D models with anatomy and displays live data from a sensorized probe.",
    signals: ["Apple Vision Pro", "RealityKit", "SwiftUI"],
    date: "2025",
  },
  {
    name: "Task Colab volumetric board",
    summary:
      "A shared spatial workspace for reviewing robot tasks, live data, and 3D content with remote collaborators.",
    signals: ["Apple Vision Pro", "Unity", "Sensor fusion"],
    date: "2025",
  },
  {
    name: "Autonomous dice sorting",
    summary: "A Jetson-based robot combines YOLO, depth sensing and MoveIt to detect and sort dice. A mixed synthetic and real dataset reached 91.3% accuracy after 100 training epochs.",
    signals: ["ROS 2", "YOLO", "MoveIt", "Jetson"],
    date: "2025",
  },
  {
    name: "XR robot teleoperation & digital twin",
    summary: "A Unity VR interface simulates and teleoperates a six-degree-of-freedom robot, with ROS 2 communication and edge camera processing on Raspberry Pi and Jetson.",
    signals: ["Unity", "ROS 2", "C#", "Edge AI"],
    date: "2024–25",
  },
  {
    name: "Haptic XR training lane",
    summary:
      "A VR training workflow that combines tactile probes, live sensor data, and performance feedback.",
    signals: ["ROS2", "OpenCV", "Haptics"],
    date: "2024",
  },
];

const labPlaybooks = [
  {
    title: "Build, test, repeat",
    body:
      "I prototype quickly, test with users early, and use feedback to improve the next version.",
    tags: ["Haptics", "Pilot studies", "Adaptive scoring"],
  },
  {
    title: "Make the data understandable",
    body:
      "I keep sensor and communication pipelines observable so latency, timing, and failures are easier to diagnose.",
    tags: ["Latency &lt; 40 ms", "Edge compute", "Reliability"],
  },
  {
    title: "Design for the operator",
    body:
      "I design around the person using the system, especially when the robot or interface needs to explain what it is doing.",
    tags: ["Shared context", "Storyboards", "Vision Pro"],
  },
];

const credentials = [
  {
    title: "Northeastern University",
    subtitle: "M.S. Robotics (Computer Science)",
    detail: "Boston · Sep 2024–Dec 2026 · GPA 4.0/4.0",
  },
  {
    title: "Sri Krishna College of Engineering & Technology",
    subtitle: "B.E. Mechatronics",
    detail: "India · Jun 2019–Mar 2023 · CGPA 9.07/10",
  },
];

const toolkit = [
  "Python",
  "Swift",
  "C++",
  "Unity",
  "ROS2",
  "RealityKit",
  "PyTorch",
  "OpenCV",
  "LabVIEW",
  "Embedded C",
  "C#",
  "JavaScript",
  "React",
  "Scikit-learn",
  "MoveIt",
  "Jetson",
  "Raspberry Pi",
];

const testimonialsData = [
  {
    title: "Lab walkthrough — XR communication pipeline",
    detail: "Demonstrates a haptic-integrated VR workflow validated with pilot trainees.",
  },
  {
    title: "Surgical guidance twin",
    detail: "Clinician feedback on an Apple Vision Pro prototype for intraoperative awareness.",
  },
  {
    title: "Remote Human-Robot Collaboration in XR",
    detail: "An operator uses a VR app to control a robot via a virtual controller while viewing its real-time joint status and camera feed.",
  },
];

const experience = [
  {
    role: "Research & Development Co-op",
    organization: "Berkshire Grey",
    period: "Jan 2026 — Present",
    detail: "Building human-in-the-loop teleoperation for failed robotic picks; evaluating grasp performance and trigger conditions. Calibrated OptiTrack and investigated VRPN / ROS 2 clock domains for reliable sensor synchronization.",
    tags: ["Robotic manipulation", "Teleoperation", "ROS 2"],
  },
  {
    role: "Research Assistant",
    organization: "Northeastern University",
    period: "Sep 2024 — Present",
    detail: "Built an end-to-end XR sensor-to-visualization pipeline and a multisensory VR training module validated in pilot sessions. Developing a physical probe that streams live telemetry into VR under lab conditions.",
    tags: ["XR", "Haptics", "Sensor data"],
  },
  {
    role: "Project Engineer",
    organization: "Soliton Technologies",
    period: "Jun 2023 — Jul 2024",
    detail: "Designed LabVIEW and Python APIs that reduced validation time by 35%. Delivered 5+ custom utilities, cut manual errors by 40%, and ran 10+ hardware integration tests.",
    tags: ["LabVIEW", "Python", "Hardware testing"],
  },
];

const publications = [
  {
    title: "Remote Human-Robot Collaboration in XR",
    venue: "ACM HotMobile ’25 · Best Demo Award",
    href: "https://doi.org/10.1145/3708468.3715687",
  },
  {
    title: "XRFab: Immersive Cleanroom Training with Digital Twins and XR for Semiconductor Manufacturing",
    venue: "IEEE ISEMV ’25 · Accepted for publication",
  },
  {
    title: "Actuation of Braille Text into Braille Code and Braille Board with Navigation System",
    venue: "IEEE Xplore · 2023",
    href: "https://ieeexplore.ieee.org/document/10568883",
  },
];


function ArrowLink({ href, children, download = false }) {
  const external = href.startsWith("http");
  return (
    <a className="text-link" href={href} download={download || undefined} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}<span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro }) {
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

export default function BarathPortfolio() {
  return (
    <div className="site-shell" id="top">
      <header className="topbar">
        <a className="wordmark" href="#top">Barath B.</a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Writing</a>
        </nav>
        <a className="contact-link" href={`mailto:${profile.email}`}>Contact</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Robotics · XR · Human-centered systems</p>
            <h1>I build robotics and XR systems that are practical, clear, and easy to use.</h1>
            <p className="hero-intro">I’m {profile.name}, a robotics researcher and engineer based in {profile.location}. I work on robot teleoperation, real-time sensor pipelines, and XR tools for training and guidance.</p>
            <div className="hero-actions">
              <ArrowLink href={`mailto:${profile.email}`}>Email me</ArrowLink>
              <ArrowLink href="/Barath_Balamurugan_Resume.pdf" download>Resume</ArrowLink>
              <ArrowLink href={profile.github}>GitHub</ArrowLink>
            </div>
          </div>
          <div className="portrait-wrap">
            <img src={avatar} alt="Barath Balamurugan" />
            <p>Currently working across robotics, XR, and human-robot interaction.</p>
          </div>
        </section>

        <section className="numbers" aria-label="Selected outcomes">
          {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </section>

        <section id="experience" className="content-section">
          <SectionHeading eyebrow="Experience" title="What I’ve been working on." intro="My experience covers robotics R&D, academic research, and hardware validation." />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.organization}>
                <p className="timeline-date">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                </div>
                <div>
                  <p className="body-copy">{item.detail}</p>
                  <p className="meta-line">{item.tags.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeading eyebrow="Focus" title="The problems I like working on." />
          <div className="focus-list">
            {focusAreas.map((area, index) => (
              <article key={area.title}>
                <span>0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionHeading eyebrow="Selected work" title="A few projects I’m proud of." intro="These projects bring together robotics, perception, spatial computing, and real-time data." />
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name}>
                <span className="project-index">0{index + 1}</span>
                <div><p className="project-date">{project.date}</p><h3>{project.name}</h3></div>
                <div><p>{project.summary}</p><p className="meta-line">{project.signals.join(" · ")}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="content-section">
          <SectionHeading eyebrow="Publications" title="Published research." />
          <div className="publication-list-simple">
            {publications.map((paper, index) => (
              <article key={paper.title}>
                <span>0{index + 1}</span>
                <div><h3>{paper.title}</h3><p>{paper.venue}</p></div>
                {paper.href ? <ArrowLink href={paper.href}>Read</ArrowLink> : <span className="muted">Forthcoming</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <p className="eyebrow">Education</p>
            {credentials.map((cred) => <article className="credential" key={cred.title}><h3>{cred.title}</h3><p>{cred.subtitle}</p><span>{cred.detail}</span></article>)}
          </div>
          <div>
            <p className="eyebrow">Toolkit</p>
            <p className="toolkit-copy">{toolkit.join(" · ")}</p>
          </div>
        </section>

        <section className="content-section notes-section">
          <SectionHeading eyebrow="Approach" title="How I like to build." />
          <div className="notes-grid">
            {labPlaybooks.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </section>

        <section className="closing">
          <p className="eyebrow">Get in touch</p>
          <h2>Working on a robotics or XR problem? I’d like to hear about it.</h2>
          <ArrowLink href={`mailto:${profile.email}`}>{profile.email}</ArrowLink>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Barath Balamurugan</span><div><a href={profile.linkedin}>LinkedIn</a><a href={profile.github}>GitHub</a></div></footer>
    </div>
  );
}
