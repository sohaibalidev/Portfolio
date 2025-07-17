const skills = [
    // Core Fullstack Skills (Top Priority)
    { name: 'React.js', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'HTML5 & CSS3', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'JWT & Sessions', category: 'Backend' },
    { name: 'Authorization', category: 'Backend' },

    // Real-Time & Security
    { name: 'Socket.IO', category: 'Backend' },
    { name: 'Rate Limiting', category: 'Security' },
    { name: 'Input Validation', category: 'Security' },
    { name: 'CORS & Helmet', category: 'Security' },

    // Tooling & Deployment
    { name: 'Git & GitHub', category: 'Tooling' },
    { name: 'Netlify', category: 'Deployment' },
    { name: 'Vercel', category: 'Deployment' },
    { name: 'Render', category: 'Deployment' },

    // Other Enhancements
    { name: 'Redis (Caching)', category: 'Database' },
    { name: 'Node Mailer', category: 'Email Service' },
    { name: 'Cloudinary', category: 'Media CDN' },
    { name: 'Web3Forms', category: 'Form Handling' }
];

const projects = [
    {
        title: 'NexaEase',
        description: 'A fullstack e-commerce platform with user accounts, wishlist, cart, MongoDB backend, Cloudinary image storage, and email notifications.',
        technologies: ['Express', 'MongoDB', 'Nodemailer', 'Cloudinary'],
        githubLink: 'https://github.com/muhammadsohaibali/nexaease',
        demoLink: 'https://nexaease.netlify.app/',
        image: '/assets/projects/nexaease-preview.png'
    },
    {
        title: 'ReactCast',
        description: 'A responsive weather app using WeatherAPI and Geonames, built with React and JavaScript.',
        technologies: ['React.js', 'WeatherAPI', 'Geonames', 'JavaScript'],
        githubLink: 'https://github.com/sohaibalidev/ReactCast',
        demoLink: 'https://reactcast.netlify.app/',
        image: '/assets/projects/reactcast-preview.png'
    },
    {
        title: 'Loopin Social Platform',
        description: 'A real-time social platform backend with RESTful APIs, secure authentication, and image upload support.',
        technologies: ['Express', 'MongoDB', 'NodeMailer', 'Socket.IO', 'Bcrypt', 'Cloudinary'],
        githubLink: 'https://github.com/muhammadsohaibali/Loopin',
        demoLink: 'https://loopin-social-platform.onrender.com/',
        image: '/assets/projects/loopin-review.png'
    },
    {
        title: 'Shortify',
        description: 'A lightweight URL shortener with JWT email verification, auth system, and a dark/light themed dashboard.',
        technologies: ['Express', 'MongoDB', 'NodeMailer', 'JWT', 'Bcrypt'],
        githubLink: 'https://github.com/sohaibalidev/Shortify',
        demoLink: 'https://url-shortener-shortify.onrender.com/',
        image: '/assets/projects/shortify-preview.png'
    },
    {
        title: 'Wrikos',
        description: 'A responsive and secure task manager app with user authentication, light/dark theme, and persistent task storage.',
        technologies: ['Express', 'MongoDB', 'JWT', 'Bcrypt', 'Reactjs'],
        githubLink: 'https://github.com/sohaibalidev/Wrikos-client',
        demoLink: 'https://wrikos.netlify.app/',
        image: '/assets/projects/wrikos-preview.png'
    }
];

const ContactObj = {
    github: 'https://github.com/sohaibalidev',
    email: 'msohaibaliofficial@gmail.com',
    phone: '+923324819987',
    resume: 'Resume.pdf'
};

module.exports = { skills, projects, ContactObj };
