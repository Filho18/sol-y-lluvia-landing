
import React from 'react';

const ServicesSection = () => {
  const mainServices = [
    {
      name: "Toldo Braço Extensivo",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop",
      description: "Proteção solar retrátil para terraços"
    },
    {
      name: "Pérgola Bioclimática",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=3857&auto=format&fit=crop",
      description: "Controle total do ambiente externo"
    },
    {
      name: "Cortina de Vidro",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=4480&auto=format&fit=crop",
      description: "Fechamento transparente e elegante"
    },
    {
      name: "Estores de Rolo",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011&auto=format&fit=crop",
      description: "Controle preciso da luminosidade"
    }
  ];

  const additionalServices = [
    "Velas Tensionadas",
    "Toldo Vertical Screen",
    "Cobertura Acrílica",
    "Pérgola Retrátil",
    "Toldo Cofre",
    "Sombreadores"
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções completas de proteção solar com design moderno e qualidade premium
          </p>
        </div>

        {/* Main Services - Clean grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden h-40">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-medium mb-2 text-gray-900 text-sm">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-xs">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services - Minimal list */}
        <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-lg font-medium text-center mb-6 text-gray-900">
            Outros Serviços
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded text-sm text-gray-700">
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Simplified */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sol-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
