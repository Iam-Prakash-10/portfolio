export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'AI / ML' | 'Full Stack' | 'Web Apps' | 'All';
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    iconUrl?: string;
    color?: string;
  }[];
}

export interface ExperienceItem {
  period?: string;
  role: string;
  company: string;
  location?: string;
  type: 'Work' | 'Education' | 'Leadership';
  description: string[];
  technologies: string[];
}

export const personalInfo = {
  name: "Prakash Roy",
  role: "AI/ML Engineer & Full Stack Developer",
  avatar: "/images/profile-pic.png",
  tagline: "Bridging Electronics & Communication with Intelligent Software, Modern Web Apps, and Applied Machine Learning.",
  availability: "Actively seeking roles in AI/ML, Full Stack & Data Analytics",
  location: "India",
  email: "prakashroy9626@gmail.com",
  github: "https://github.com/Iam-Prakash-10",
  linkedin: "https://www.linkedin.com/in/prakash-roy-688029279",
  twitter: "https://x.com/Its_prakash_10",
  bio: "I am an Electronics and Communication Engineering (ECE) student (2023–2027) passionate about building high-performance web systems, machine learning pipelines, and data-driven solutions. My background in signal processing, embedded logic, and mathematical fundamentals gives me a unique low-level perspective on software architecture, algorithmic efficiency, and scalable AI applications.",
  stats: [
    { label: "Completed Projects", value: "10+" },
    { label: "Lines of Code", value: "100k+" },
    { label: "LeetCode Problems", value: "100+" },
    { label: "Core Technologies", value: "15+" },
  ]
};

export const techStack: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: [
      { name: "LangChain", level: "Advanced", color: "#10b981" },
      { name: "Hugging Face", level: "Advanced", color: "#f59e0b" },
      { name: "Gemini / OpenAI API", level: "Expert", color: "#06b6d4" },
      { name: "Vector Embeddings & RAG", level: "Advanced", color: "#8b5cf6" },
      { name: "FastAPI / PyTorch", level: "Proficient", color: "#ef4444" },
      { name: "Semantic Search", level: "Advanced", color: "#3b82f6" },
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Expert", color: "#06b6d4" },
      { name: "Next.js (App Router)", level: "Advanced", color: "#ffffff" },
      { name: "TypeScript", level: "Advanced", color: "#3b82f6" },
      { name: "Tailwind CSS", level: "Expert", color: "#38bdf8" },
      { name: "Framer Motion", level: "Advanced", color: "#ec4899" },
      { name: "Vite", level: "Expert", color: "#a855f7" },
    ]
  },
  {
    title: "Backend & Databases",
    icon: "Server",
    skills: [
      { name: "Python", level: "Expert", color: "#3b82f6" },
      { name: "Node.js & Express", level: "Advanced", color: "#22c55e" },
      { name: "PostgreSQL & Supabase", level: "Advanced", color: "#10b981" },
      { name: "MongoDB", level: "Proficient", color: "#16a34a" },
      { name: "Redis", level: "Proficient", color: "#dc2626" },
      { name: "REST & GraphQL APIs", level: "Advanced", color: "#f97316" },
    ]
  },
  {
    title: "DevOps & Cloud Tools",
    icon: "Cpu",
    skills: [
      { name: "Docker", level: "Proficient", color: "#2563eb" },
      { name: "Git & GitHub", level: "Expert", color: "#f43f5e" },
      { name: "Vercel & Netlify", level: "Expert", color: "#06b6d4" },
      { name: "AWS / Google Cloud", level: "Proficient", color: "#f59e0b" },
      { name: "CI/CD Pipelines", level: "Advanced", color: "#8b5cf6" },
      { name: "Linux & Bash", level: "Advanced", color: "#e2e8f0" },
    ]
  }
];

