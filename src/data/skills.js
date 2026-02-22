export const skills = {
  languages: [
    { name: 'JavaScript (ES6+)', proficiency: 95, level: 'expert' },
    { name: 'TypeScript', proficiency: 85, level: 'proficient' },
    { name: 'SQL (PostgreSQL)', proficiency: 90, level: 'expert' },
    { name: 'NoSQL (MongoDB)', proficiency: 88, level: 'proficient' },
    { name: 'HTML5 & CSS3', proficiency: 95, level: 'expert' },
  ],
  frontend: [
    { name: 'React', proficiency: 95, level: 'expert' },
    { name: 'Next.js', proficiency: 92, level: 'expert' },
    { name: 'Tailwind CSS', proficiency: 95, level: 'expert' },
    { name: 'ShadCN/UI', proficiency: 90, level: 'proficient' },
    { name: 'Redux Toolkit', proficiency: 85, level: 'proficient' },
    { name: 'Socket.io', proficiency: 88, level: 'proficient' },
    { name: 'React Query', proficiency: 82, level: 'proficient' },
  ],
  backend: [
    { name: 'Node.js', proficiency: 93, level: 'expert' },
    { name: 'Express.js', proficiency: 92, level: 'expert' },
    { name: 'Mongoose', proficiency: 85, level: 'proficient' },
    { name: 'Prisma ORM', proficiency: 90, level: 'proficient' },
    { name: 'REST APIs', proficiency: 94, level: 'expert' },
    { name: 'GraphQL', proficiency: 75, level: 'learning' },
  ],
  devops: [
    { name: 'AWS (EC2, S3, RDS)', proficiency: 88, level: 'proficient' },
    { name: 'Docker', proficiency: 85, level: 'proficient' },
    { name: 'GitHub Actions (CI/CD)', proficiency: 87, level: 'proficient' },
    { name: 'Nginx', proficiency: 82, level: 'proficient' },
    { name: 'PM2', proficiency: 85, level: 'proficient' },
    { name: 'Vercel', proficiency: 90, level: 'proficient' },
    { name: 'Git', proficiency: 92, level: 'expert' },
  ],
  monitoring: [
    { name: 'Sentry', proficiency: 85, level: 'proficient' },
    { name: 'Prometheus', proficiency: 78, level: 'proficient' },
    { name: 'Grafana', proficiency: 80, level: 'proficient' },
    { name: 'DataDog', proficiency: 75, level: 'learning' },
  ],
};

export const groupedSkills = [
  {
    category: 'Languages',
    icon: 'Code',
    skills: skills.languages,
    description: 'Programming languages and markup'
  },
  {
    category: 'Frontend Development',
    icon: 'Zap',
    skills: skills.frontend,
    description: 'Client-side technologies and frameworks'
  },
  {
    category: 'Backend Development',
    icon: 'Server',
    skills: skills.backend,
    description: 'Server-side technologies and databases'
  },
  {
    category: 'DevOps & Tools',
    icon: 'Settings',
    skills: skills.devops,
    description: 'Infrastructure and deployment tools'
  },
  {
    category: 'Monitoring & Analytics',
    icon: 'BarChart3',
    skills: skills.monitoring,
    description: 'Performance monitoring and observability'
  },
];
