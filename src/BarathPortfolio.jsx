import React from "react";

// Single-file React component (TailwindCSS) for Barath Balamurugan
// Instructions:
// 1) This component uses Tailwind utility classes for layout. Add this file to a React + Tailwind project (e.g. create-react-app + Tailwind).
// 2) To change the color theme, edit the CSS variables in the <ThemeStyle /> component below (--navy, --gold, --muted).
// 3) Replace the dummy avatar (data URL) in `avatar` with your passport photo URL or local import.
// 4) Resume content is embedded in the `profile` object — edit any text there.

const ThemeStyle = () => (
  <style>{`
    :root {
      --navy: #0b2340; /* primary background */
      --gold: #c59d2d; /* accent */
      --muted: #64748b; /* muted text */
      --card: #f8fafc; /* card bg */
    }
    .theme-navy { background: linear-gradient(180deg, var(--navy) 0%, rgba(11,35,64,0.9) 100%); }
    .accent-border { border-color: var(--gold); }
    .gold { color: var(--gold); }
    .navy-bg { background-color: var(--navy); }
    .card { background: var(--card); }
  `}</style>
);

// const avatar = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='%230f1724'/><g fill='%23fff'><circle cx='200' cy='140' r='70' opacity='0.95'/><rect x='90' y='230' width='220' height='110' rx='20' opacity='0.95'/></g></svg>`;
import avatar from "./images/profilephoto.jpg";
import testimonial1 from "./images/video1.mp4";
import testimonial2 from "./images/video2.mp4";

const profile = {
  name: "Barath Balamurugan",
  title: "M.S. Robotics (Computer Science) — Researcher",
  location: "Boston, MA",
  email: "barath.balamurugan@outlook.com",
  phone: "+1 857-398-8279",
  linkedin: "https://www.linkedin.com/in/barath-balamurugan",
  github: "https://github.com/Barath-Balamurugan",
  highlights: [
    "Research in Collaborative VR & Apple Vision Pro",
    "XR training systems, AR surgical guidance prototypes",
    "Strong background in robotics, computer vision, and real-time systems",
  ],
  education: [
    {
      school: "Northeastern University, Boston",
      degree: "M.S. Robotics (Computer Science)",
      date: "Sep 2024 – Dec 2026",
      notes: "GPA: 4.00/4.00.",
      subject: "Robot Mechanics & Control, Supervised Machine Learning, Pattern Recognition & Computer Vision, Reinforcement Learning",
    },
    {
      school: "Sri Krishna College of Engineering and Technology, India",
      degree: "B.E. Mechatronics",
      date: "Jun 2019 – Mar 2023",
      notes: "CGPA: 9.07/10",
      subject: " Mobile Robotics, Autonomous Vehicle Guidance System, Virtual Reality, Embedded System for Mechatronics, Internet of Things for Mechatronics, Principles of AI and Expert Systems",
    },
  ],

  experience: [
    {
      title: "Research Apprentice — Reality Design Lab, Northeastern University",
      date: "Jun 2025 – Present",
      bullets: [
        "Research on collaborative VR systems and multimodal user studies.",
        "Worked with Apple Vision Pro for immersive communication research.",
        "Designed study protocols and logged multimodal data for analysis."
      ],
    },
    {
      title: "Research Assistant - Northeastern University",
      date: "Sep 2024 – Present",
      bullets: [
        "Built and demonstrated an end-to-end XR communication pipeline integrating hardware sensors and real-time visualization.",
        "Implemented a multi-sensory VR training and validated it through pilot user sessions.",
        "Developed a physical probe that streams sensor data to a VR application for live intraoperative updates.",
        "Prototyped and validated real-time data ingestion in VR with stable update rates under lab conditions.",
        "Designed XR/VR training workflows augmented with haptics and sensory feedback to improve skill transfer and reduce training time."
      ],
    },
    {
      title: "Project Engineer — Soliton Technologies",
      date: "Jun 2023 – Jul 2024",
      bullets: [
        "Optimized LabVIEW & Python APIs; reduced validation time by 35%.",
        "Built utilities improving testing accuracy and reducing manual errors."
      ],
    },
  ],
  projects: [
    {
      name: "AR-Surgery — Digital Twin for Surgical Guidance",
      tech: "Apple Vision Pro, SwiftUI, RealityKit",
      date: "Apr 2025 – Present",
    },
    {
      name: "Task Colab — Collaborative VR Research",
      tech: "Apple Vision Pro, Raspberry Pi",
      date: "Sept 2025 – Present",
    },
  ],
  publications: [
    { title: "Remote Human-Robot Collaboration in XR (HotMobile '25)", link: "https://doi.org/10.1145/3708468.3715687" },
    { title: "Actuation of Braille Text into Braille Code (IEEE Xplore 2023)", link: "https://ieeexplore.ieee.org/document/10568883" },
  ],
  skills: [
    "Python", "Swift", "C++", "Unity", "ROS2", "PyTorch", "OpenCV", "LabVIEW",
  ],
};

