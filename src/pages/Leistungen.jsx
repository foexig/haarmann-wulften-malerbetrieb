import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Paintbrush, Home as HomeIcon, Layers, Thermometer, Palette, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Leistungen() {
  const services = [
    {
      icon: Palette,
      title: "Innenraumgestaltung",
      description: "Verwandeln Sie Ihre Räume mit professionellen Malerarbeiten. Von klassisch elegant bis modern kreativ.",
      features: ["Wandgestaltung mit Farben", "Tapezierarbeiten", "Kreative Maltechniken", "Dekorative Oberflächen"],
      color: "bg-blue-500"
    },
    {
      icon: HomeIcon,
      title: "Fassadenbeschichtung",
      description: "Schützen und verschönern Sie Ihr Gebäude mit hochwertigen Fassadenarbeiten.",
      features: ["Fassadenanstrich", "Fassadensanierung", "Holzschutz", "Denkmalschutz"],
      color: "bg-green-500"
    },
    {
      icon: Thermometer,
      title: "Wärmedämmung",
      description: "Sparen Sie Energiekosten und verbessern Sie das Raumklima mit professioneller Wärmedämmung.",
      features: ["WDVS-Systeme", "Innendämmung", "Energieberatung", "Fördermittelberatung"],
      color: "bg-orange-500"
    },
    {
      icon: Layers,
      title: "Fußbodenbeläge",
      description: "Der richtige Bodenbelag macht den Unterschied. Wir verlegen fachgerecht und sauber.",
      features: ["Teppichböden", "PVC-Designbeläge", "Fertigparkett", "Sockelleisten"],
      color: "bg-purple-500"
    },
    {
      icon: Paintbrush,
      title: "Lackierarbeiten",
      description: "Präzise Lackierungen für Türen, Fenster, Heizkörper und mehr. Für ein perfektes Finish.",
      features: ["Türen & Zargen", "Fenster", "Heizkörper", "Metallbeschichtung"],
      color: "bg-pink-500"
    },
    {
      icon: Sparkles,
      title: "Spezialarbeiten",
      description: "Besondere Anforderungen erfordern besondere Lösungen. Wir beraten Sie gerne.",
      features: ["Schimmelbeseitigung", "Brandschutzanstriche", "Industriebeschichtung", "Restaurierung"],
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-red-500/20 text-red-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Unser Leistungsspektrum
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Was wir für Sie tun können
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ob Innenraumgestaltung, Fassadenarbeiten oder Bodenbeläge – 
              wir bieten Ihnen das volle Spektrum des Maler- und Lackiererhandwerks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-10 hover:shadow-2xl hover:border-gray-200 transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block bg-red-500/20 text-red-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Unser Qualitätsversprechen
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Warum Sie uns vertrauen können
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Die gewünschten Arbeiten werden stets zuverlässig, sauber und schnell 
              durch unsere qualifizierten Mitarbeiter und uns selbst nach dem neuesten 
              Stand der Technik ausgeführt. <strong className="text-white">Wir beraten Sie gern und umfassend!</strong>
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {[
                { label: 'Qualifiziert', icon: '🎓' },
                { label: 'Zuverlässig', icon: '⏰' },
                { label: 'Sauber', icon: '✨' },
                { label: 'Modern', icon: '🚀' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-lg">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link to={createPageUrl('Kontakt')}>
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 h-14 px-10 text-lg"
                >
                  Jetzt Beratung anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}