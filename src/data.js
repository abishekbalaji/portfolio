// =============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  Everything the site displays comes from this one file.
// =============================================================

export const profile = {
  name: "Abishek B",
  shortName: "Abishek",
  logo: "Abishek.",
  role: "Full Stack Developer",
  greeting: "Hey There! Abishek Here",
  tagline: ["FULL STACK", "DEVELOPER"],
  intro:
    "I am a Full-Stack Developer passionate about creating beautiful, fast, scalable, and secure applications. Hardworking, a strong team player with great communication skills — and always ready to learn new things quickly.",
  email: "abishekbalaji7.151@gmail.com",
  phone: "+91 88258 96005",
  location: "No. 203, Mullai Street, Narasingapuram, Ranipet — 632515",
  website: "https://www.abishekbalaji.site",
  socials: {
    linkedin: "https://www.linkedin.com/in/abishek-b/",
    github: "https://github.com/abishekbalaji/",
    website: "https://www.abishekbalaji.site",
  },
};

// Numbers shown in the "About" section. Tweak freely.
export const stats = [
  { value: "20+", label: "Projects Built" },
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Technologies" },
];

export const about = {
  heading: ["Passion for", "Digital Innovation"],
  body: [
    "I build and maintain end-to-end web applications — from crafting responsive, data-rich front-ends with React, Redux, TypeScript and D3, to designing fast APIs and services with Python FastAPI and Node.js.",
    "My work spans enterprise dashboards, e-commerce platforms, cloud infrastructure-as-code, and automation. Wherever the stack goes, I care about clean architecture, performance, and a polished user experience.",
  ],
};

// Marquee words that scroll across the screen
export const marquee = ["Developer", "Full Stack", "Node", "React", "Cloud"];

// "Expertise Solutions" accordion
export const expertise = [
  {
    no: "01",
    title: "Web Development",
    desc: "Production-grade web apps with React.js, Redux, TypeScript and modern JavaScript — responsive, accessible, and fast.",
    tags: ["React.js", "Redux", "TypeScript", "JavaScript", "HTML/CSS", "SASS"],
  },
  {
    no: "02",
    title: "Backend & APIs",
    desc: "Scalable services and REST APIs using Python FastAPI, Node.js and Express, backed by SQL and NoSQL databases.",
    tags: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Oracle SQL",
    ],
  },
  {
    no: "03",
    title: "Cloud & DevOps",
    desc: "Cloud deployments and Infrastructure as Code with AWS, GCP, Docker and Terraform, plus automation in Python and Perl.",
    tags: ["AWS", "GCP", "Docker", "Terraform", "Firebase", "Linux"],
  },
  {
    no: "04",
    title: "Data & Visualization",
    desc: "Turning data into interactive, insightful dashboards and visualizations with D3.js and a strong testing discipline.",
    tags: ["D3.js", "Jest", "Jira", "Git", "Bitbucket"],
  },
];

// Portfolio gallery. `accent` controls the thumbnail gradient.
export const projects = [
  {
    title: "E-Commerce Platform",
    category: "React • Redux • Firebase",
    desc: "Full e-commerce store with Google & email auth, cart, checkout and payments.",
    url: "https://crown-clothing-ab.netlify.app/",
    accent: "lime",
    image: "./projects/ecommerce.webp",
  },
  {
    title: "GPT-3 Landing Page",
    category: "React.js",
    desc: "A sleek, modern marketing landing page for a GPT-3 product.",
    url: "https://gpt-3-ab.netlify.app/",
    accent: "violet",
    image: "./projects/gpt-3.webp",
  },
  {
    title: "The Bangs Kitchen",
    category: "Freelance • React.js",
    desc: "Promotional website prototype for The Bangs Kitchen, a takeaway shop in Chennai.",
    url: "https://the-bangs-kitchen.netlify.app/",
    accent: "teal",
    image: "./projects/bangs-kitchen.webp",
  },
  {
    title: "MindVoice Blog",
    category: "React • Redux • Firebase",
    desc: "A blogging platform with Firebase authentication and live content.",
    url: "https://mind-voice-ab.netlify.app/",
    accent: "amber",
    image: "./projects/mindvoice.webp",
  },
  {
    title: "Pokémon Pokédex",
    category: "React • PokeAPI • Firebase",
    desc: "Interactive Pokédex powered by the PokeAPI with Firebase auth.",
    url: "https://pokemon-fan-club-ab.netlify.app/",
    accent: "rose",
    image: "./projects/pokemon.webp",
  },
  {
    title: "Deepam Engineering",
    category: "Freelance • Web Development",
    desc: "Designed and deployed the promotional website for Deepam Engineering, a demolition company in Chennai.",
    url: "https://deepamengineering.in/",
    accent: "sky",
    image: "./projects/deepam.webp",
  },
];

