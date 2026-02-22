import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm hover-lift">
              <img
                className="w-full h-full object-cover"
                alt="Hamza Naeem - Profile"
                src="https://avatars.githubusercontent.com/u/126310544?v=4"
              />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-gray-900 tracking-tight">Hamza Naeem</h3>
              <p className="text-gray-600 text-sm font-light">Full Stack Developer & Tech Lead</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:mhamzanaeem03@gmail.com"
              className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
            </a>
            <a
              href="https://github.com/hamzanaeem03"
              className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
            </a>
            <a
              href="https://linkedin.com/in/hamzanaeem03"
              className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-light">
            © {currentYear} Hamza Naeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