export default function BarathPortfolio() {
  return (
    <div className="min-h-screen text-slate-800 antialiased">
      <ThemeStyle />

      <header className="theme-navy text-white py-12">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6">
          <div className="w-28 h-28 rounded-lg overflow-hidden ring-4 ring-opacity-30" style={{ boxShadow: '0 6px 18px rgba(2,6,23,0.45)', borderColor: 'var(--gold)', borderWidth: 2 }}>
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
            
          </div>
          <div className="flex-1">
            {/* <h1 className="text-3xl font-extrabold tracking-tight">{profile.name} <span className="ml-2 gold text-lg font-semibold">·</span></h1> */}
            <h1 className="text-3xl font-extrabold tracking-tight">{profile.name}</h1>
            <p className="mt-1 text-sm opacity-90">{profile.title} • {profile.location}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a href={`mailto:${profile.email}`} className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20">{profile.email}</a>
              <a href={`tel:${profile.phone}`} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full text-xs bg-white/5">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full text-xs bg-white/5">GitHub</a>
            </div>
          </div>
          <div className="w-64 text-left">
            <div
              className="inline-block px-5 py-3 rounded-md border-2 accent-border text-left"
              style={{ borderColor: 'var(--gold)', minWidth: '14rem' }}
            >
              <span className="text-xs block opacity-90 mb-1 font-semibold tracking-wide">
                Highlights
              </span>
              <ul className="mt-1 text-[13px] leading-5 list-disc list-inside opacity-90">
                {profile.highlights.map((h, i) => (
                  <li key={i} className="mb-1">{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-12 max-w-5xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="card rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium">{exp.title}</h3>
                  <span className="text-sm text-muted">{exp.date}</span>
                </div>
                <ul className="mt-2 list-disc list-inside text-sm opacity-90">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="card rounded-xl p-6 shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.projects.map((p, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-sm mt-1 opacity-90">{p.tech}</p>
                  <p className="text-xs mt-2 text-muted">{p.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card rounded-xl p-6 shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Publications</h2>
            <ul className="space-y-2">
              {profile.publications.map((pub, i) => (
                <li key={i}>
                  <a href={pub.link} target="_blank" rel="noreferrer" className="font-medium underline">{pub.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="card rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-3">Education</h3>
            <div className="space-y-3 text-sm">
              {profile.education.map((ed, i) => (
                <div key={i}>
                  <div className="flex justify-between">
                    <div className="font-medium">{ed.school}</div>
                    <div className="text-xs text-muted">{ed.date}</div>
                  </div>
                  <div className="text-xs opacity-90">{ed.degree}</div>
                  <div className="text-xs font-semibold text-muted">{ed.notes}</div>
                  <div className="text-xs text-muted">{ed.subject}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((s, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full border">{s}</span>
              ))}
            </div>
          </div>

          <div className="card rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-3">Testimonials</h3>
            <p className="text-sm text-muted mb-3">Embedded video placeholders — replace with YouTube/Vimeo links.</p>

            {/* Video placeholders: change src to your YouTube/Vimeo embed URLs */}
            <div className="space-y-3">
              <video controls className="w-full rounded-md">
                <source src={testimonial1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <video controls className="w-full rounded-md">
                <source src={testimonial2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </aside>
      </main>

      <footer className="max-w-5xl mx-auto px-6 pb-10 text-sm text-center text-muted">
        <div className="mb-3">Built with ♥ — replace avatar and content as needed. Theme variables are at the top of the file.</div>
        <div className="flex items-center justify-center gap-4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="opacity-50">·</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
