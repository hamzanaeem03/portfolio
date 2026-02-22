import Image from "next/image";
import { Mail, Github, Linkedin, ExternalLink, MapPin, Calendar, Briefcase, GraduationCap, Code, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass transition-smooth">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-display font-bold text-gray-900 tracking-tight">HN</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-sky-500 transition-smooth font-medium">Home</a>
              <a href="#education" className="text-gray-600 hover:text-sky-500 transition-smooth font-medium">Education</a>
              <a href="#experience" className="text-gray-600 hover:text-sky-500 transition-smooth font-medium">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-sky-500 transition-smooth font-medium">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-sky-500 transition-smooth font-medium">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-sky-500 transition-smooth font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-on-scroll-left">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-sky-50 border border-sky-200 rounded-full text-sm font-medium text-sky-700">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse-slow"></span>
                  Available for work
                </div>
                <h1 className="text-6xl lg:text-8xl font-display font-bold text-gray-900 leading-tight tracking-tight">
                  Hi, I'm <span className="gradient-text">Hamza Naeem</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-700 font-medium tracking-tight">
                  Software Developer
                </p>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                  Leading cross-functional teams to deliver production-ready full-stack applications with modern technologies.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-2xl transition-smooth hover-lift font-medium shadow-lg shadow-sky-500/25"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
                <a 
                  href="https://github.com/hamzanaeem03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-2xl transition-smooth hover-lift font-medium"
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </div>

              <div className="flex gap-6 pt-6">
                <a href="mailto:mhamzanaeem03@gmail.com" className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                </a>
                <a href="https://github.com/hamzanaeem03" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group">
                  <Github className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                </a>
                <a href="https://linkedin.com/in/hamzanaeem03" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group">
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-on-scroll-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur-3xl opacity-30 animate-float-slow"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl hover-lift">
                  <img
                    className="w-full h-full object-cover"
                    alt="profile"
                    src="https://avatars.githubusercontent.com/u/126310544?v=4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20 space-y-24">
        {/* Education Section */}
        <section id="education" className="space-y-16 animate-on-scroll">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-sky-500" />
              </div>
              <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Education</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">My academic journey and educational background</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* BS Computer Science */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-sky-500" />
                  </div>
                </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                    BS in Computer Science
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    Dawood University of Engineering and Technology
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Expected Sept 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="space-y-16 animate-on-scroll">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-sky-500" />
              </div>
              <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Work Experience</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Professional journey and achievements</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Software Developer - Enter and Post LLC */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-sky-500 font-bold text-sm">EP</span>
                  </div>
                </div>
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      Software Developer
                    </h3>
                    <p className="text-gray-700 font-medium text-lg">
                      Enter and Post LLC
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Karachi, PK
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Feb 2025 – Present
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Led a cross-functional team of 4 developers to deliver multiple production-ready full-stack applications, increasing team delivery velocity by 30%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Managed production environments on Cloud VPS using PM2 and Nginx, maintaining 99.9% uptime while automating SSL renewal processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Architected real-time notification systems with Socket.io, improving user engagement by 40% through instant updates on business workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Acted as primary technical liaison for international clients, translating complex business requirements into technical roadmaps for the engineering team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Full Stack Developer - Turn Up Technologies */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-green-500 font-bold text-sm">TU</span>
                  </div>
                </div>
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      Full Stack Developer
                    </h3>
                    <p className="text-gray-700 font-medium text-lg">
                      Turn Up Technologies
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Karachi, PK
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        June 2024 – Mar 2025
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Engineered MERN-based solutions with complex Role-Based Access Control (RBAC) to ensure secure data handling across multiple user types</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Integrated Stripe for global payment processing, maintaining a 99.9% transaction success rate via automated webhook handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Optimized backend performance by implementing caching and refining MongoDB aggregation pipelines, reducing API response times by 35%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Developed multi-step workflows using React state management to ensure a 0% data loss rate during complex user registration journeys</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frontend Developer - 360Xpert Solutions */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-purple-500 font-bold text-sm">360</span>
                  </div>
                </div>
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      Frontend Developer
                    </h3>
                    <p className="text-gray-700 font-medium text-lg">
                      360Xpert Solutions
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Karachi, PK
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Nov 2023 – June 2024
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Built responsive interactive dashboards using React and Tailwind CSS, resulting in a 15% increase in user retention metrics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Integrated RESTful APIs for real-time data visualization and implemented custom React hooks to centralize error handling logic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-16 animate-on-scroll">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-sky-500" />
              </div>
              <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Skills & Expertise</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Technologies and tools I work with professionally</p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Languages */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['JavaScript (ES6+)', 'SQL (PostgreSQL)', 'NoSQL (MongoDB)'].map((skill) => (
                  <div key={skill} className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center hover:border-sky-300 transition-smooth hover-lift shadow-sm">
                    <span className="text-gray-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['React', 'Next.js', 'Tailwind CSS', 'ShadCN/UI', 'Redux Toolkit', 'Socket.io'].map((skill) => (
                  <div key={skill} className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center hover:border-sky-300 transition-smooth hover-lift shadow-sm">
                    <span className="text-gray-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Node.js', 'Express.js', 'Mongoose', 'Prisma ORM', 'REST APIs'].map((skill) => (
                  <div key={skill} className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center hover:border-sky-300 transition-smooth hover-lift shadow-sm">
                    <span className="text-gray-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DevOps & Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['AWS (EC2, S3, RDS)', 'Docker', 'GitHub Actions (CI/CD)', 'Nginx', 'PM2', 'Vercel', 'Git'].map((skill) => (
                  <div key={skill} className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center hover:border-sky-300 transition-smooth hover-lift shadow-sm">
                    <span className="text-gray-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring & Analytics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Sentry', 'Prometheus', 'Grafana'].map((skill) => (
                  <div key={skill} className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center hover:border-sky-300 transition-smooth hover-lift shadow-sm">
                    <span className="text-gray-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-16 animate-on-scroll">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-sky-500" />
              </div>
              <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Featured Projects</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Production-ready applications I've built and deployed</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* The Trade Core */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-sky-500 font-bold text-xs">TC</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      The Trade Core
                    </h3>
                    <p className="text-gray-600 font-medium">UK Trades Marketplace</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Developed a homeowner-to-trade marketplace featuring automated recurring billing and subscription management via Prisma and PostgreSQL.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Key Features:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Automated recurring billing system</li>
                    <li>• Subscription management with Prisma</li>
                    <li>• PostgreSQL database architecture</li>
                    <li>• AWS EC2 and RDS deployment</li>
                  </ul>
                </div>
                <a
                  href="https://app.thetradecore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-smooth font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              </div>
            </div>

            {/* Acewall Scholars */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-green-500 font-bold text-xs">AS</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      Acewall Scholars
                    </h3>
                    <p className="text-gray-600 font-medium">Full-Stack LMS Platform</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Scaled a Learning Management System to support 10,000+ active users by implementing automated course enrollment via Stripe webhooks.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Key Features:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 10,000+ active user support</li>
                    <li>• Stripe webhook automation</li>
                    <li>• Real-time messaging with Socket.io</li>
                    <li>• 45% reduction in response latency</li>
                  </ul>
                </div>
                <a
                  href="https://acewallscholarslearningonline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-smooth font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-16 animate-on-scroll">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-sky-500" />
              </div>
              <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Get in Touch</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Feel free to reach out for collaborations or inquiries!</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover-lift">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-sky-500" />
                      <a href="mailto:mhamzanaeem03@gmail.com" className="text-gray-700 hover:text-sky-500 transition-smooth font-medium">
                        mhamzanaeem03@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-sky-500" />
                      <span className="text-gray-700 font-medium">Karachi, Pakistan</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <a href="mailto:mhamzanaeem03@gmail.com" className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group">
                      <Mail className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                    </a>
                    <a href="https://github.com/hamzanaeem03" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group">
                      <Github className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                    </a>
                    <a href="https://linkedin.com/in/hamzanaeem03" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group">
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover-lift">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-smooth"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-smooth"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-smooth resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-4 px-6 rounded-xl transition-smooth hover-lift flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center font-light">
                    I'll get back to you within 24-48 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="profile"
                  src="https://avatars.githubusercontent.com/u/126310544?v=4"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 tracking-tight">Hamza Naeem</h3>
                <p className="text-gray-600 text-sm font-light">Full Stack Developer</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:mhamzanaeem03@gmail.com"
                className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
              </a>
              <a
                href="https://github.com/hamzanaeem03"
                className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
              </a>
              <a
                href="https://linkedin.com/in/hamzanaeem03"
                className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Hamza Naeem. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
