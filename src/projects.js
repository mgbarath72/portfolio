// Each project gets a card on /projects and its own page at /projects/<slug>.
// Put images and videos in public/images/projects/<slug>/ and list them in `media`
// ({ type: "image" | "video", src, caption, alt?, poster? }). The first item is shown large
// at the top of the page; `cover` is the card image. Optional fields are skipped when missing.
export const projects = [
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
    ],
    results: [{ value: "Best Demo", label: "ACM HotMobile ’25" }],
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
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
