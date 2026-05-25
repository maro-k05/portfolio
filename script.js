const img = (local, fallback) => ({ local, fallback });

const projects = {
  pepper: {
    title: "Pepper AI Teaching Assistant",
    tag: "HRI / Robotics",
    icon: "🤖",
    category: "robotics",
    cover: img("images/pepper/pepper-classroom.jpg", "https://www.robotlab.com/hs-fs/hubfs/AI-Lab/Pepper%20AI%20Lab.jpg"),
    overview: "An advanced HRI project where Pepper acts as an AI teaching assistant. It includes classroom presentation, face recognition, attendance automation, hand-raise detection, Gemini AI question answering, tablet pages, survey QR, quizzes, and AI image filters.",
    caption: "Pepper as an AI teaching assistant for classroom interaction",
    gallery: [
      ["Pepper teaching / classroom interaction", img("images/pepper/pepper-teaching.jpg", "https://www.robotlab.com/hubfs/Pepper%20Robot%20Academic%20Edition.png")],
      ["Tablet UI: attendance, survey, quiz", img("images/pepper/tablet-ui.jpg", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80")],
      ["Face recognition attendance flow", img("images/pepper/face-recognition.jpg", "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&q=80")],
      ["AI image filter pipeline", img("images/pepper/ai-photo-filter.jpg", "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80")],
      ["Gemini Q&A assistant", img("images/pepper/gemini-qa.jpg", "https://images.unsplash.com/photo-1675557009875-436f714574be?w=900&q=80")],
      ["Hand-raise detection and mapping", img("images/pepper/hand-raise-map.jpg", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80")]
    ],
    features: ["Pepper lecture and gestures", "Face recognition for students", "Hand-raise detection with spatial mapping", "Gemini API Q&A", "Attendance sheet automation", "Survey QR code on Pepper tablet", "AI photo filters with Flask backend"],
    tech: ["Python", "NAOqi", "OpenCV", "Face Recognition", "Gemini API", "Flask", "TCP Sockets", "HTML/CSS/JS"]
  },

  wro: {
    title: "World Robot Olympiad Robot",
    tag: "Robotics Competition",
    icon: "🏆",
    cover: img("images/wro/wro-robot.jpg", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80"),
    overview: "A robotics competition project where we built and programmed a robot using Arduino/Raspberry Pi concepts, sensors, movement logic, and teamwork.",
    caption: "WRO robot build, testing, and competition story",
    gallery: [
      ["Your real WRO robot photo", img("images/wro/robot-front.jpg", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80")],
      ["Robot chassis / mechanism", img("images/wro/chassis.jpg", "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=900&q=80")],
      ["Arduino / Raspberry Pi wiring", img("images/wro/wiring.jpg", "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=900&q=80")],
      ["Sensor testing", img("images/wro/sensors.jpg", "https://images.unsplash.com/photo-1581091215367-59ab6b75e3f6?w=900&q=80")],
      ["Team competition moment", img("images/wro/team.jpg", "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80")],
      ["Second place achievement", img("images/wro/award.jpg", "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80")]
    ],
    features: ["Robot building and testing", "Arduino/Raspberry Pi practice", "Sensor integration", "Competition problem solving", "Teamwork under time pressure", "Second-place achievement"],
    tech: ["Arduino", "Raspberry Pi", "Sensors", "Robotics", "Embedded Systems", "Team Engineering"]
  },

  mask: {
    title: "Face Mask Detection CNN",
    tag: "Computer Vision",
    icon: "😷",
    category: "ai",
    cover: img("images/ml/mask-detection.jpg", "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=900&q=80"),
    overview: "A CNN image classification project that detects with-mask and without-mask classes. It includes preprocessing, training, evaluation, confusion matrices, GPU acceleration, and inference visualization.",
    caption: "Mask vs no-mask detection using CNN and computer vision",
    gallery: [
      ["Mask detection result", img("images/ml/mask-result.jpg", "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=900&q=80")],
      ["CNN training curves", img("images/ml/training-curves.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80")],
      ["Confusion matrix analysis", img("images/ml/confusion-matrix.jpg", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80")],
      ["GPU training setup", img("images/ml/gpu-training.jpg", "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80")]
    ],
    features: ["CNN image classification", "With-mask vs without-mask classes", "Preprocessing and normalization", "Accuracy/loss curves", "Confusion matrix", "CUDA/PyTorch acceleration"],
    tech: ["Python", "PyTorch", "OpenCV", "CNN", "CUDA", "Matplotlib"]
  },

  forgery: {
      title: "Banknote Forgery Detection",
      tag: "Machine Learning",
      icon: "💵",
    category: "ai",
      cover: img("images/ml/banknote-forgery.jpg", "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80"),
      overview: "A machine learning classification project that identifies forged vs authentic banknotes using extracted features, preprocessing, model training, and evaluation metrics.",
      caption: "Authentic vs forged banknote classification",
      gallery: [
        ["Money / banknote dataset idea", img("images/ml/banknotes.jpg", "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80")],
        ["Feature distributions", img("images/ml/banknote-features.jpg", "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80")],
        ["Model evaluation dashboard", img("images/ml/banknote-dashboard.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80")],
        ["Prediction result", img("images/ml/banknote-prediction.jpg", "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=80")]
      ],
      features: ["Forgery classification", "Feature preprocessing", "Train/test split", "Model comparison", "Accuracy metrics", "Visualization of results"],
      tech: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Classification"]
    },
    breastCancer: {
    title: "Breast Cancer Detection",
    tag: "Machine Learning",
    icon: "🎗️",
    cover: img("images/ml/breast-cancer.jpg", "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80"),
    overview: "A machine learning project for breast cancer prediction using preprocessing, feature analysis, model training, confusion matrices, and evaluation metrics.",
    caption: "Breast cancer diagnosis prediction using machine learning",
    gallery: [
      ["Dataset visualization", img("images/ml/breast-dataset.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80")],
      ["Sample analysis", img("images/ml/breast-sample.jpg", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80")],
      ["Neural network", img("images/ml/breast-network.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80")],
      ["Prediction result", img("images/ml/breast-prediction.jpg", "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80")]
    ],
    features: [
      "Cancer classification",
      "Feature preprocessing",
      "Data cleaning",
      "Confusion matrix evaluation",
      "Prediction system",
      "Accuracy analysis"
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Machine Learning"
    ]
  },


  breastCancer: {
    title: "Breast Cancer Detection",
    tag: "Machine Learning",
    icon: "🎗️",
    category: "ai",
    cover: img("images/ml/breast-cancer.jpg", "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80"),
    overview: "A machine learning project for breast cancer prediction using preprocessing, feature analysis, model training, confusion matrices, and evaluation metrics.",
    caption: "Breast cancer diagnosis prediction using machine learning",
    gallery: [
      ["Dataset visualization", img("images/ml/breast-dataset.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80")],
      ["Sample analysis", img("images/ml/breast-sample.jpg", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80")],
      ["Neural network", img("images/ml/breast-network.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80")],
      ["Prediction result", img("images/ml/breast-prediction.jpg", "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80")]
    ],
    features: ["Cancer classification", "Feature preprocessing", "Data cleaning", "Confusion matrix evaluation", "Prediction system", "Accuracy analysis"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Machine Learning"]
  },


  quizmaze: {
    title: "QuizMaze Platform",
    tag: "Full-Stack Web",
    icon: "🎮",
    category: "software",
    cover: img("images/quizmaze/home.jpg", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80"),
    overview: "A full-stack quiz platform with accounts, quiz types, difficulty levels, score tracking, and progress tracking. Designed for interactive learning and dynamic content.",
    caption: "Interactive full-stack quiz platform",
    gallery: [
      ["Login and account page", img("images/quizmaze/login.jpg", "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80")],
      ["Quiz category selection", img("images/quizmaze/categories.jpg", "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=900&q=80")],
      ["Difficulty levels", img("images/quizmaze/levels.jpg", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80")],
      ["Progress tracking", img("images/quizmaze/progress.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80")]
    ],
    features: ["User authentication", "Multiple quiz categories", "Easy/medium/hard levels", "Score tracking", "Progress history", "Dynamic content"],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Full-Stack"]
  },

  webpg: {
    title: "Web Programming Website",
    tag: "Responsive Website",
    icon: "🌐",
    category: "software",
    cover: img("images/webpg/homepage.jpg", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"),
    overview: "A responsive educational website for the Web Programming course, covering web history, security threats, mobile-first design, internet statistics, and Arabic educational content.",
    caption: "GIN 446 educational web project",
    gallery: [
      ["Animated homepage", img("images/webpg/home.jpg", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80")],
      ["Web history timeline", img("images/webpg/history.jpg", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80")],
      ["Security threats cards", img("images/webpg/security.jpg", "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80")],
      ["Mobile-first design", img("images/webpg/mobile.jpg", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80")]
    ],
    features: ["Responsive pages", "Modern UI", "Animations", "Educational sections", "Arabic summary page", "Netlify deployment"],
    tech: ["HTML", "CSS", "JavaScript", "Netlify", "Responsive Design"]
  },

  bereal: {
    title: "BeReal Application Design",
    tag: "Software Engineering",
    icon: "📱",
    category: "software",
    cover: img("images/bereal/uml.jpg", "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80"),
    overview: "An Object-Oriented Design project focused on the BeReal application, including use cases, UML diagrams, class diagrams, workflow analysis, and functionality enhancement.",
    caption: "UML and use-case driven software design",
    gallery: [
      ["Use case diagram", img("images/bereal/usecase.jpg", "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80")],
      ["Class diagram", img("images/bereal/class-diagram.jpg", "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80")],
      ["Sequence diagram", img("images/bereal/sequence.jpg", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80")],
      ["Workflow analysis", img("images/bereal/workflow.jpg", "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80")]
    ],
    features: ["UML modeling", "Use case diagrams", "Class diagrams", "Sequence diagrams", "Workflow design", "Software requirements"],
    tech: ["UML", "OOD", "Software Engineering", "Use Cases", "System Design"]
  },

  battleship: {
    title: "Battleship Game",
    tag: "OOP Game",
    icon: "🚢",
    category: "software",
    cover: img("images/battleship/game-board.jpg", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"),
    overview: "A text-interface Battleship game built to demonstrate object-oriented programming, class responsibilities, game board logic, turns, hits, misses, and win detection.",
    caption: "Object-oriented console game architecture",
    gallery: [
      ["Game board grid", img("images/battleship/board.jpg", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80")],
      ["Ship placement logic", img("images/battleship/ships.jpg", "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=80")],
      ["Attack flow", img("images/battleship/attack.jpg", "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?w=900&q=80")],
      ["OOP class structure", img("images/battleship/oop.jpg", "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80")]
    ],
    features: ["Text interface", "Object-oriented design", "Board management", "Ship placement", "Player turns", "Win detection"],
    tech: ["Java", "OOP", "Console Application", "Game Logic"]
  }
};

function imageTag(obj, alt = "") {
  return `<img src="${obj.local}" alt="${alt}" onerror="this.onerror=null;this.src='${obj.fallback}'">`;
}

const aiProjects = document.getElementById("aiProjects");
const roboticsProjects = document.getElementById("roboticsProjects");
const softwareProjects = document.getElementById("softwareProjects");

function createProjectCard(key, project) {
  return `
    <div class="card project-card" data-project="${key}">
      <div class="thumb">
        ${imageTag(project.cover, project.title)}
        <span class="badge">${project.tag}</span>
      </div>
      <h3>${project.icon} ${project.title}</h3>
      <p>${project.overview.substring(0, 145)}...</p>
      <button class="open-project">Open Project Page</button>
    </div>
  `;
}

Object.entries(projects).forEach(([key, project]) => {
  const card = createProjectCard(key, project);

  if (project.category === "ai") {
    aiProjects.innerHTML += card;
  } else if (project.category === "robotics") {
    roboticsProjects.innerHTML += card;
  } else if (project.category === "software") {
    softwareProjects.innerHTML += card;
  }
});


const competitions = {
  wro: {
    title: "World Robot Olympiad",
    tag: "Second Place",
    icon: "🏆",
    cover: img("images/wro/wro-robot.jpg", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80"),
    overview: "A robotics competition achievement where we built and programmed a robot using sensors, robotics logic, Arduino/Raspberry Pi concepts, teamwork, and problem solving.",
    caption: "WRO robotics competition project and second-place achievement",
    gallery: [
      ["Robot front view", img("images/wro/robot-front.jpg", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80")],
      ["Robot chassis", img("images/wro/chassis.jpg", "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=900&q=80")],
      ["Wiring and programming", img("images/wro/wiring.jpg", "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=900&q=80")],
      ["Sensor testing", img("images/wro/sensors.jpg", "https://images.unsplash.com/photo-1581091215367-59ab6b75e3f6?w=900&q=80")],
      ["Team moment", img("images/wro/team.jpg", "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80")],
      ["Award achievement", img("images/wro/award.jpg", "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80")]
    ],
    features: ["Second-place achievement", "Robot building and testing", "Sensor integration", "Arduino/Raspberry Pi practice", "Competition problem solving", "Teamwork under pressure"],
    tech: ["Arduino", "Raspberry Pi", "Sensors", "Robotics", "Embedded Systems", "Team Engineering"]
  }
};

const competitionGrid = document.getElementById("competitionGrid");

Object.entries(competitions).forEach(([key, competition]) => {
  competitionGrid.innerHTML += `
    <div class="card project-card competition-card" data-competition="${key}">
      <div class="thumb">
        ${imageTag(competition.cover, competition.title)}
        <span class="badge">${competition.tag}</span>
      </div>
      <h3>${competition.icon} ${competition.title}</h3>
      <p>${competition.overview.substring(0, 145)}...</p>
      <button class="open-project">Open Competition Page</button>
    </div>
  `;
});

const typingText = [
  "AI & Software Developer",
  "Computer Engineering Student",
  "Robotics & HRI Builder",
  "Machine Learning Enthusiast"
];

let typingIndex = 0;
let charIndex = 0;
let deleting = false;
const typingElement = document.getElementById("typing");

function typeLoop() {
  const current = typingText[typingIndex];
  typingElement.textContent = deleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    setTimeout(typeLoop, 1200);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    typingIndex = (typingIndex + 1) % typingText.length;
  }

  setTimeout(typeLoop, deleting ? 45 : 75);
}

typeLoop();

const panel = document.getElementById("projectPanel");
const overlay = document.getElementById("overlay");

function openProject(key, type = "project") {
  const project = type === "competition" ? competitions[key] : projects[key];

  document.getElementById("panelTitle").textContent = project.icon + " " + project.title;

  const heroImage = document.getElementById("panelHeroImg");
  heroImage.src = project.cover.local;
  heroImage.onerror = function () {
    this.onerror = null;
    this.src = project.cover.fallback;
  };

  document.getElementById("panelCaption").textContent = project.caption;
  document.getElementById("panelOverview").textContent = project.overview;

  document.getElementById("panelGallery").innerHTML = project.gallery
    .map(item => `
      <div class="gallery-card">
        ${imageTag(item[1], item[0])}
        <span>${item[0]}</span>
      </div>
    `)
    .join("");

  document.getElementById("panelFeatures").innerHTML = project.features
    .map(item => `<li>${item}</li>`)
    .join("");

  document.getElementById("panelTech").innerHTML = project.tech
    .map(item => `<span class="pill">${item}</span>`)
    .join("");

  panel.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  panel.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

document.addEventListener("click", event => {
  const card = event.target.closest(".project-card");
  if (!card) return;

  if (card.dataset.project) {
    openProject(card.dataset.project, "project");
  }

  if (card.dataset.competition) {
    openProject(card.dataset.competition, "competition");
  }
});

document.getElementById("closePanel").onclick = closeProject;
overlay.onclick = closeProject;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

const canvas = document.getElementById("bg");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;

const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

scene.add(new THREE.AmbientLight(0xffffff, 0.45));

const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(9, 2.5, 140, 20),
  new THREE.MeshStandardMaterial({
    color: 0x7c4dff,
    metalness: 0.65,
    roughness: 0.18
  })
);

knot.position.set(18, 0, -12);
scene.add(knot);

for (let i = 0; i < 280; i++) {
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );

  star.position.set(
    THREE.MathUtils.randFloatSpread(120),
    THREE.MathUtils.randFloatSpread(120),
    THREE.MathUtils.randFloatSpread(120)
  );

  scene.add(star);
}

const floatingObjects = [];
const colors = [0xb388ff, 0x00d4ff, 0xff7bd5];

for (let i = 0; i < 18; i++) {
  const geometry =
    i % 3 === 0
      ? new THREE.IcosahedronGeometry(1.2, 0)
      : i % 3 === 1
      ? new THREE.BoxGeometry(1.8, 1.8, 1.8)
      : new THREE.OctahedronGeometry(1.4, 0);

  const material = new THREE.MeshStandardMaterial({
    color: colors[i % 3],
    metalness: 0.45,
    roughness: 0.25
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(
    THREE.MathUtils.randFloatSpread(70),
    THREE.MathUtils.randFloatSpread(45),
    THREE.MathUtils.randFloat(-45, 5)
  );

  scene.add(mesh);
  floatingObjects.push(mesh);
}

document.body.onscroll = function () {
  const scrollTop = document.body.getBoundingClientRect().top;
  camera.position.z = 30 + scrollTop * -0.012;
  camera.position.x = scrollTop * -0.0008;
  camera.rotation.y = scrollTop * -0.00015;
};

function animate() {
  requestAnimationFrame(animate);

  knot.rotation.x += 0.006;
  knot.rotation.y += 0.009;
  knot.rotation.z += 0.002;

  floatingObjects.forEach((object, index) => {
    object.rotation.x += 0.005 + index * 0.0004;
    object.rotation.y += 0.006 + index * 0.0003;
  });

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});




// TECH BACKGROUND PARTICLES

const techCanvas = document.getElementById('bg');
const ctx = techCanvas.getContext('2d');

techCanvas.width = window.innerWidth;
techCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  techCanvas.width = window.innerWidth;
  techCanvas.height = window.innerHeight;
});

const nodes = [];

for (let i = 0; i < 90; i++) {
  nodes.push({
    x: Math.random() * techCanvas.width,
    y: Math.random() * techCanvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4
  });
}

function drawTechBackground() {
  ctx.clearRect(0, 0, techCanvas.width, techCanvas.height);

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];

    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(155,231,255,0.9)';
    ctx.fill();

    for (let j = i + 1; j < nodes.length; j++) {
      const m = nodes[j];

      const dist = Math.hypot(n.x - m.x, n.y - m.y);

      if (dist < 130) {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, m.y);

        ctx.strokeStyle = `rgba(179,136,255,${1 - dist / 130})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

    n.x += n.dx;
    n.y += n.dy;

    if (n.x < 0 || n.x > techCanvas.width) n.dx *= -1;
    if (n.y < 0 || n.y > techCanvas.height) n.dy *= -1;
  }

  requestAnimationFrame(drawTechBackground);
}

drawTechBackground();
