
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const FixedSideButtons = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = "¡Hola! Me gustaría solicitar un presupuesto.";
    const whatsappUrl = `https://wa.me/34618145914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-4">
      {/* Email Button */}
      <button
        onClick={scrollToContact}
        className="group bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        aria-label="Contacto por email"
      >
        <Mail className="w-5 h-5" />
        <span className="font-medium text-sm">Email</span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="group bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        aria-label="Contacto vía WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium text-sm">WhatsApp</span>
      </button>
    </div>
  );
};

export default FixedSideButtons;
