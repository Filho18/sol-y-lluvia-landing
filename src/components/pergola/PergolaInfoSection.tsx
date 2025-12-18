import React from 'react';

const PergolaInfoSection = () => {
  const benefits = [
    {
      text: "Atendimento gratuito com uma equipa treinada para tirar as tuas dúvidas"
    },
    {
      text: "Clareza de quanto custará o projeto incluindo a instalação"
    },
    {
      text: "Em troca queremos ganhar reconhecimento e relacionamento dentro da Comunidade"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Texto do horário */}
          <div className="text-center mb-0 pb-8 border-b border-gray-300">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              A nossa equipa foi treinada para prestar serviço de atendimento das{' '}
              <span className="font-semibold text-gray-900">06 às 22h</span>,{' '}
              <span className="font-semibold text-gray-900">7 dias por semana</span> até 31 de dezembro
            </p>
          </div>
          
          {/* 3 Quadrados de benefícios */}
          <div className="grid md:grid-cols-3 border-l border-r border-b border-gray-300">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 lg:p-8 text-center ${index < 2 ? 'border-r border-gray-300' : ''}`}
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

export default PergolaInfoSection;
