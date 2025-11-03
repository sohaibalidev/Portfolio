export const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "JWT & Sessions", category: "Backend" },
  { name: "Socket.IO", category: "Backend" },

  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },

  { name: "CORS & Helmet", category: "Tools" },
  { name: "Rate Limiting", category: "Tools" },

  { name: "Git & GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Render", category: "Tools" },
  { name: "Cloudinary", category: "Tools" },
];

export const projects = [
  {
    title: "Chyloo",
    description:
      "Chyloo is a fullstack social media platform inspired by Facebook and Instagram. The frontend, built with React (Vite), Context API, and React Router, offers a fast, seamless, and fully responsive experience with authentication, user feeds, stories, posts, and real-time UI updates. The backend is a RESTful API powered by Node.js and Express, featuring secure user authentication, post management, friend systems, and a scalable architecture optimized for performance and easy integration.",
    technologies: [
      "Express",
      "Socket.io",
      "MongoDB",
      "React",
      "Cloudinary",
      "Session",
      "Bcrypt",
    ],
    demoLink: "https://chyloo.netlify.app/",
    images: [
      "/assets/projects/chyloo-1.png",
      "/assets/projects/chyloo-2.png",
      "/assets/projects/chyloo-3.png",
      "/assets/projects/chyloo-4.png",
      "/assets/projects/chyloo-5.png",
      "/assets/projects/chyloo-6.png",
    ],
    repositories: {
      frontend: "https://github.com/sohaibalidev/Chyloo-Client",
      backend: "https://github.com/sohaibalidev/Chyloo-Server",
    },
    category: "Fullstack",
    featured: true,
  },
  {
    title: "NanoCut v2",
    description:
      "A modern URL shortener built with the MERN stack, featuring user authentication, analytics, and custom short links. The system includes both client and server modules with secure JWT-based sessions, IP tracking, and a clean, responsive UI. Optimized for speed, scalability, and seamless sharing across platforms.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Resend"],
    demoLink: "https://nanocut-v2.netlify.app/",
    images: [
      "/assets/projects/nanocut-v2-1.png",
      "/assets/projects/nanocut-v2-2.png",
      "/assets/projects/nanocut-v2-3.png",
      "/assets/projects/nanocut-v2-4.png",
    ],
    repositories: {
      frontend: "https://github.com/sohaibalidev/nanocut-v2-client",
      backend: "https://github.com/sohaibalidev/nanocut-v2-server",
    },
    category: "Fullstack",
    featured: true,
  },
];

export const projectCategories = [
  "All",
  "Fullstack",
  "Frontend",
  "Backend",
  "Featured",
];

export const contact = {
  email: "msohaibaliofficial@gmail.com",
  phone: "+923324819987",
  github: "https://github.com/sohaibalidev",
  resume: "/resume.pdf",
};

export const ContactObj = contact;
