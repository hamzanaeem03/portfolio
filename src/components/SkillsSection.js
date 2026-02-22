'use client';

import { Code, Zap, Server, Settings, BarChart3 } from 'lucide-react';
import { groupedSkills } from '@/data/skills';

const iconMap = {
  'Code': <Code className="w-5 h-5" />,
  'Zap': <Zap className="w-5 h-5" />,
  'Server': <Server className="w-5 h-5" />,
  'Settings': <Settings className="w-5 h-5" />,
  'BarChart3': <BarChart3 className="w-5 h-5" />,
};

function SkillCard({ skill }) {
  const getLevelColor = (level) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'proficient':
        return 'bg-blue-500';
      case 'learning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelBg = (level) => {
    switch (level) {
      case 'expert':
        return 'bg-green-50 text-green-700';
      case 'proficient':
        return 'bg-blue-50 text-blue-700';
      case 'learning':
        return 'bg-yellow-50 text-yellow-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 transition-smooth hover-lift shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-900">{skill.name}</h4>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getLevelBg(skill.level)}`}>
          {skill.level === 'expert' ? 'Expert' : skill.level === 'proficient' ? 'Proficient' : 'Learning'}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${getLevelColor(skill.level)} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-500 block">{skill.proficiency}% proficiency</span>
    </div>
  );
}

export default function SkillsSection() {
  return (
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

      <div className="max-w-6xl mx-auto space-y-16">
        {groupedSkills.map((skillGroup, idx) => {
          const Icon = iconMap[skillGroup.icon] || <Code className="w-5 h-5" />;
          return (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                  {Icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{skillGroup.category}</h3>
                  <p className="text-gray-600 text-sm">{skillGroup.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillGroup.skills.map((skill, i) => (
                  <SkillCard key={i} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center hover-lift">
          <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
          <p className="text-gray-700 font-medium">Expert-Level Skills</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-2xl p-8 text-center hover-lift">
          <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
          <p className="text-gray-700 font-medium">Proficient Technologies</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8 text-center hover-lift">
          <div className="text-4xl font-bold text-purple-600 mb-2">2+</div>
          <p className="text-gray-700 font-medium">Years Experience</p>
        </div>
      </div>
    </section>
  );
}
