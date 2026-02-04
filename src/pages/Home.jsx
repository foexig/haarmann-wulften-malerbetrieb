import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Paintbrush, Home as HomeIcon, Layers, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const services = [
    {
      icon: Paintbrush,
      title: "Innenraumgestaltung",
      description: "Farben, Tapeten und kreative Maltechniken für Ihr Zuhause"
    },
    {
      icon: HomeIcon,
      title: "Fassadenbeschichtung",
      description: "Professionelle Fassadenarbeiten und Wärmedämmung"
    },
    {
      icon: Layers,
      title: "Fußbodenbeläge",
      description: "Teppich, PVC-Designbeläge und Fertigparkett"
    }
  ];

  const benefits = [
    "Qualifizierte Malermeister",
    "Neuester Stand der Technik",
    "Zuverlässige Ausführung",
    "Saubere Arbeit",
    "Umfassende Beratung"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80"
            alt="Malerarbeiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <img 
                src="http://www.haarmann-wulften.de/mediapool/130/1304105/resources/slogan_3003_10_0.png"
                alt="Haarmann Malermeister Logo"
                className="h-32 md:h-40 w-auto"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-6"
            >
              Ihr Meisterbetrieb für{' '}
              <span className="text-[#C41E3A] font-medium">Malerarbeiten</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Wir sind Ihr freundlicher und kompetenter Ansprechpartner für alle Bereiche 
              im Maler- und Lackiererhandwerk in Wulften und Umgebung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={createPageUrl('Kontakt')}>
                <Button 
                  size="lg" 
                  className="bg-[#C41E3A] hover:bg-[#a01830] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Leistungen')}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-full"
                >
                  Unsere Leistungen
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#C41E3A] font-medium tracking-wider uppercase text-sm">
              Unsere Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-4">
              Leistungen im Überblick
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#C41E3A]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C41E3A] transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#C41E3A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C41E3A] font-medium tracking-wider uppercase text-sm">
                Über uns
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-4 mb-6">
                Klaus und Sebastian Haarmann
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Die gewünschten Arbeiten werden stets zuverlässig, sauber und schnell 
                durch unsere qualifizierten Mitarbeiter und uns selbst nach dem neuesten 
                Stand der Technik ausgeführt.
              </p>
              <p className="text-gray-700 font-medium mb-8">
                Wir beraten Sie gern und umfassend!
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#C41E3A]" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Malerarbeiten"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C41E3A] text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-light">Meisterbetrieb</p>
                <p className="text-sm opacity-90">aus Wulften</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Haben Sie Fragen oder wünschen Sie ein Angebot?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Rufen Sie uns an oder schreiben Sie uns eine Nachricht. Wir freuen uns auf Sie!
            </p>
            <Link to={createPageUrl('Kontakt')}>
              <Button 
                size="lg"
                className="bg-[#C41E3A] hover:bg-[#a01830] text-white px-10 py-6 text-lg rounded-full transition-all duration-300"
              >
                Jetzt kontaktieren
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}