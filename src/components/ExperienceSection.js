import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Enter and Post LLC',
      location: 'Karachi, PK',
      period: 'Feb 2025 – Present',
      logo: 'EP',
      color: 'from-sky-400 to-blue-400',
      achievements: [
        'Led a cross-functional team of 4 developers to deliver multiple production-ready full-stack applications, increasing team delivery velocity by 30%',
        'Managed production environments on Cloud VPS using PM2 and Nginx, maintaining 99.9% uptime while automating SSL renewal processes',
        'Architected real-time notification systems with Socket.io, improving user engagement by 40% through instant updates on business workflows',
        'Acted as primary technical liaison for international clients, translating complex business requirements into technical roadmaps for the engineering team'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Turn Up Technologies',
      location: 'Karachi, PK',
      period: 'June 2024 – Mar 2025',
      logo: 'TU',
      color: 'from-green-400 to-teal-500',
      achievements: [
        'Engineered MERN-based solutions with complex Role-Based Access Control (RBAC) to ensure secure data handling across multiple user types',
        'Integrated Stripe for global payment processing, maintaining a 99.9% transaction success rate via automated webhook handling',
        'Optimized backend performance by implementing caching and refining MongoDB aggregation pipelines, reducing API response times by 35%',
        'Developed multi-step workflows using React state management to ensure a 0% data loss rate during complex user registration journeys'
      ]
    },
    {
      role: 'Frontend Developer',
      company: '360Xpert Solutions',
      location: 'Karachi, PK',
      period: 'Nov 2023 – June 2024',
      logo: '360',
      color: 'from-purple-400 to-pink-500',
      achievements: [
        'Built responsive interactive dashboards using React and Tailwind CSS, resulting in a 15% increase in user retention metrics',
        'Integrated RESTful APIs for real-time data visualization and implemented custom React hooks to centralize error handling logic',
        'Optimized component performance using memoization and lazy loading, reducing initial bundle size by 28%',
        'Mentored junior developers on React best practices and code organization patterns'
      ]
    }
  ];

  return (
    <section id="experience" className="space-y-16 animate-on-scroll">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-sky-500" />
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Work Experience</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Professional journey and key achievements</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
            <div className="flex items-start gap-6">
              <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-sky-500 font-bold text-sm">{exp.logo}</span>
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                    {exp.role}
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-2">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg flex-shrink-0">•</span>
                      <span className="text-lg leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
