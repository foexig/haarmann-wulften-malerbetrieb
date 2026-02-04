import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      lines: ["Firma Klaus Haarmann", "Wulften"]
    },
    {
      icon: Phone,
      title: "Telefon",
      lines: ["Rufen Sie uns an für", "ein kostenloses Angebot"]
    },
    {
      icon: Mail,
      title: "E-Mail",
      lines: ["Schreiben Sie uns", "Wir antworten schnellstmöglich"]
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      lines: ["Mo - Fr: 7:00 - 17:00", "Sa: Nach Vereinbarung"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80"
            alt="Kontakt"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C41E3A] font-medium tracking-wider uppercase text-sm"
          >
            Wir freuen uns auf Sie
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4"
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto"
          >
            Sollten Sie Fragen haben, ein Angebot oder eine Beratung wünschen, 
            rufen Sie uns an oder schreiben Sie uns eine Nachricht.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C41E3A] font-medium tracking-wider uppercase text-sm">
                So finden Sie uns
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-4 mb-8">
                Ihre Malermeister in Wulften
              </h2>

              <p className="text-gray-600 leading-relaxed mb-10">
                Klaus und Sebastian Haarmann stehen Ihnen für alle Fragen rund um 
                Malerarbeiten zur Verfügung. Wir beraten Sie gerne persönlich und 
                erstellen Ihnen ein unverbindliches Angebot.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#C41E3A]/10 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-[#C41E3A]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{info.title}</h3>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-sm text-gray-500">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9962.456328726988!2d10.0639!3d51.6539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4e5f5e5e5e5e5%3A0x0!2sWulften%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Wulften"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-light text-gray-800 mb-6">
                  Schreiben Sie uns
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">
                      Vielen Dank!
                    </h4>
                    <p className="text-gray-600">
                      Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-2 bg-white border-gray-200 focus:border-[#C41E3A] focus:ring-[#C41E3A]"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-gray-700">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="mt-2 bg-white border-gray-200 focus:border-[#C41E3A] focus:ring-[#C41E3A]"
                          placeholder="ihre@email.de"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700">Telefon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="mt-2 bg-white border-gray-200 focus:border-[#C41E3A] focus:ring-[#C41E3A]"
                          placeholder="Ihre Telefonnummer"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700">Nachricht *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="mt-2 bg-white border-gray-200 focus:border-[#C41E3A] focus:ring-[#C41E3A] resize-none"
                        placeholder="Wie können wir Ihnen helfen?"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-[#C41E3A] hover:bg-[#a01830] text-white py-6 rounded-xl transition-all duration-300"
                    >
                      Nachricht senden
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}