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
                  Hi, I'm <span className="gradient-text">Hamza</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-700 font-medium tracking-tight">
                  Full Stack Developer
                </p>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                  Crafting exceptional digital experiences with clean code and modern design.
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
            {/* Education Item 1 */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="university"
                    className="w-10 h-10 object-contain rounded-lg"
                    src="https://cdn.moawin.pk/images/branches/2024/07/25/fgcsr_nknLw.png"
                  />
                </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                    BS Computer Science
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    Dawood University of Engineering and Technology
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      08/2021 - Present
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="school"
                    className="w-10 h-10 object-contain rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2xaYHYzyUfqOMWq3sEEzUyIrR1vKZz9hDw&s"
                  />
                </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                    Intermediate
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    Usman Public Schooling System
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      05/2019 - 05/2021
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
          
          <div className="max-w-4xl mx-auto">
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="company"
                    className="w-10 h-10 object-contain rounded-lg bg-white p-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdeyZWDX9yQELdwBtcRoWOdWLQ4cBp2hXdg&s"
                  />
                </div>
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      Web Development Intern
                    </h3>
                    <p className="text-gray-700 font-medium text-lg">
                      360XpertSolutions
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        06/2024 - 12/2024
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Translated Figma designs into pixel-perfect code using Next.js and TailwindCSS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 mt-1 text-lg">•</span>
                      <span className="text-lg leading-relaxed">Optimized responsiveness of components for various screen sizes</span>
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
              <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Skills</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Technologies and tools I work with</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* ReactJS */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="ReactJS"
                    className="w-10 h-10 object-contain"
                    src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"
                  />
                </div>
                <h3 className="text-gray-900 font-medium text-center group-hover:text-sky-600 transition-smooth text-lg">ReactJS</h3>
              </div>
            </div>

            {/* Next.js */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="Next.js"
                    className="w-10 h-10 object-contain"
                    src="https://cdn.creazilla.com/icons/3219990/nextjs-icon-md.png"
                  />
                </div>
                <h3 className="text-gray-900 font-medium text-center group-hover:text-sky-600 transition-smooth text-lg">Next.js</h3>
              </div>
            </div>

            {/* JavaScript */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="JavaScript"
                    className="w-10 h-10 object-contain"
                    src="https://static.vecteezy.com/system/resources/previews/048/332/149/non_2x/js-icon-transparent-background-free-png.png"
                  />
                </div>
                <h3 className="text-gray-900 font-medium text-center group-hover:text-sky-600 transition-smooth text-lg">JavaScript</h3>
              </div>
            </div>

            {/* HTML & CSS */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="HTML & CSS"
                    className="w-10 h-10 object-contain"
                    src="https://image.pngaaa.com/335/3920335-middle.png"
                  />
                </div>
                <h3 className="text-gray-900 font-medium text-center group-hover:text-sky-600 transition-smooth text-lg">HTML & CSS</h3>
              </div>
            </div>

            {/* TailwindCSS */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="TailwindCSS"
                    className="w-10 h-10 object-contain"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s"
                  />
                </div>
                <h3 className="text-gray-900 font-medium text-center group-hover:text-sky-600 transition-smooth text-lg">TailwindCSS</h3>
              </div>
            </div>

            {/* Git & GitHub */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    alt="Git & GitHub"
                    className="w-10 h-10 object-contain"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bctuHVp7CoSYIgexL8-iR5EfQq-E354UnA&s"
                  />
                </div>
                <h3 className="text-gray-900 font-medium text-center group-hover:text-sky-600 transition-smooth text-lg">Git & GitHub</h3>
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
              <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Projects</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Featured projects and work I'm proud of</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <img
                      alt="Samurai Systems"
                      className="w-10 h-10 object-contain rounded-lg bg-white p-2"
                      src="https://360-samurai.vercel.app/assets/logo_black.svg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      Samurai Systems
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Developed a responsive web application with engaging UX using NextJS and TailwindCSS.
                </p>
                <a
                  href="https://360-samurai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-smooth font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <img
                      alt="Smart Assistant"
                      className="w-10 h-10 object-contain rounded-lg bg-white p-2"
                      src="https://smart-assistant-alpha.vercel.app/_next/image?url=%2Foglogo.png&w=96&q=75"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                      Smart Assistant
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Created frontend for an AI-powered HR tool to shortlist resumes based on job descriptions.
                </p>
                <a
                  href="https://smart-assistant-alpha.vercel.app/"
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
