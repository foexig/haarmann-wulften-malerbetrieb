import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie-consent-changed'));
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie-consent-changed'));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-gray-200">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ihre Privatsphäre ist uns wichtig
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wir verwenden Cookies und externe Dienste (wie Google Maps) zur Verbesserung Ihrer Nutzererfahrung. 
                    Diese Dienste verarbeiten personenbezogene Daten wie IP-Adressen und Browser-Informationen. 
                    Sie können Ihre Einwilligung jederzeit widerrufen.
                  </p>
                </div>
              </div>

              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mb-6 p-4 bg-gray-50 rounded-xl"
                >
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Verarbeitete Daten und Zwecke
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <strong>Google Maps (Google Ireland Limited)</strong>
                      <p className="text-gray-600 mt-1">
                        Zweck: Darstellung von interaktiven Karten<br/>
                        Verarbeitete Daten: IP-Adresse, Standortdaten, Browser-Informationen<br/>
                        Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                      </p>
                    </div>
                    <div>
                      <strong>Lokale Cookies</strong>
                      <p className="text-gray-600 mt-1">
                        Zweck: Speicherung Ihrer Cookie-Einstellungen<br/>
                        Verarbeitete Daten: Cookie-Präferenzen<br/>
                        Rechtsgrundlage: Notwendig für die Funktion der Website
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="bg-red-600 hover:bg-red-700 text-white h-12 px-8 flex-1"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="border-2 border-gray-300 hover:bg-gray-50 h-12 px-8 flex-1"
                >
                  Ablehnen
                </Button>
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="ghost"
                  className="h-12 px-8"
                >
                  {showDetails ? 'Weniger' : 'Details'}
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Weitere Informationen finden Sie in unserem{' '}
                <a href="/Impressum" className="underline hover:text-gray-700">
                  Impressum & Datenschutz
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}