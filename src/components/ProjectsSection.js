'use client';

import { ExternalLink, Code } from 'lucide-react';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function ProjectsSection() {
  return (
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
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg flex flex-col"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="p-8 space-y-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-sky-500 font-bold text-xs text-center">{project.initials}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-200">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-sm font-bold text-sky-600">{metric.value}</div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2">
                <p className="text-gray-700 font-medium text-sm">Key Features:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-500 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="pt-2 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-smooth font-medium group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  {project.highlight ? 'View Live Project' : 'View Project'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Projects CTA */}
      <div className="text-center pt-8">
        <a
          href="https://github.com/hamzanaeem03"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-2xl transition-smooth hover-lift font-medium"
        >
          <Code className="w-5 h-5" />
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
