// Each project gets a card on /projects and its own page at /projects/<slug>.
// Put images and videos in public/images/projects/<slug>/ and list them in `media`
// ({ type: "image" | "video", src, caption, alt?, poster? }). The first item is shown large
// at the top of the page; `cover` is the card image. Optional fields are skipped when missing.
export const projects = [
  {
    slug: "xr-teleoperation",
    name: "XR robot teleoperation & digital twin",
    date: "2024–25",
    timeline: "Sep 2024 – Aug 2025",
    summary:
      "A Unity VR interface simulates and teleoperates a six-degree-of-freedom robot, with ROS 2 communication and edge camera processing on Raspberry Pi and Jetson.",
    tags: ["Unity", "ROS 2", "C#", "Edge AI"],
    stack: ["Unity", "C#", "ROS 2", "ROS TCP Connector", "Python", "Blender", "Raspberry Pi", "Jetson"],
    overview: [
      "A VR application that simulates and teleoperates a 6-DoF robotic manipulator running on a Jetson. The operator controls the robot through a virtual controller while watching its real-time joint status and camera feed.",
      "The demo, Remote Human-Robot Collaboration in XR, won the Best Demo Award at ACM HotMobile ’25.",
    ],
    highlights: [
      "Built the VR application in Unity with C# to simulate and teleoperate the manipulator.",
      "Connected Unity to the robot over ROS 2 topics with the ROS TCP Connector for real-time data exchange.",
      "Ran edge AI on a Raspberry Pi to process camera streams over ROS 2, detecting features in real time and feeding structured results back to the operator.",
      "Turned those detections into VR: per-frame positions of detected objects are sent to the headset, which spawns matching virtual objects in the digital twin.",
    ],
    results: [{ value: "Best Demo", label: "ACM HotMobile ’25" }],
    cover: {
      src: "/images/projects/xr-teleoperation/cover.jpg",
      alt: "The virtual robot arm on its mobile base inside the VR workspace",
    },
    media: [
      {
        type: "video",
        src: "/images/projects/xr-teleoperation/demo.mp4",
        poster: "/images/projects/xr-teleoperation/cover.jpg",
        caption: "The demo: an XR digital twin of the robot, real-time detection of objects around it, the virtual controller, and live telemetry from the real robot.",
      },
    ],
    links: [
      { label: "Paper · ACM HotMobile ’25", href: "https://doi.org/10.1145/3708468.3715687" },
      { label: "Unity project", href: "https://github.com/Barath-Balamurugan/industryxr-unity" },
    ],
  },
  {
    slug: "haptic-xr-training",
    name: "Haptic XR training lane",
    date: "2024",
    summary:
      "A VR training workflow that combines tactile probes, live sensor data, and performance feedback.",
    tags: ["ROS2", "OpenCV", "Haptics"],
    overview: [
      "A VR training workflow that combines tactile probes, live sensor data, and performance feedback. It uses haptics and other sensory feedback to improve skill transfer and reduce training time.",
    ],
    highlights: [
      "Built an end-to-end XR communication pipeline that connects hardware sensors to real-time visualization.",
      "Implemented a multi-sensory VR training module and validated it in pilot sessions with trainees.",
    ],
  },
  {
    slug: "dice-sorting",
    name: "Autonomous dice sorting",
    date: "2025",
    timeline: "Mar – Apr 2025",
    summary:
      "A Jetson-based robot combines YOLO, depth sensing and MoveIt to detect and sort dice. A mixed synthetic and real dataset reached 91.3% accuracy after 100 training epochs.",
    tags: ["ROS 2", "YOLO", "MoveIt", "Jetson"],
    stack: ["ROS 2", "YOLO", "MoveIt", "Jetson", "Depth sensing", "Blender"],
    overview: [
      "An end-to-end autonomous sorting system. Real-time YOLO detection and depth sensing localize each die, and MoveIt commands the pick and place.",
    ],
    highlights: [
      "Combined real-time YOLO detection with depth sensing to localize dice and command pick and place through MoveIt.",
      "Built a training dataset from Blender renders, real images, and augmented data, then trained the model for 100 epochs.",
      "Kept perception (YOLO, depth) and control (MoveIt, ROS) as separate modules to reduce integration risk and allow portable deployment on low-power hardware.",
    ],
    results: [
      { value: "91.3%", label: "Model accuracy" },
      { value: "100", label: "Training epochs" },
    ],
  },
  {
    slug: "ar-surgery",
    name: "AR-Surgery digital twin",
    date: "2025",
    timeline: "Apr 2025 – Present",
    summary:
      "An Apple Vision Pro app that aligns 3D models with anatomy and displays live data from a sensorized probe.",
    tags: ["Apple Vision Pro", "RealityKit", "SwiftUI"],
    stack: ["Apple Vision Pro", "SwiftUI", "RealityKit", "ARKit", "ESP"],
    overview: [
      "AR-Surgery is a surgical guidance prototype for Apple Vision Pro. It renders a patient or phantom model in an immersive space, aligns it with the real anatomy, and overlays guidance visuals on top.",
      "A sensorized probe streams live telemetry into the app for immersive intraoperative visualization.",
    ],
    highlights: [
      "Prototyped a sensorized probe that streams live telemetry into the AR guidance app.",
      "Implemented spatial registration and object tracking pipelines to improve overlay precision and procedural reliability.",
      "Designed surgeon-centric interfaces for live feedback and training in complex surgical workflows.",
    ],
    cover: {
      src: "/images/projects/ar-surgery/cover.jpg",
      alt: "Apple Vision Pro view of a virtual phantom model beside the tracked physical phantom",
    },
    media: [
      {
        type: "video",
        src: "/images/projects/ar-surgery/workflow.mp4",
        poster: "/images/projects/ar-surgery/workflow-poster.jpg",
        caption: "The full workflow: the tracked phantom, the sensorized probe with a live depth readout, and the anatomy overlay.",
      },
      {
        type: "video",
        src: "/images/projects/ar-surgery/phantom-tracking.mp4",
        poster: "/images/projects/ar-surgery/cover.jpg",
        caption: "Object tracking recognizes the physical phantom and attaches a virtual phantom to it in the immersive space.",
      },
      {
        type: "video",
        src: "/images/projects/ar-surgery/overlay.mp4",
        poster: "/images/projects/ar-surgery/overlay-poster.jpg",
        caption: "The virtual model overlaid on the tracked physical phantom.",
      },
    ],
    links: [{ label: "Source code", href: "https://github.com/Barath-Balamurugan/ar-surgery" }],
  },
  {
    slug: "task-colab",
    name: "Task Colab volumetric board",
    date: "2025",
    summary:
      "A shared spatial workspace for reviewing robot tasks, live data, and 3D content with remote collaborators.",
    tags: ["Apple Vision Pro", "Unity", "Sensor fusion"],
    overview: [
      "Task Colab is a shared spatial workspace for Apple Vision Pro. Remote collaborators can review robot tasks, live data, and 3D content together on a volumetric board.",
    ],
    links: [{ label: "Source code", href: "https://github.com/Barath-Balamurugan/TaskColab" }],
  },
  {
    slug: "drain-run",
    name: "Drain Run",
    date: "2025–26",
    timeline: "Nov 2025 – Present",
    summary:
      "A fast arcade survival game for Android. Dodge enemies, drain energy to refill your ammo, and survive waves that keep getting harder.",
    tags: ["Unity", "C#", "Android", "Game design"],
    stack: ["Unity", "C#", "2D URP", "Android", "Google Play"],
    overview: [
      "Drain Run is a mobile arcade game I designed and built in Unity and released on Google Play. You steer with a touch joystick, drain energy from glowing objects to refill your ammo, and shoot your way through endless waves of enemies.",
      "Draining is the core trade-off: you move more slowly while you drain, and a heat gauge overheats if you hold it too long, so every run is a balance between staying safe and staying armed.",
    ],
    highlights: [
      "Designed three enemy types with distinct silhouettes and telegraphed attacks: circle chasers, triangle dashers with a wind-up ring, and square shooters with an aim line.",
      "Built an endless wave system that opens with chasers only, brings in dashers and shooters gradually, and offers a choice of three power-up cards after each cleared wave.",
      "Made draining readable with a heat gauge that shifts from green to amber to red, a three-second overheat countdown, and beams and particles flowing from each drained target.",
      "Added game feel: shooting recoil, hit flashes and spark bursts, screen shake and vibration on death, and clear feedback when you run out of ammo.",
      "Shipped Android builds through Google Play testing to a public release.",
    ],
    cover: {
      src: "/images/projects/drain-run/cover.jpg",
      alt: "Drain Run title art: a neon player orb with a joystick, a drain button, and incoming red enemies",
    },
    media: [
      { type: "image", src: "/images/projects/drain-run/cover.jpg", alt: "Drain Run title art: a neon player orb with a joystick, a drain button, and incoming red enemies" },
      {
        type: "video",
        src: "/images/projects/drain-run/movement.mp4",
        poster: "/images/projects/drain-run/movement-poster.jpg",
        caption: "Moving with the touch joystick.",
      },
      {
        type: "video",
        src: "/images/projects/drain-run/drain.mp4",
        poster: "/images/projects/drain-run/drain-poster.jpg",
        caption: "Holding drain pulls energy from nearby objects to refill ammo.",
      },
      {
        type: "video",
        src: "/images/projects/drain-run/gauge.mp4",
        poster: "/images/projects/drain-run/gauge-poster.jpg",
        caption: "The drain gauge fills while you drain; push it too far and you overheat.",
      },
    ],
    links: [{ label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=com.barath.drainrun" }],
  },
  {
    slug: "response-quest",
    name: "Response Quest",
    date: "2026",
    summary:
      "A collapsed-building reconnaissance demo that pairs a hand-tracked hologram pyramid with a Meta Quest 3 headset, so a team can study a collapse together and send one person inside it at full size.",
    tags: ["Unity", "Meta Quest 3", "Hologram", "Hand tracking"],
    stack: ["Unity 6", "C#", "Meta XR SDK", "Meta Quest 3", "Ultraleap hand tracking", "Blender"],
    overview: [
      "Response Quest is a two-station demo for disaster reconnaissance. A hologram pyramid shows a collapsed apartment building that the whole room can see, and an operator controls it with bare-hand gestures. A Meta Quest 3 headset puts one person inside the same building at full size.",
      "The two stations stay in sync over the local network. The operator scrubs the collapse back and forth, rotates the model, slices away storeys to look inside, and selects a void. The headset wearer is sent into that void, and a marker on the pyramid shows where they are in the rubble.",
    ],
    highlights: [
      "Built two linked Unity apps, a standalone Quest 3 headset view and a hand-tracked pyramid station, that share state over UDP on the same network.",
      "Designed pinch-and-drag gestures on the pyramid with Ultraleap hand tracking to scrub the collapse, rotate the building, slice storeys, and pick a void.",
      "Created a three-spot hazard assessment inside the rubble: a damaged gas pipe with a hand-held detector, a cracked overhead slab, and an exposed electrical hazard, each with sound and visual clues that the operator records with hand gestures.",
      "Set up a Blender pipeline that regenerates the building models for both apps, and scripted the Unity project settings, scene setup, and APK builds.",
    ],
    cover: {
      src: "/images/projects/response-quest/cover.jpg",
      alt: "A partly collapsed apartment building at night, seen from the street in the headset",
    },
    media: [
      {
        type: "image",
        src: "/images/projects/response-quest/cover.jpg",
        alt: "A partly collapsed apartment building at night, seen from the street in the headset",
        caption: "The headset view from the street: the same building, partly collapsed, at full size.",
      },
      {
        type: "image",
        src: "/images/projects/response-quest/pyramid.jpg",
        alt: "The building model floating inside the hologram pyramid",
        caption: "The shared view: the building as a hologram in the pyramid, controlled by hand.",
      },
      {
        type: "image",
        src: "/images/projects/response-quest/gas-hazard.jpg",
        alt: "Rubble beside a damaged gas service sign inside the collapse",
        caption: "Inside the collapse at the gas inspection spot.",
      },
      {
        type: "image",
        src: "/images/projects/response-quest/inside-void.jpg",
        alt: "Concrete slabs close overhead inside a void in the rubble",
        caption: "Inside a void, with slabs close overhead.",
      },
    ],
  },
  {
    slug: "nanowire-lab",
    name: "VR–hologram nanowire lab",
    date: "2025–26",
    summary:
      "A VR and hologram simulation for semiconductor manufacturing education: one learner grows nanowires in a virtual furnace while the class watches the process live on a hologram. Second place in the IEEE Metaverse challenge.",
    tags: ["Unity", "VR", "Hologram", "Simulation"],
    stack: ["Unity", "C#", "Meta Quest 3", "Hologram pyramid", "Physics-based growth model"],
    overview: [
      "Nanofabrication training is limited by cost, access, and safety: the equipment is expensive, the gases are hazardous, and the processes are too small to see. This project turns nanowire growth into a safe, repeatable lesson.",
      "One learner runs the experiment in VR with realistic lab equipment, while a synchronized hologram gives the whole class a live 3D view of the nanowires as they grow.",
    ],
    highlightsTitle: "Highlights",
    highlights: [
      "Simulated the full workflow: set parameters, prepare the furnace, load the sample, control gas and heat, grow the nanowires, then cool, withdraw, and reset.",
      "Modeled three-zone furnace temperature control and gas-flow configuration.",
      "Drove the nucleation and growth visualization with a physics-based model in which nucleation frequency and growth rate depend on temperature and supersaturation.",
      "Kept the VR session and the hologram in sync, so one learner's actions become a shared view for the group.",
    ],
    results: [{ value: "2nd place", label: "IEEE Metaverse challenge" }],
    cover: {
      src: "/images/projects/nanowire-lab/cover.jpg",
      alt: "A 3D model of a tube furnace used for nanowire growth",
    },
    media: [
      {
        type: "image",
        src: "/images/projects/nanowire-lab/cover.jpg",
        alt: "A 3D model of a tube furnace used for nanowire growth",
        caption: "The virtual tube furnace the learner operates in VR.",
      },
      {
        type: "video",
        src: "/images/projects/nanowire-lab/parameters.mp4",
        poster: "/images/projects/nanowire-lab/parameters-poster.jpg",
        caption: "Setting the growth parameters on the in-VR panel.",
      },
      {
        type: "video",
        src: "/images/projects/nanowire-lab/sample-loading.mp4",
        poster: "/images/projects/nanowire-lab/sample-loading-poster.jpg",
        caption: "Pushing the sample into the furnace with the rod.",
      },
      {
        type: "video",
        src: "/images/projects/nanowire-lab/gas-flow.mp4",
        poster: "/images/projects/nanowire-lab/gas-flow-poster.jpg",
        caption: "Gas flowing through the furnace tube over the substrate.",
      },
      {
        type: "image",
        src: "/images/projects/nanowire-lab/sample-boat.jpg",
        alt: "A sample boat inside the furnace tube with nanowires forming on the sample",
        caption: "The sample boat inside the furnace tube.",
      },
      {
        type: "video",
        src: "/images/projects/nanowire-lab/growth.mp4",
        poster: "/images/projects/nanowire-lab/growth-poster.jpg",
        caption: "Nanowires nucleating and growing in the physics-based simulation.",
      },
      {
        type: "image",
        src: "/images/projects/nanowire-lab/hologram-view.jpg",
        alt: "Nanowires growing on a substrate, shown in the hologram pyramid",
        caption: "The same growth shown to the class on the hologram.",
      },
    ],
  },
  {
    slug: "classroom-hologram",
    name: "Classroom hologram pyramid",
    date: "2026",
    summary:
      "A shared holographic display that projects interactive 3D STEM models into a pyramid, so a whole classroom can watch the same model without headsets.",
    tags: ["Unity", "Hologram", "WebRTC", "STEM education"],
    stack: ["Unity", "C#", "WebRTC", "Node.js", "OSC"],
    overview: [
      "A pyramid-shaped holographic display for classrooms. Interactive 3D models, from a jellyfish to the planets, float inside the pyramid where a whole group can see them at once, with no headsets.",
      "We built it for the IEEE FutureTech Explorers Challenge.",
    ],
    highlights: [
      "Built the Unity display app that receives a live WebRTC video stream and renders it as four views, one for each side of the pyramid.",
      "Wrote the Node.js signaling server, with automatic discovery on the local network so the display finds the server without typing an address.",
      "Added a shared whiteboard: drawing strokes arrive over OSC and appear in the hologram in real time.",
    ],
    cover: {
      src: "/images/projects/classroom-hologram/cover.jpg",
      alt: "A glowing blue jellyfish floating inside the hologram pyramid",
    },
    media: [
      {
        type: "image",
        src: "/images/projects/classroom-hologram/cover.jpg",
        alt: "A glowing blue jellyfish floating inside the hologram pyramid",
        caption: "A jellyfish model floating in the pyramid.",
      },
      {
        type: "image",
        src: "/images/projects/classroom-hologram/sun.jpg",
        alt: "The pyramid display in its frame, showing the sun",
        caption: "The display in its frame, showing the sun.",
      },
      {
        type: "image",
        src: "/images/projects/classroom-hologram/earth.jpg",
        alt: "A close-up of the Earth projected inside the pyramid",
        caption: "A close-up of the Earth in the pyramid.",
      },
    ],
  },
  {
    slug: "ask-raman",
    name: "Ask C. V. Raman",
    date: "2026",
    timeline: "2026 – in progress",
    summary:
      "A talking hologram of the physicist C. V. Raman. Visitors ask a question out loud, and a 3D Raman answers in a voice trained on his archival recordings, grounded in the historical record.",
    tags: ["Python", "LLM", "Voice cloning", "Unity"],
    stack: ["Python", "Whisper", "Qwen3-8B", "Qwen3-TTS", "wav2arkit", "MLX", "Unity"],
    overview: [
      "Ask C. V. Raman is an interactive exhibit: a 3D bust of the Nobel-winning physicist that listens, answers, and speaks with a lip-synced, blinking face.",
      "Answers are meant to stay faithful to the record. The language model runs locally and answers from a reviewed fact sheet and passages from Raman’s archive, and its fine-tuning data labels every answer as documented, reconstructed, or insufficient evidence.",
      "The current version streams every stage, so Raman starts talking after the first short sentence instead of waiting for the whole answer, voice, and face track.",
    ],
    highlights: [
      "Integrated a streaming pipeline on Apple Silicon: Whisper speech recognition, a local Qwen3-8B model, a Qwen3-TTS voice fine-tuned on reviewed archival recordings of Raman, and wav2arkit lip sync for the 3D face in Unity.",
      "Built a reviewed fine-tuning dataset and a validator that rejects any documented answer whose citation is not in the archive, so the model cannot learn to cite fluently and falsely.",
      "Cut the time from the end of a visitor’s question to Raman’s first word from about 15–20 seconds to 1.2–2.2 seconds by streaming each stage.",
      "Kept long sessions fast by capping the model server’s conversation cache and trimming history, so response time stays flat across a dozen questions.",
    ],
    results: [{ value: "1.2–2.2 s", label: "Question to first word" }],
    cover: {
      src: "/images/projects/ask-raman/cover.jpg",
      alt: "A 3D bust of C. V. Raman wearing a white turban, suit, and tie",
    },
    media: [
      {
        type: "image",
        src: "/images/projects/ask-raman/cover.jpg",
        alt: "A 3D bust of C. V. Raman wearing a white turban, suit, and tie",
      },
      {
        type: "video",
        src: "/images/projects/ask-raman/lipsync.mp4",
        poster: "/images/projects/ask-raman/lipsync-poster.jpg",
        caption: "A lip-sync test: the face driven by the generated voice.",
      },
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
