
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      name: "Toldo Braço Extensivo",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop",
      description: "Proteção solar moderna e funcional para terraços e varandas."
    },
    {
      name: "Pérgola Bioclimática",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=3857&auto=format&fit=crop",
      description: "Controle total do ambiente com lâminas orientáveis."
    },
    {
      name: "Cortina de Vidro",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=4480&auto=format&fit=crop",
      description: "Fechamento elegante que preserva a vista e protege do vento."
    },
    {
      name: "Estores de Rolo",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011&auto=format&fit=crop",
      description: "Soluções práticas para controle de luz em interiores."
    },
    {
      name: "Velas Tensionadas",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop",
      description: "Design moderno e proteção eficaz para grandes áreas."
    },
    {
      name: "Toldo Vertical Screen Zíper",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000&auto=format&fit=crop",
      description: "Proteção lateral com tecnologia screen de alta qualidade."
    }
  ];

  const additionalServices = [
    "Cobertura Acrílica",
    "Pérgola Retrátil", 
    "Sombreadores",
    "Toldo Cofre",
    "Toldo Concha",
    "Toldo Ponto Fixo",
    "Toldo Vertical"
  ];

  return (
    <section id="services" className="py-20 bg-sol-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de soluções de proteção solar e cobertura, 
            sempre com a mais alta qualidade e design moderno.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="text-sol-blue hover:text-blue-700 font-medium">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Outros Serviços Disponíveis
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-4 bg-sol-gray rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-sol-blue rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">☀️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sol-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
