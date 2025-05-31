
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://i.imgur.com/i3SS4lq.jpeg"
              alt="Instalación de pérgolas y toldos"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Sol y Lluvia
            </h2>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-8">
              <p>
                Con más de <strong className="text-blue-600">19 años de experiencia</strong>, Sol y Lluvia se ha convertido en un nombre de 
                confianza en la instalación de soluciones para espacios exteriores en Galicia.
              </p>
              
              <p>
                Nuestra dedicación a la <strong className="text-blue-600">calidad e innovación</strong> garantiza que cada cliente reciba 
                soluciones personalizadas que transforman sus espacios exteriores en 
                áreas funcionales y elegantes, independientemente de las condiciones 
                climáticas.
              </p>
              
              <p>
                Trabajamos con los mejores materiales y tecnologías del mercado, 
                ofreciendo soluciones duraderas que valorizan su propiedad y 
                mejoran su estilo de vida.
              </p>
            </div>
            
            {/* Contact Icons */}
            <div className="flex space-x-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">solylluvia.eu@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teléfono</p>
                  <p className="font-semibold text-gray-900">+34 618 14 59 14</p>
                </div>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">19+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