// "Latest" featured projects (the 3-card grid)
export const featured = [
  {
    tag: "Machine Learning",
    title: "Twitter Sentiment Analysis",
    desc: "Android & web app analysing Twitter sentiment in real time, built with Python.",
    url: "https://github.com/abishekbalaji/sentiment-analysis",
  },
  {
    tag: "Full Stack",
    title: "Blood Bank Management",
    desc: "A full-stack blood bank management system using Node.js, Handlebars and MongoDB.",
    url: "https://github.com/abishekbalaji/bloodbank-node-heroku",
  },
  {
    tag: "Game / Desktop",
    title: "Rocket Boost & More",
    desc: "A multi-platform game in Unity/C#, plus a Java + MySQL library manager.",
    url: "https://github.com/abishekbalaji/_unity-Project-Boost",
  },
  {
    tag: "Computer Vision",
    title: "Credit Card Face Auth",
    desc: "Face-verification for credit cards using Python, AWS Rekognition, S3 and the Haar Cascade algorithm.",
    url: "https://github.com/abishekbalaji/credit-card-face-verification",
  },
  {
    tag: "E-Commerce",
    title: "Green Tea Store",
    desc: "Green tea e-commerce front-end with Google & email auth (React, Redux, Firebase). Full-stack Node version with Express, Handlebars and MongoDB.",
    url: "https://green-tea-ab.netlify.app/",
  },
];

// Professional experience — shown as a navigable timeline
export const experience = [
  {
    company: "CitiusTech",
    role: "Senior Software Engineer",
    period: "Dec 2025 – Present", // <-- update with your exact CitiusTech start date
    points: [
      "Building and maintaining scalable healthcare technology applications.",
      "Delivering modern front-end and full-stack solutions across the product suite.",
    ],
  },
  {
    company: "Applied Materials",
    role: "Senior Software Engineer",
    period: "Jul 2023 – Dec 2025", // <-- update end date to match your move to CitiusTech
    points: [
      "Built and maintained multiple Applied dashboard applications using React.js, Redux, TypeScript and D3.",
      "Developed backend services and APIs with Python FastAPI and Node.js.",
    ],
  },
  {
    company: "Ribbon Communications",
    role: "Software Engineering Technical Analyst",
    period: "Aug 2021 – Jun 2023",
    points: [
      "Built and maintained multiple Ribbon applications using React.js, Redux and Node.js.",
      "Implemented Infrastructure as Code with Terraform and automation scripts in Python and Perl.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Selected client work",
    points: [
      "Built and deployed a promotional website for Deepam Engineering, a Chennai demolition company.",
      "Prototyped a website for The Bangs Kitchen takeaway shop in Chennai using React.js.",
    ],
  },
];

// Awards & Recognitions (shown on the year grid)
export const awards = [
  {
    year: "2020",
    title: "Smart India Hackathon — Winner",
    desc: "National winner of the Government of India’s flagship Smart India Hackathon.",
  },
  {
    year: "2022",
    title: "Technothon — 2nd Runner-up",
    desc: "International hackathon organised by Ribbon Communications for its employees.",
  },
  {
    year: "2021",
    title: "B.E. Computer Science — Gold Medal",
    desc: "Anna University (UCE, BIT Campus). Graduated with 8.85 CGPA.",
  },
  {
    year: "2016",
    title: "Class XII — 97%",
    desc: "DAV BHEL School. Class X completed with a perfect 10 CGPA.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];
