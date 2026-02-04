import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Home as HomeIcon, Layers, Thermometer, Palette, Sparkles } from 'lucide-react';

export default function Leistungen() {
  const services = [
    {
      icon: Palette,
      title: "Innenraumgestaltung",
      description: "Verwandeln Sie Ihre Räume mit professionellen Malerarbeiten. Von klassisch elegant bis modern kreativ – wir setzen Ihre Wünsche um.",
      features: ["Wandgestaltung mit Farben", "Tapezierarbeiten", "Kreative Maltechniken", "Dekorative Oberflächen"]
    },
    {
      icon: HomeIcon,
      title: "Fassadenbeschichtung",
      description: "Schützen und verschönern Sie Ihr Gebäude mit hochwertigen Fassadenarbeiten. Langlebig und witterungsbeständig.",
      features: ["Fassadenanstrich", "Fassadensanierung", "Holzschutz", "Denkmalschutz"]
    },
    {
      icon: Thermometer,
      title: "Wärmedämmung",
      description: "Sparen Sie Energiekosten und verbessern Sie das Raumklima mit professioneller Wärmedämmung.",
      features: ["WDVS-Systeme", "Innendämmung", "Energieberatung", "Fördermittelberatung"]
    },
    {
      icon: Layers,
      title: "Fußbodenbeläge",
      description: "Der richtige Bodenbelag macht den Unterschied. Wir verlegen fachgerecht und sauber.",
      features: ["Teppichböden", "PVC-Designbeläge", "Fertigparkett", "Sockelleisten"]
    },
    {
      icon: Paintbrush,
      title: "Lackierarbeiten",
      description: "Präzise Lackierungen für Türen, Fenster, Heizkörper und mehr. Für ein perfektes Finish.",
      features: ["Türen & Zargen", "Fenster", "Heizkörper", "Metallbeschichtung"]
    },
    {
      icon: Sparkles,
      title: "Spezialarbeiten",
      description: "Besondere Anforderungen erfordern besondere Lösungen. Wir beraten Sie gerne.",
      features: ["Schimmelbeseitigung", "Brandschutzanstriche", "Industriebeschichtung", "Restaurierung"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Malerarbeiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C41E3A] font-medium tracking-wider uppercase text-sm"
          >
            Was wir für Sie tun können
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4"
          >
            Unsere Leistungen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto"
          >
            Ob Innenraumgestaltung, Fassadenarbeiten oder Bodenbeläge – 
            wir bieten Ihnen das volle Spektrum des Maler- und Lackiererhandwerks.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C41E3A] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#C41E3A] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-[#C41E3A] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C41E3A] font-medium tracking-wider uppercase text-sm">
              Unser Versprechen
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-4 mb-6">
              Qualität, die überzeugt
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Die gewünschten Arbeiten werden stets zuverlässig, sauber und schnell 
              durch unsere qualifizierten Mitarbeiter und uns selbst nach dem neuesten 
              Stand der Technik ausgeführt. Wir beraten Sie gern und umfassend!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}