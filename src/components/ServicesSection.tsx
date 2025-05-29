
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      name: "Toldo Brazo Extensible",
      image: "https://i.imgur.com/b8Ff3jn.jpeg",
      description: "Protección solar retráctil para terrazas y patios"
    },
    {
      name: "Toldo Cofre",
      image: "https://i.imgur.com/3MST0ep.jpeg",
      description: "Toldo protegido en cofre para mayor durabilidad"
    },
    {
      name: "Pérgola Bioclimática",
      image: "https://i.imgur.com/iUieITm.jpeg",
      description: "Control total del ambiente exterior"
    },
    {
      name: "Pérgola Retráctil",
      image: "https://i.imgur.com/R6xHB6F.jpeg",
      description: "Pérgola con cubierta retráctil ajustable"
    },
    {
      name: "Toldo Vertical",
      image: "https://i.imgur.com/XdR1xph.jpeg",
      description: "Protección vertical contra viento y sol"
    },
    {
      name: "Toldo Vertical Screen Zíper",
      image: "https://i.imgur.com/E3Rbd3Z.jpeg",
      description: "Sistema de cremallera para máxima estabilidad"
    },
    {
      name: "Cortinas de Vidrio",
      image: "https://i.imgur.com/cJSOtDG.jpeg",
      description: "Cerramiento transparente y elegante"
    },
    {
      name: "Estores de Rolo",
      image: "https://i.imgur.com/lb7Aayr.jpeg",
      description: "Control preciso de la luminosidad interior"
    },
    {
      name: "Velas Tensionadas",
      image: "https://i.imgur.com/bRW11Kg.jpeg",
      description: "Protección solar moderna y decorativa"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones completas de protección solar con diseño moderno y calidad premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
          >
            Solicita tu Presupuesto
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
