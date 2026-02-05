import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Paintbrush, Home as HomeIcon, Layers, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const services = [
    {
      icon: Paintbrush,
      title: "Innenraumgestaltung",
      description: "Farben, Tapeten und kreative Maltechniken",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80"
    },
    {
      icon: HomeIcon,
      title: "Fassadenbeschichtung",
      description: "Wärmedämmung und Fassadensanierung",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983d5a632c8461b2cc2ab91/9be565892_fassade2.jpg"
    },
    {
      icon: Layers,
      title: "Fußbodenbeläge",
      description: "Teppich, PVC und Fertigparkett",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983d5a632c8461b2cc2ab91/a2182e240_pakett.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-gray-800 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Meisterbetrieb seit Jahren in Wulften
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Farbe ist unsere
                <span className="block text-red-600">Leidenschaft</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Wir sind Ihr freundlicher und kompetenter Ansprechpartner für alle 
                Bereiche im Maler- und Lackiererhandwerk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Kontakt')}>
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 h-14 text-lg font-medium"
                  >
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Kundenzufriedenheit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projekte</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6983d5a632c8461b2cc2ab91/520875632_maler2.jpg"
                  alt="Malerarbeiten"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Paintbrush className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Qualitätsarbeit</div>
                      <div className="text-sm text-gray-600">Garantiert</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red-600 font-semibold tracking-wide uppercase text-sm">
                Unsere Leistungen
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                Was wir für Sie tun
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl('Leistungen')}>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:bg-gray-50 px-8 h-14"
              >
                Alle Leistungen ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red-500 font-semibold tracking-wide uppercase text-sm">
                Ihre Malermeister
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Klaus & Sebastian Haarmann
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Die gewünschten Arbeiten werden stets zuverlässig, sauber und schnell 
                durch unsere qualifizierten Mitarbeiter und uns selbst nach dem neuesten 
                Stand der Technik ausgeführt.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Ob es um eine neue Innenraumgestaltung mit Farben, Tapeten oder kreativen 
                Maltechniken, eine Fassadenbeschichtung oder Wärmedämmung, um neue 
                Fußbodenbeläge in Form von Teppich, PVC-Designbelägen oder Fertigparkett 
                geht – <strong className="text-white">wir beraten Sie gern und umfassend!</strong>
              </p>
              
              <div className="flex gap-4">
                <Link to={createPageUrl('Kontakt')}>
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 h-14 px-8"
                  >
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-red-500 mb-2">✓</div>
                  <div className="font-semibold mb-1">Qualifiziert</div>
                  <div className="text-sm text-gray-400">Malermeister mit Erfahrung</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-red-500 mb-2">✓</div>
                  <div className="font-semibold mb-1">Zuverlässig</div>
                  <div className="text-sm text-gray-400">Termine werden eingehalten</div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-red-500 mb-2">✓</div>
                  <div className="font-semibold mb-1">Sauber</div>
                  <div className="text-sm text-gray-400">Ordentliche Ausführung</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-red-500 mb-2">✓</div>
                  <div className="font-semibold mb-1">Modern</div>
                  <div className="text-sm text-gray-400">Neueste Technik</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl text-red-100 mb-10">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Kontakt')}>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100 h-14 px-10 text-lg font-semibold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Nachricht senden
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}