import React from 'react';
import { Button } from '@/components/ui/button';

const PergolaCtaSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto-pergola');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="pt-32 pb-12 lg:pt-40 lg:pb-16 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.imgur.com/iUieITm.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Hero text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold sm:text-3xl lg:text-[40px] lg:font-bold text-white mb-4 leading-tight">
              Pide tu presupuesto de{' '}
              <span className="text-amber-400">Pérgola Bioclimática</span>
            </h1>
          </div>
          
          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Recibe un presupuesto personalizado
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              y conoce exactamente cuál es el valor de inversión de tu proyecto
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Pide tu presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PergolaCtaSection;
