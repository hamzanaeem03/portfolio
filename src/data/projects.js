export const projects = [
  {
    id: 1,
    name: 'The Trade Core',
    subtitle: 'UK Trades Marketplace',
    description: 'Developed a homeowner-to-trade marketplace featuring automated recurring billing and subscription management via Prisma and PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    color: 'from-sky-400 to-blue-400',
    initials: 'TC',
    features: [
      'Automated recurring billing system',
      'Subscription management with Prisma',
      'PostgreSQL database architecture',
      'AWS EC2 and RDS deployment'
    ],
    metrics: [
      { value: '500+', label: 'Active Traders' },
      { value: '99.9%', label: 'Uptime' },
      { value: '45%', label: 'Faster Load Times' }
    ],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'AWS', 'Stripe'],
    link: 'https://app.thetradecore.com',
    highlight: true
  },
  {
    id: 2,
    name: 'Acewall Scholars',
    subtitle: 'Full-Stack LMS Platform',
    description: 'Scaled a Learning Management System to support 10,000+ active users by implementing automated course enrollment via Stripe webhooks and real-time messaging.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    color: 'from-green-400 to-teal-500',
    initials: 'AS',
    features: [
      '10,000+ active user support',
      'Stripe webhook automation',
      'Real-time messaging with Socket.io',
      'Advanced analytics dashboard'
    ],
    metrics: [
      { value: '10K+', label: 'Active Users' },
      { value: '45%', label: 'Response Latency Reduction' },
      { value: '99.9%', label: 'System Availability' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe', 'Docker'],
    link: 'https://acewallscholarslearningonline.com',
    highlight: true
  },
  {
    id: 3,
    name: 'AI Content Generator',
    subtitle: 'ML-Powered Content Platform',
    description: 'Built a cutting-edge content generation platform using GPT integration with real-time streaming, multi-language support, and advanced caching strategies.',
    image: 'https://images.unsplash.com/photo-1677442d019cecf5e5b3c93b40e9b83b79909c825?w=800&h=600&fit=crop',
    color: 'from-purple-400 to-pink-500',
    initials: 'ACG',
    features: [
      'Real-time GPT integration with streaming',
      'Multi-language content generation',
      'Advanced caching with Redis',
      'Usage analytics and credits system'
    ],
    metrics: [
      { value: '2M+', label: 'Requests/Month' },
      { value: '85%', label: 'User Satisfaction' },
      { value: '200ms', label: 'Avg Response Time' }
    ],
    technologies: ['Next.js', 'OpenAI API', 'Redis', 'PostgreSQL', 'Vercel', 'Tailwind'],
    link: '#',
    highlight: true
  },
  {
    id: 4,
    name: 'Real-time Analytics Dashboard',
    subtitle: 'Enterprise Data Visualization',
    description: 'Engineered a comprehensive analytics dashboard with real-time data updates, complex filtering, and export capabilities serving 50+ enterprise clients.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: 'from-orange-400 to-red-500',
    initials: 'RAD',
    features: [
      'Real-time data streaming',
      'Custom chart builder',
      'Advanced filtering and drill-down',
      'Scheduled report generation'
    ],
    metrics: [
      { value: '50+', label: 'Enterprise Clients' },
      { value: '1000+', label: 'Data Points/sec' },
      { value: '99.95%', label: 'SLA Achieved' }
    ],
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'WebSocket', 'PostgreSQL'],
    link: '#',
    highlight: false
  }
];
