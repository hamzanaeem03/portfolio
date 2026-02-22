import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogArticles } from '@/data/blog';

export default function BlogSection() {
  return (
    <section id="blog" className="space-y-16 animate-on-scroll">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
            </svg>
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight">Latest Articles</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Insights on full-stack development, architecture, and best practices</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogArticles.map((article) => (
          <article
            key={article.id}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-smooth hover-lift shadow-sm hover:shadow-lg"
          >
            {/* Article Image */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-20`}></div>
            </div>

            {/* Article Content */}
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-smooth line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {article.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-smooth font-medium group/link text-sm"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Blog CTA */}
      <div className="text-center pt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl transition-smooth hover-lift font-medium shadow-lg shadow-sky-500/25"
        >
          View All Articles
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