export const projects: Project[] = [
  {
    id: "resume-checker",
    title: "AI Resume Analyzer & ATS Scorer",
    tagline: "ML-Powered Resume Parsing, Semantic Job Matching & Roadmaps",
    description: "Intelligent resume analyzer using Sentence-BERT embeddings and scikit-learn for accurate job role matching. Calculates ATS scores, detects missing skills, and provides personalized learning recommendations.",
    category: "AI / ML",
    tags: ["Python", "Streamlit", "BERT", "NLP", "scikit-learn", "Pandas"],
    metrics: "94% Match Accuracy",
    liveUrl: "https://github.com/Iam-Prakash-10/Resume_checker",
    githubUrl: "https://github.com/Iam-Prakash-10/Resume_checker",
    image: "/images/resume-checker.png",
    featured: true,
    highlights: [
      "Sentence-BERT contextual cosine similarity for job-resume alignment",
      "Automated skill extraction and missing competencies breakdown",
      "Real-time ATS score calculation with actionable resume feedback"
    ]
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Master — Interactive Game & Engine",
    tagline: "Full-Featured Sudoku with Procedural Generation & Record System",
    description: "Modern web-based Sudoku game featuring procedural backtracking puzzle generation, multiple difficulty tiers, real-time hint algorithms, and persistent user records.",
    category: "Web Apps",
    tags: ["HTML5", "CSS3", "JavaScript", "Backtracking", "LocalStorage"],
    metrics: "50k+ Puzzles Generated",
    liveUrl: "https://github.com/Iam-Prakash-10/Sudoku-solver",
    githubUrl: "https://github.com/Iam-Prakash-10/Sudoku-solver",
    image: "/images/sudoku-dashboard.png",
    featured: true,
    highlights: [
      "Procedural backtracking algorithm for unique guaranteed-solvable puzzle generation",
      "Three difficulty levels with heuristic validation and smart hint system",
      "User profile with statistics, daily records, and tier ranking system"
    ]
  },
  {
    id: "ecoshakti",
    title: "EcoShakti — Renewable Energy Dashboard",
    tagline: "Real-Time Green Energy Monitoring & Carbon Impact Analytics",
    description: "Full-stack sustainability platform for tracking renewable energy generation, consumption patterns, and environmental impact. Features real-time data visualization and predictive forecasting.",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    metrics: "Real-time IoT Integration",
    liveUrl: "https://github.com/Iam-Prakash-10/EcoShakti",
    githubUrl: "https://github.com/Iam-Prakash-10/EcoShakti",
    image: "/images/ecoshakti-dashboard.png",
    featured: true,
    highlights: [
      "Real-time IoT sensor data ingestion and time-series visualization",
      "Predictive energy generation modeling with ML forecasts",
      "Carbon footprint calculator with goal tracking and sustainability reporting"
    ]
  },
  {
    id: "distance-measurement",
    title: "Acoustic Distance Measurement System",
    tagline: "Web Audio API-Based Distance Estimation using Sound Intensity",
    description: "Innovative web application using Web Audio API and inverse square law acoustics to estimate real-time distance based on sound intensity. Includes calibration system and live waveform visualization.",
    category: "Web Apps",
    tags: ["React", "Web Audio API", "TypeScript", "Tailwind CSS", "Canvas"],
    metrics: "< 100ms Latency",
    liveUrl: "https://github.com/Iam-Prakash-10/Sound-Measurement-system",
    githubUrl: "https://github.com/Iam-Prakash-10/Sound-Measurement-system",
    image: "/images/distance-measurement.png",
    featured: true,
    highlights: [
      "Web Audio API microphone capture and real-time FFT frequency analysis",
      "Inverse square law mathematical physics for acoustic distance calculation",
      "Live canvas waveform and decibel sound intensity level visualization"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Full Stack & AI Engineer",
    company: "Projects & Independent Development",
    type: "Work",
    description: [
      "Architected and deployed production-grade AI applications including RAG chatbots, ATS resume evaluators, and autonomous agents.",
      "Engineered responsive, accessible, and ultra-fast web frontends using React, Next.js, and Tailwind CSS.",
      "Integrated secure authentication, Supabase vector databases, and RESTful APIs handling thousands of monthly requests."
    ],
    technologies: ["React", "Next.js", "Python", "LangChain", "Tailwind CSS", "Supabase"]
  },
  {
    role: "Frontend Developer & UI/UX Contributor",
    company: "Web Projects & Open Source",
    type: "Work",
    description: [
      "Designed and coded modern user interfaces with smooth micro-interactions and cross-device responsiveness.",
      "Collaborated on open-source repositories to improve performance, accessibility, and documentation.",
      "Implemented state management systems and reusable component design systems."
    ],
    technologies: ["JavaScript", "React", "HTML5/CSS3", "Git", "Figma"]
  },
  {
    period: "2023 - 2027",
    role: "B.Tech in Electronics & Communication Engineering",
    company: "University Education",
    location: "India",
    type: "Education",
    description: [
      "Rigorous coursework in Digital Signal Processing (DSP), Microprocessors & Embedded Systems, Linear Algebra, Probability, and Computer Architecture.",
      "Applied hardware and mathematical principles to modern software: developing ML models, real-time audio FFT signal processing, and IoT renewable energy analytics.",
      "Bridging the physical and digital domains with high-performance algorithms, data structures, and full-stack web applications."
    ],
    technologies: ["Digital Signal Processing", "Python", "C/C++", "Data Structures", "Algorithms", "Machine Learning", "Linear Algebra"]
  }
];
