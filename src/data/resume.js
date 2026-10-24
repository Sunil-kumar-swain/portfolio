// All portfolio content lives here. Edit this file to update your site —
// no need to touch any component.

export const profile = {
  name: "Sunil Kumar Swain",
  role: "Full Stack Developer (PHP · Laravel · React.js)",
  tagline:
    "I build backend systems that don't fall over, and interfaces that don't feel like an afterthought.",
  location: "Pune, Maharashtra",
  email: "sunilswain592@gmail.com",
  phone: "+91 9337549764",
  linkedin: "https://linkedin.com/in/sunil-swain07",
  github: "https://github.com/sunil-swain07",
  summary:
    "Results-driven Full Stack Developer with 2+ years of experience building scalable web applications. Delivered a 30% backend query performance improvement and 25% faster page loads in production. Proficient in PHP, Laravel (MVC), MySQL, JavaScript (ES6+), React.js, REST API development, Razorpay integration, and Agile/Scrum delivery.",
};

// Headline metrics pulled straight from the resume — used in the
// hero "benchmark" terminal animation.
export const heroMetrics = [
  { label: "query_performance", value: "+30%", detail: "backend optimization" },
  { label: "page_load_speed", value: "+25%", detail: "production frontend" },
  { label: "api_uptime", value: "99.9%", detail: "Render Jewellery platform" },
  { label: "post_deploy_bugs", value: "-35%", detail: "via unit test coverage" },
];

export const skills = [
  {
    group: "Server-Side",
    items: ["PHP", "Laravel (MVC)", "REST API Development", "OOP Principles", "Node.js"],
  },
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "jQuery", "Bootstrap", "AJAX"],
  },
  {
    group: "Database",
    items: ["MySQL", "SQL Query Optimization", "Database Design", "Indexing & Performance Tuning"],
  },
  {
    group: "DevOps & Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Linux (Ubuntu)", "CI/CD (basic)", "Agile/Scrum"],
  },
  {
    group: "Core",
    items: ["Full Stack Development", "RESTful API", "Payment Gateway (Razorpay)", "Session Management", "Unit Testing", "Code Review"],
  },
];

export const experience = [

    {
    title: "Software Developer",
    company: "Only-B2B",
    location: "Pune, Maharashtra, India",
    period: "November 2025 – Present",
    points: [
      "Contribute to the development and enhancement of YTDS.com using PHP, Laravel, React.js, JavaScript, HTML5, CSS3, and MySQL.",
      "Develop Proof of Concepts (POCs) for new features and technical approaches; fix bugs and issues across web applications.",
      "Work across frontend and backend development, building and maintaining application features end-to-end.",
      "Work with APIs and databases; maintain and enhance existing web applications per evolving requirements.",
      "Collaborate with the development team to implement requirements and resolve technical issues.",
    ],
  },

  {
    title: "Full Stack Developer (PHP Laravel)",
    company: "Designlope",
    location: "Bhubaneswar",
    period: "March 2025 – April 2026",
    points: [
      "Architected 5+ full-stack modules (attendance, invoicing, payment, backup) in PHP/Laravel/MySQL, reducing manual errors by ~40%.",
      "Designed and optimized 15+ RESTful API endpoints, cutting average response time by 20% via query optimization and caching.",
      "Rebuilt UI using HTML5, CSS3, Bootstrap, and React.js — improved page load speed by 25% and eliminated cross-browser issues.",
      "Wrote unit test suites covering 80%+ of critical logic, reducing post-deployment bugs by 35% across sprint cycles.",
    ],
  },
  {
    title: "Associate Full Stack Developer",
    company: "Hexan Technologies",
    location: "Remote",
    period: "May 2024 – March 2025",
    points: [
      "Optimized SQL query performance by 30% via indexing and query restructuring in PHP/Laravel, serving 10,000+ monthly active users.",
      "Integrated Razorpay payment gateway with secure PHP/REST API backend, reducing payment failure rate by 15%.",
      "Built 20+ reusable React.js and jQuery UI components, cutting front-end development time by 40% across sprint cycles.",
      "Resolved 50+ critical bugs; hardened session management and auth flows, improving security score by 25% in internal audits.",
      "Delivered across 10+ Agile/Scrum sprints with zero critical rollbacks; conducted code reviews across a team of 4 developers.",
    ],
  },
];

export const projects = [
  {
    name: "Render Jewellery",
    link: "https://renderjewellery.com",
    stack: ["PHP", "Laravel", "MySQL", "REST API", "React.js", "JavaScript"],
    points: [
      "Real-time jewelry visualization platform with secure auth and session management; reduced API latency by 35%, supporting 500+ concurrent renders.",
      "Implemented responsive React.js UI with dynamic product filtering and zoom features, improving engagement and session duration by 20%.",
      "Engineered RESTful API versioning and error-handling middleware in Laravel, achieving 99.9% API uptime.",
      "Optimized MySQL queries with composite indexing, reducing catalog load time by 40% for high-traffic peak sessions.",
    ],
  },
  {
    name: "YW Center",
    link: "https://ywcenter.com",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "AJAX"],
    points: [
      "Coach/user dashboards with performance-tuned SQL queries — reduced load time by 30% and cut bounce rate by 20%.",
      "Developed AJAX-powered real-time data updates and interactive scheduling components, eliminating full-page reloads for 500+ users.",
      "Implemented role-based access control (RBAC) for coach and user roles, reducing unauthorized access incidents to zero.",
    ],
  },
  {
    name: "Onboards.in",
    link: "https://onboards.in",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
    points: [
      "Built the full application from scratch in 6 weeks; 10+ dynamic forms, API-driven features, 100% cross-browser compatibility.",
      "Designed a normalized MySQL schema with optimized indexing, reducing query execution time by 25%.",
      "Integrated third-party REST APIs for onboarding workflows and built reusable Laravel service classes, cutting future feature development time by 30%.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Silicon University, Bhubaneswar",
    period: "2022 – 2024",
  },
  {
    degree: "Bachelor of Science (BSc)",
    school: "K.S.U.B College, Bhanjanagar",
    period: "2018 – 2021",
  },
];

export const additional = [
  {
    title: "NSS Member & Volunteer",
    period: "2022 – 2024",
    detail: "Teamwork, community engagement, collaborative problem-solving.",
  },
  {
    title: "KSUB College Student Association",
    period: "2019 – 2021",
    detail: "Peer collaboration and student-led initiatives.",
  },
];
