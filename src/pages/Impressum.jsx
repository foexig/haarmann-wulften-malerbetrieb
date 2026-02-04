import React from 'react';
import { motion } from 'framer-motion';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-800">
              Impressum
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-gray max-w-none"
          >
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="text-gray-600 space-y-1">
                  <p className="font-medium text-gray-800">Firma Klaus Haarmann</p>
                  <p>Malermeister</p>
                  <p>Wulften</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">
                  Vertreten durch
                </h2>
                <div className="text-gray-600">
                  <p>Klaus Haarmann</p>
                  <p>Sebastian Haarmann</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">
                  Kontakt
                </h2>
                <div className="text-gray-600 space-y-1">
                  <p>E-Mail: Über unser Kontaktformular</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">
                  Berufsbezeichnung
                </h2>
                <div className="text-gray-600 space-y-1">
                  <p>Malermeister</p>
                  <p>Verliehen in: Deutschland</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">
                  Haftungsausschluss
                </h2>
                
                <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">
                  Haftung für Inhalte
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                  können wir jedoch keine Gewähr übernehmen.
                </p>

                <h3 className="text-lg font-medium text-gray-700 mt-6 mb-2">
                  Haftung für Links
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, 
                  auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir 
                  für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>

                <h3 className="text-lg font-medium text-gray-700 mt-6 mb-2">
                  Urheberrecht
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
                  der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">
                  Datenschutz
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe 
                  personenbezogener Daten möglich. Soweit auf unseren Seiten 
                  personenbezogene Daten (beispielsweise Name, Anschrift oder 
                  E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, 
                  stets auf freiwilliger Basis. Diese Daten werden ohne Ihre 
                  ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}