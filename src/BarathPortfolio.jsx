import React from "react";

import avatar from "./images/profilephoto1.jpg";
import testimonial1 from "./images/video1.mp4";
import testimonial2 from "./images/video2.mp4";

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
    "Collaborative VR + Apple Vision Pro",
    "XR guidance for clinicians",
    "Realtime robotics + sensing",
  ],
};

const focusAreas = [
  {
    title: "Spatial computing interfaces",
    description:
      "Rapid visionOS prototyping that lets teams reason about robot intent, shared context, and tactile feedback.",
    points: ["Apple Vision Pro", "RealityKit", "SwiftUI"],
  },
  {
    title: "Surgical guidance twins",
    description:
      "Digital twins syncing probes, haptics, and overlays so operating teams rehearse workflows with confidence.",
    points: ["Sensor fusion", "XR training", "Ops rehearsal"],
  },
  {
    title: "Human-robot collaboration",
    description:
      "Immersive review rooms that reveal telemetry, uncertainty, and task plans in volumetric canvases.",
    points: ["Collaborative VR", "Realtime data", "User studies"],
  },
];

const stats = [
  { value: "4.0", label: "Graduate GPA" },
  { value: "35%", label: "Validation time saved" },
  { value: "5+", label: "XR stacks shipped" },
  { value: "2", label: "Peer-reviewed papers" },
];

const projects = [
  {
    name: "AR-Surgery digital twin",
    summary:
      "Live overlays, annotations, and haptic nudges for intraoperative teams using Apple Vision Pro as a co-pilot.",
    signals: ["Latency &lt; 40 ms", "RealityKit", "SwiftUI"],
    date: "2025",
  },
  {
    name: "Task Colab volumetric board",
    summary:
      "Remote scientists co-create task plans inside a shared volumetric workspace with spatialized audio callouts.",
    signals: ["Apple Vision Pro", "Unity", "Sensor fusion"],
    date: "2025",
  },
  {
    name: "Haptic XR training lane",
    summary:
      "Multi-sensory VR training program with tactile probes and analytics to shorten clinician onboarding.",
    signals: ["ROS2", "OpenCV", "Haptics"],
    date: "2024",
  },
];

const labPlaybooks = [
  {
    title: "Immersive training loops",
    body:
      "Instrumented VR drills that combine tactile probes with volumetric telemetry so residents feel procedures before day zero.",
    tags: ["Haptics", "Pilot studies", "Adaptive scoring"],
  },
  {
    title: "Realtime insight pipelines",
    body:
      "Data services that ingest sensor streams, clean them on-edge, and surface only the critical signals in XR canvases.",
    tags: ["Latency &lt; 40 ms", "Edge compute", "Reliability"],
  },
  {
    title: "Collaborative review rooms",
    body:
      "Spatial meeting rooms where robotics teams inspect intent, uncertainty, and what-if scenarios side by side.",
    tags: ["Shared context", "Storyboards", "Vision Pro"],
  },
];

const credentials = [
  {
    title: "Northeastern University",
    subtitle: "M.S. Robotics (Computer Science)",
    detail: "Reality Design Lab • GPA 4.0/4.0",
  },
  {
    title: "Sri Krishna College of Engineering & Technology",
    subtitle: "B.E. Mechatronics",
    detail: "Graduated with First Class Distinction",
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
];

const testimonialsData = [
  {
    title: "Lab walkthrough — XR communication pipeline",
    detail: "Demonstrates a haptic-integrated VR workflow validated with pilot trainees.",
    media: testimonial1,
  },
  {
    title: "Surgical guidance twin",
    detail: "Clinician feedback on an Apple Vision Pro prototype for intraoperative awareness.",
    media: testimonial2,
  },
];

function Chip({ children, href }) {
  const Component = href ? "a" : "div";
  return (
    <Component
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
    >
      <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
      {children}
    </Component>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/20">
      {children}
    </span>
  );
}

function HeroCard({ title, children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-zinc-900/60 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
      {title && <div className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-400">{title}</div>}
      {children}
    </div>
  );
}

function CTA({ children, variant = "primary", href }) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-0";
  const cls =
    variant === "primary"
      ? `${base} bg-amber-400 text-zinc-900 hover:bg-amber-300`
      : `${base} bg-white/5 text-zinc-200 hover:bg-white/10`;
  const Component = href ? "a" : "button";
  return (
    <Component href={href} className={cls} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined}>
      {children}
    </Component>
  );
}

const heroBullets = [
  "XR training stack validated with surgical residents",
  "Realtime ingest → volumetric overlays service",
  "Collaborative VR rituals for robotics design reviews",
];

const focusSignals = ["Apple Vision Pro", "Robotics", "Human Factors"];

