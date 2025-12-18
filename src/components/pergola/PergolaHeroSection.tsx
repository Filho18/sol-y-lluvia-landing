import React from 'react';

const PergolaHeroSection = () => {
  return (
    <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 bg-amber-400">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 leading-tight">
            Peça orçamento de{' '}
            <span className="font-semibold text-white">Pérgola Bioclimática</span>
          </h1>
          <p className="text-lg sm:text-xl text-white font-light">
            Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default PergolaHeroSection;
