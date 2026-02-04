import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Willkommen', page: 'Home' },
    { name: 'Leistungen', page: 'Leistungen' },
    { name: 'Kontakt', page: 'Kontakt' },
    { name: 'Impressum', page: 'Impressum' }
  ];

  const isActive = (page) => {
    const path = location.pathname;
    if (page === 'Home' && path === '/') return true;
    return path.toLowerCase().includes(page.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="shrink-0">
              <img 
                src="http://www.haarmann-wulften.de/mediapool/130/1304105/resources/slogan_3003_10_0.png"
                alt="Haarmann Malermeister"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`text-sm font-medium transition-colors duration-200 relative py-2 ${
                    isActive(item.page) 
                      ? 'text-[#C41E3A]' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive(item.page) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C41E3A]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-2 bg-[#C41E3A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#a01830] transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Angebot anfragen
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.page)
                        ? 'bg-[#C41E3A]/10 text-[#C41E3A]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    to={createPageUrl('Kontakt')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-[#C41E3A] text-white py-3 rounded-full font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Angebot anfragen
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo & Description */}
            <div>
              <img 
                src="http://www.haarmann-wulften.de/mediapool/130/1304105/resources/slogan_3003_10_0.png"
                alt="Haarmann Malermeister"
                className="h-16 w-auto brightness-0 invert mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Ihr freundlicher und kompetenter Ansprechpartner für alle Bereiche 
                im Maler- und Lackiererhandwerk.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-medium text-lg mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-medium text-lg mb-4">Kontakt</h3>
              <div className="text-gray-400 text-sm space-y-2">
                <p>Firma Klaus Haarmann</p>
                <p>Malermeister</p>
                <p>Wulften</p>
                <p className="pt-2">
                  <Link 
                    to={createPageUrl('Kontakt')} 
                    className="text-[#C41E3A] hover:underline"
                  >
                    → Kontaktformular
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Haarmann Malermeister. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link to={createPageUrl('Impressum')} className="text-gray-500 hover:text-white text-sm transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}