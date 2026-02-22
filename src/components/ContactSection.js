'use client';

import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
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
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover-lift space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center group-hover:bg-sky-100 transition-smooth">
                    <Mail className="w-5 h-5 text-sky-500" />
                  </div>
                  <a
                    href="mailto:mhamzanaeem03@gmail.com"
                    className="text-gray-700 hover:text-sky-500 transition-smooth font-medium"
                  >
                    mhamzanaeem03@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center group-hover:bg-sky-100 transition-smooth">
                    <MapPin className="w-5 h-5 text-sky-500" />
                  </div>
                  <span className="text-gray-700 font-medium">Karachi, Pakistan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <p className="text-gray-700 font-medium">Follow me on:</p>
                <div className="flex gap-3">
                  <a
                    href="mailto:mhamzanaeem03@gmail.com"
                    className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                  </a>
                  <a
                    href="https://github.com/hamzanaeem03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                  </a>
                  <a
                    href="https://linkedin.com/in/hamzanaeem03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-50 hover:bg-sky-50 rounded-xl flex items-center justify-center transition-smooth hover-lift group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-smooth"
                  placeholder="Your Name"
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-smooth"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-smooth resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  Please fill in all fields with valid information.
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Message sent successfully! I'll get back to you within 24-48 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 text-white font-medium py-4 px-6 rounded-xl transition-smooth hover-lift flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 disabled:shadow-none"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center font-light">
                I'll get back to you within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
