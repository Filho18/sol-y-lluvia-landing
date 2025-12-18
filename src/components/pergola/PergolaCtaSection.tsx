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
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-12 text-center shadow-sm">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Receba um orçamento personalizado
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              e saiba exatamente qual é o valor de investimento do teu projeto
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Peça o seu orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PergolaCtaSection;
