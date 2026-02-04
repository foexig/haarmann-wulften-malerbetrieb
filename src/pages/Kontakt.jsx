import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Kontaktieren Sie uns
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Lassen Sie uns sprechen
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Haben Sie Fragen, wünschen Sie ein Angebot oder eine Beratung? 
              Wir freuen uns auf Ihre Nachricht!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Kontaktinformationen
                </h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  Klaus und Sebastian Haarmann stehen Ihnen für alle Fragen rund um 
                  Malerarbeiten zur Verfügung.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Adresse</div>
                      <div className="text-gray-600">
                        <div>Firma Klaus Haarmann</div>
                        <div>Wulften</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                      <div className="text-gray-600">
                        Rufen Sie uns an für ein<br />kostenloses Angebot
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">E-Mail</div>
                      <div className="text-gray-600">
                        Nutzen Sie unser Kontaktformular
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Öffnungszeiten</div>
                      <div className="text-gray-600">
                        <div>Mo - Fr: 7:00 - 17:00</div>
                        <div>Sa: Nach Vereinbarung</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-10 rounded-3xl overflow-hidden shadow-xl h-72">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9962.456328726988!2d10.0639!3d51.6539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4e5f5e5e5e5e5%3A0x0!2sWulften%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort"
                  />
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Senden Sie uns eine Nachricht
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Wir melden uns schnellstmöglich bei Ihnen zurück.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Nachricht gesendet!
                      </h4>
                      <p className="text-gray-600">
                        Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-900 font-medium mb-2 block">
                          Ihr Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="h-12 bg-white border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl"
                          placeholder="Max Mustermann"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="text-gray-900 font-medium mb-2 block">
                            E-Mail Adresse *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="h-12 bg-white border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl"
                            placeholder="max@beispiel.de"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-900 font-medium mb-2 block">
                            Telefonnummer
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="h-12 bg-white border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl"
                            placeholder="Optional"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-900 font-medium mb-2 block">
                          Ihre Nachricht *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="bg-white border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 rounded-xl resize-none"
                          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-red-600 hover:bg-red-700 text-white h-14 rounded-xl text-lg font-semibold"
                      >
                        Nachricht senden
                        <Send className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}