import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'Home' },
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
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Wulften</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span>Über Kontaktformular</span>
              </div>
            </div>
            <div className="text-gray-400">
              Malermeister seit Jahren in der Region
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="shrink-0">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983d5a632c8461b2cc2ab91/c6dc16d2e_malermeister.jpg"
                alt="Haarmann Malermeister"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`text-base font-medium transition-all duration-200 relative ${
                    isActive(item.page) 
                      ? 'text-red-600' 
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.page) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl('Kontakt')}>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white h-12 px-6 font-medium"
                >
                  Jetzt anfragen
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                      isActive(item.page)
                        ? 'bg-red-50 text-red-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    to={createPageUrl('Kontakt')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12">
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anfragen
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983d5a632c8461b2cc2ab91/c6dc16d2e_malermeister.jpg"
                alt="Haarmann Malermeister"
                className="h-20 w-auto mb-6"
              />
              <p className="text-gray-400 leading-relaxed max-w-md">
                Ihr freundlicher und kompetenter Ansprechpartner für alle Bereiche 
                im Maler- und Lackiererhandwerk. Wir beraten Sie gern und umfassend!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">Kontakt</h3>
              <div className="text-gray-400 space-y-3">
                <div>
                  <p className="font-medium text-white">Firma Klaus Haarmann</p>
                  <p>Malermeister</p>
                  <p>Wulften</p>
                </div>
                <div className="pt-2">
                  <Link 
                    to={createPageUrl('Kontakt')} 
                    className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Kontaktformular
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Haarmann Malermeister. Alle Rechte vorbehalten.
            </p>
            <Link 
              to={createPageUrl('Impressum')} 
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Impressum & Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}