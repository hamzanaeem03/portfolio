import { GraduationCap, Calendar } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: 'BS in Computer Science',
      institution: 'Dawood University of Engineering and Technology',
      date: 'Expected Sept 2025',
      highlights: ['GPA: 3.7/4.0', 'Dean\'s List', 'Scholarship Recipient'],
    }
  ];

  return (
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
        {education.map((edu, idx) => (
          <div key={idx} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-sky-500" />
                </div>
              </div>
              <div className="flex-grow space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 font-medium text-lg">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {edu.date}
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, i) => (
                    <span key={i} className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
