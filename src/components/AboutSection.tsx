
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Sobre a Sol y Lluvia
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Desde <strong className="text-sol-blue font-medium">2004</strong>, criamos soluções de proteção solar que combinam 
                <strong className="text-sol-blue font-medium"> funcionalidade</strong> e 
                <strong className="text-sol-blue font-medium"> design</strong>.
              </p>
              
              <p>
                Cada projeto é desenvolvido com atenção aos detalhes, utilizando materiais de qualidade 
                premium para garantir durabilidade e satisfação.
              </p>
            </div>
          </div>
          
          {/* Values - Simplified */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-sol-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-sol-blue text-xl">🛠️</span>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">Instalação Expert</h3>
              <p className="text-gray-600 text-sm">Equipe certificada e especializada</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-sol-yellow/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-sol-yellow text-xl">⭐</span>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">Qualidade Premium</h3>
              <p className="text-gray-600 text-sm">Materiais de alta durabilidade</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-sol-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-sol-blue text-xl">💬</span>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">Atendimento Personalizado</h3>
              <p className="text-gray-600 text-sm">Soluções sob medida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
