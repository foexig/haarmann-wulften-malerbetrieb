import React from 'react';
import { motion } from 'framer-motion';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              Impressum
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold text-lg text-gray-900">Firma Klaus Haarmann</p>
                <p>Malermeister</p>
                <p>Wulften</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Vertreten durch
              </h2>
              <div className="text-gray-700 space-y-1">
                <p>Klaus Haarmann</p>
                <p>Sebastian Haarmann</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kontakt
              </h2>
              <div className="text-gray-700">
                <p>E-Mail: Über unser Kontaktformular</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Berufsbezeichnung
              </h2>
              <div className="text-gray-700 space-y-1">
                <p>Malermeister</p>
                <p>Verliehen in: Deutschland</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Haftungsausschluss
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Haftung für Inhalte
                  </h3>
                  <p className="leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                    können wir jedoch keine Gewähr übernehmen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Haftung für Links
                  </h3>
                  <p className="leading-relaxed">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, 
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir 
                    für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Urheberrecht
                  </h3>
                  <p className="leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
                    diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
                    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                    Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
                    der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Datenschutz
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe 
                personenbezogener Daten möglich. Soweit auf unseren Seiten 
                personenbezogene Daten (beispielsweise Name, Anschrift oder 
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, 
                stets auf freiwilliger Basis. Diese Daten werden ohne Ihre 
                ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}