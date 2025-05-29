
import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Sobre Nosotros
          </h2>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Desde <strong className="text-blue-600">2004</strong>, Sol y Lluvia se ha especializado en la instalación 
              de soluciones de protección solar y cobertura de alta calidad. Nuestra experiencia de más de 
              <strong className="text-blue-600"> 19 años</strong> nos convierte en líderes del sector en Galicia.
            </p>
            
            <p>
              Nos comprometemos con la <strong className="text-blue-600">excelencia</strong>, la 
              <strong className="text-blue-600"> innovación</strong> y la 
              <strong className="text-blue-600"> satisfacción del cliente</strong> en cada proyecto. 
              Transformamos espacios exteriores e interiores con soluciones funcionales y estéticamente atractivas.
            </p>
          </div>
          
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Experiencia</h3>
              <p className="text-gray-600">Más de 19 años perfeccionando nuestro oficio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovación</h3>
              <p className="text-gray-600">Tecnología avanzada y materiales de última generación</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Calidad</h3>
              <p className="text-gray-600">Compromiso con la excelencia en cada instalación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
