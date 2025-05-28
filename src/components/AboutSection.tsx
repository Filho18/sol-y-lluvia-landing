
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Quem Somos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Desde <strong className="text-sol-blue">2004</strong>, a Sol y Lluvia atua com excelência na instalação de soluções de cobertura e proteção solar. 
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Atendemos com <strong className="text-sol-blue">inovação</strong>, <strong className="text-sol-blue">qualidade</strong> e <strong className="text-sol-blue">atenção aos detalhes</strong> em cada projeto residencial e comercial.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é proporcionar conforto, elegância e proteção para que você possa desfrutar dos seus espaços em qualquer estação do ano.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop" 
                alt="Equipe Sol y Lluvia trabalhando"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-sol-blue text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-sol-gray rounded-lg">
              <div className="w-16 h-16 bg-sol-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instalação Profissional</h3>
              <p className="text-gray-600">Equipe especializada e certificada para garantir a melhor instalação.</p>
            </div>
            
            <div className="text-center p-6 bg-sol-gray rounded-lg">
              <div className="w-16 h-16 bg-sol-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">Produtos de alta qualidade com garantia e durabilidade comprovada.</p>
            </div>
            
            <div className="text-center p-6 bg-sol-gray rounded-lg">
              <div className="w-16 h-16 bg-sol-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">Soluções sob medida para cada cliente e projeto específico.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
