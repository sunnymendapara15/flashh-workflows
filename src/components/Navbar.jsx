import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { navbarContent } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <Zap size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">{navbarContent.logo}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navbarContent.links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-sm font-medium hover:from-indigo-600 hover:to-violet-600 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
              {navbarContent.ctaText}
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-2 rounded-2xl mx-4 p-4 space-y-4 animate-scale-in">
          {navbarContent.links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <button className="w-full px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-sm font-medium">
            {navbarContent.ctaText}
          </button>
        </div>
      )}
    </nav>
  );
}