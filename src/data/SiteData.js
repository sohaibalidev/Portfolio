export const skills = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', category: 'Frontend' },
  { name: 'HTML5 & CSS3', category: 'Frontend' },

  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Socket.IO', category: 'Backend' },

  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },

  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Cloudinary', category: 'Tools' },
  { name: 'Netlify', category: 'Tools' },
  { name: 'Render', category: 'Tools' },
];

export const projects = [
  {
    title: 'Chyloo',
    description:
      'Chyloo is a fullstack social media platform inspired by Facebook and Instagram. It offers a dynamic, real-time experience with authentication, posts, stories, and friend systems. The frontend is built with React (Vite), Context API, and React Router for seamless performance, while the backend uses Node.js and Express with secure sessions, scalable architecture, and optimized database operations powered by MongoDB.',
    technologies: ['Express', 'Socket.io', 'MongoDB', 'React', 'Cloudinary', 'Session', 'Bcrypt'],
    demoLink: 'https://chyloo.netlify.app/',
    images: [
      '/assets/projects/chyloo-1.png',
      '/assets/projects/chyloo-2.png',
      '/assets/projects/chyloo-3.png',
      '/assets/projects/chyloo-4.png',
      '/assets/projects/chyloo-5.png',
      '/assets/projects/chyloo-6.png',
    ],
    repositories: {
      frontend: 'https://github.com/sohaibalidev/Chyloo-Client',
      backend: 'https://github.com/sohaibalidev/Chyloo-Server',
    },
    category: 'Fullstack',
    featured: true,
  },
  {
    title: 'NanoCut v2',
    description:
      'NanoCut v2 is a modern, fullstack URL shortener built with the MERN stack. It features secure authentication, link analytics, and customizable short URLs. The project includes a clean, responsive frontend built with React and a powerful backend using Node.js, Express, and MongoDB, ensuring high performance, scalability, and reliable session handling with JWT.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Resend'],
    demoLink: 'https://nanocut-v2.netlify.app/',
    images: [
      '/assets/projects/nanocut-v2-1.png',
      '/assets/projects/nanocut-v2-2.png',
      '/assets/projects/nanocut-v2-3.png',
      '/assets/projects/nanocut-v2-4.png',
    ],
    repositories: {
      frontend: 'https://github.com/sohaibalidev/nanocut-v2-client',
      backend: 'https://github.com/sohaibalidev/nanocut-v2-server',
    },
    category: 'Fullstack',
    featured: true,
  },
  {
    title: 'ReactCast',
    description:
      'ReactCast is a modern weather web app built with React. It delivers real-time data, forecasts, and city-based insights with a sleek dark UI. The app uses external APIs and is optimized for responsiveness, accessibility, and smooth performance.',
    technologies: ['React', 'API Integration', 'CSS Modules'],
    demoLink: 'https://reactcast.netlify.app/',
    images: ['/assets/projects/reactcast.png'],
    repositories: {
      frontend: 'https://github.com/sohaibalidev/ReactCast',
    },
    category: 'Frontend',
    featured: false,
  },
  {
    title: 'NanoCut',
    description:
      'NanoCut is a modern backend-focused URL shortener with static HTML pages. It features secure link management, analytics, and customizable short URLs. Built with Node.js, Express, and MongoDB, it ensures high performance, scalability, and reliable session handling with JWT.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    demoLink: 'https://nanocut.onrender.com/',
    images: [
      '/assets/projects/nanocut-1.png',
      '/assets/projects/nanocut-2.png',
      '/assets/projects/nanocut-3.png',
      '/assets/projects/nanocut-4.png',
    ],
    repositories: {
      single: 'https://github.com/sohaibalidev/nanocut',
    },
    category: 'Fullstack',
    featured: false,
  },
  {
    title: 'Wrikos',
    description:
      'Wrikos is a basic fullstack todo app with simple login and registration using MongoDB. It allows users to manage their todos efficiently with a minimalistic, clean interface. The frontend is built with React, and the backend uses Node.js, Express, and MongoDB to handle authentication and data storage.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    demoLink: 'https://wrikos.netlify.app/',
    images: ['/assets/projects/wrikos-1.png', '/assets/projects/wrikos-2.png'],
    repositories: {
      frontend: 'https://github.com/sohaibalidev/wrikos-client',
      backend: 'https://github.com/sohaibalidev/wrikos-server',
    },
    category: 'Fullstack',
    featured: false,
  },
  {
    title: 'Poll Verse',
    description:
      'PollVerse is a quick and simple fullstack web app for creating and answering polls. It has a clean 3-page flow - landing, create poll, and answer poll - where users can easily make polls with a name, question, and up to 10 answers. Supports single or multiple choices and uses cookies for lightweight, session-based functionality with basic security.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cookies'],
    demoLink: 'https://poll-verse.netlify.app/',
    images: [
      '/assets/projects/poll-verse-1.png',
      '/assets/projects/poll-verse-2.png',
      '/assets/projects/poll-verse-3.png',
      '/assets/projects/poll-verse-4.png',
    ],
    repositories: {
      frontend: 'https://github.com/sohaibalidev/pollverse-client',
      backend: 'https://github.com/sohaibalidev/pollverse-server',
    },
    category: 'Fullstack',
    featured: true,
  },
];

export const projectCategories = ['All', 'Fullstack', 'Frontend', 'Backend', 'Featured'];

export const contact = {
  email: 'msohaibaliofficial@gmail.com',
  phone: '+92 332 4819987',
  github: 'https://github.com/sohaibalidev',
  resume: '/resume.pdf',
};

export const ContactObj = contact;
