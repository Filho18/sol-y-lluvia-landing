import React from 'react';

const PergolaHeroSection = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight">
            Peça orçamento de{' '}
            <span className="font-semibold text-blue-600">Pérgola Bioclimática</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-light">
            Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default PergolaHeroSection;
