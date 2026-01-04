import React from 'react';

const ToldoInfoSection = () => {
  const benefits = [
    {
      text: "Atención gratuita con un equipo formado para resolver tus dudas"
    },
    {
      text: "Claridad sobre cuánto costará el proyecto incluyendo la instalación"
    },
    {
      text: "A cambio queremos ganar reconocimiento y relación dentro de la Comunidad"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Texto do horário */}
          <div className="text-center mb-0 pb-8 border-b border-gray-300">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Nuestro equipo está formado para prestar servicio de atención de{' '}
              <span className="font-semibold text-gray-900">9 a 20h de lunes a viernes</span>{' '}
              y de{' '}
              <span className="font-semibold text-gray-900">9h a 14h los sábados</span>
            </p>
          </div>
          
          {/* 3 Quadrados de benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-r border-b border-gray-300">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 lg:p-8 text-center border-b md:border-b-0 last:border-b-0 ${index < 2 ? 'md:border-r border-gray-300' : ''}`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToldoInfoSection;

