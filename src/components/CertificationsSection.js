import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '@/data/blog';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-16 animate-on-scroll">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-sky-500" />
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Certifications</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Professional certifications and achievements</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const colors = [
              'from-blue-400 to-cyan-500',
              'from-emerald-400 to-teal-500',
              'from-orange-400 to-red-500',
              'from-purple-400 to-pink-500',
            ];
            const color = colors[idx % colors.length];

            return (
              <div
                key={cert.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  {/* Certificate Badge/Image */}
                  <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Award className="w-12 h-12 text-white" />
                  </div>

                  {/* Certificate Info */}
                  <div className="flex-grow space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-smooth line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-700 font-medium text-sm">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {new Date(cert.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-smooth font-medium text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Credential
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
