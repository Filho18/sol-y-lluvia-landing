import React from 'react';
import { HeadphonesIcon, Calculator, Heart } from 'lucide-react';

const PergolasBenefitsSection = () => {
  const benefits = [
    {
      icon: HeadphonesIcon,
      title: "Atendimento gratuito",
      description: "Com uma equipa treinada para tirar as tuas dúvidas"
    },
    {
      icon: Calculator,
      title: "Clareza de quanto custará",
      description: "O projeto e uma possível instalação"
    },
    {
      icon: Heart,
      title: "Em troca queremos",
      description: "Ganhar reconhecimento dentro da Comunidade"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PergolasBenefitsSection;