export default function BarathPortfolio() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-200 selection:text-slate-900">
      <ThemeStyle />
      <div className="relative isolate overflow-hidden pb-20">
        <div className="gradient-lens gradient-lens--one" />
        <div className="gradient-lens gradient-lens--two" />
        <div className="noise-layer" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-16">
          <section className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 shadow-2xl sm:px-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
              </div>

              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.5em] text-zinc-300 ring-1 ring-white/10">
                  RESEARCHER • XR · ROBOTICS
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7 xl:col-span-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="relative mx-auto sm:mx-0">
                        <div className="absolute -inset-1 rounded-2xl bg-amber-400/20 blur-md" />
                        <img
                          src={avatar}
                          alt="Barath Balamurugan"
                          className="relative h-28 w-28 rounded-2xl object-cover ring-1 ring-white/10"
                        />
                      </div>

                      <div className="flex-1">
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                          {profile.name}
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-300">
                          I build immersive systems that make robotics intent tangible. From Apple Vision Pro prototypes to realtime sensor
                          pipelines, every experience translates complex autonomy into human-readable guidance.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <Chip href={`mailto:${profile.email}`}>{profile.email}</Chip>
                          <Chip>{profile.location}</Chip>
                          <Chip>{profile.phone}</Chip>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {profile.highlights.map((item) => (
                            <Tag key={item}>{item}</Tag>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                          <CTA href={profile.linkedin}>Start a project</CTA>
                          <CTA variant="ghost" href={profile.github}>
                            View experiments
                          </CTA>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 lg:col-span-5 xl:col-span-4">
                    <HeroCard title={<span className="flex items-center gap-2 text-zinc-300">Signal</span>}>
                      <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
                        {heroBullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-amber-400/90" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </HeroCard>

                    <HeroCard title={<span className="flex items-center gap-2 text-zinc-300">Focus</span>}>
                      <div className="flex flex-wrap gap-2">
                        {focusSignals.map((label) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-sm text-zinc-200 ring-1 ring-white/10"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" aria-hidden />
                            {label}
                          </span>
                        ))}
                      </div>
                    </HeroCard>
                  </div>
                </div>
              </div>
            </section>

          <section className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="section-label mb-3">Telemetry</div>
                <h2 className="text-3xl font-semibold">Proof points from the lab</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-5 text-center">
                  <div className="text-3xl font-semibold text-amber-300">{stat.value}</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <div className="section-label mb-3">Focus areas</div>
              <h2 className="text-3xl font-semibold">Where I invest cycles</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {focusAreas.map((area, idx) => (
                <div key={area.title} className="glass-card rounded-2xl p-6 space-y-4">
                  <p className="text-sm text-slate-400">Track 0{idx + 1}</p>
                  <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                  <p className="text-sm text-slate-300">{area.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {area.points.map((point) => (
                      <span key={point} className="tag-pill text-xs">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="section-label mb-3">Case studies</div>
                <h2 className="text-3xl font-semibold">Systems that turn insight into action</h2>
              </div>
              <p className="text-sm text-slate-400 max-w-xl">
                Each build is engineered as a living lab: measurable telemetry, field feedback loops, and a clear path to deployment beyond demos.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article key={project.name} className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="text-sm text-slate-400">{project.date}</div>
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.signals.map((signal) => (
                      <span key={signal} className="tag-pill text-xs">
                        {signal}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="section-label mb-3">Playbooks</div>
            <h2 className="text-3xl font-semibold">How I partner with teams</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {labPlaybooks.map((playbook) => (
                <div key={playbook.title} className="glass-card rounded-2xl p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{playbook.title}</h3>
                  <p className="text-sm text-slate-300">{playbook.body}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {playbook.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card rounded-3xl p-8 space-y-5">
              <div className="section-label">Credentials & labs</div>
              {credentials.map((cred) => (
                <div key={cred.title} className="border border-white/10 rounded-2xl p-5 bg-white/5">
                  <h3 className="text-lg font-semibold text-white">{cred.title}</h3>
                  <p className="text-sm text-slate-300 mt-1">{cred.subtitle}</p>
                  <p className="text-xs text-slate-400 mt-1">{cred.detail}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-3xl p-8 space-y-5">
              <div className="section-label">Toolkit</div>
              <p className="text-sm text-slate-300">
                Languages and engines I reach for to turn research hypotheses into production-ready prototypes.
              </p>
              <div className="flex flex-wrap gap-2">
                {toolkit.map((skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.title} className="glass-card rounded-3xl overflow-hidden">
                <video controls className="w-full h-56 object-cover">
                  <source src={testimonial.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6 space-y-2">
                  <p className="text-sm text-amber-200">Field note</p>
                  <h3 className="text-xl font-semibold text-white">{testimonial.title}</h3>
                  <p className="text-sm text-slate-300">{testimonial.detail}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="glass-card rounded-3xl p-10 text-center space-y-6">
            <div className="section-label">Collaborate</div>
            <h2 className="text-3xl font-semibold">
              Let’s build spatial experiences that make robotics more human and trustworthy.
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto">
              I’m exploring research collaborations, internships, and consulting work that mix robotics, XR, and human-centered design. Tell me about your challenge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTA href={`mailto:${profile.email}`}>Start a conversation</CTA>
              <CTA variant="ghost" href={profile.linkedin}>
                Schedule a call
              </CTA>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
