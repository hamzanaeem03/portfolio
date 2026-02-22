import { Mail, Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
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
                Full-Stack Developer & Tech Lead
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                Leading cross-functional teams to deliver production-ready full-stack applications with modern technologies. 10K+ users scaled. 99.9% uptime maintained.
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
                  alt="Hamza Naeem - Software Developer"
                  src="https://avatars.githubusercontent.com/u/126310544?v=4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
