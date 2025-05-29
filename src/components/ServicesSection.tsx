import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    title: 'Toldos',
    description: 'Amplia gama de toldos para terrazas, balcones y ventanas. Protección solar con estilo y durabilidad.',
    image: 'https://i.imgur.com/0BjV0Ox.jpeg',
  },
  {
    title: 'Pérgolas Bioclimáticas',
    description: 'Crea espacios exteriores confortables y adaptables a cualquier clima con nuestras pérgolas bioclimáticas de diseño moderno.',
    image: 'https://i.imgur.com/o2MZT8H.jpeg',
  },
  {
    title: 'Cortinas de Cristal',
    description: 'Disfruta de vistas panorámicas sin renunciar a la protección contra el viento y la lluvia con nuestras cortinas de cristal a medida.',
    image: 'https://i.imgur.com/14wfFZF.jpeg',
  },
  {
    title: 'Estores',
    description: 'Controla la luz y la privacidad en tus interiores con nuestra selección de estores enrollables, plegables y venecianos.',
    image: 'https://i.imgur.com/VdrL40I.jpeg',
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones profesionales de protección solar y confort exterior adaptadas a tus necesidades
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Service Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {services[selectedService].description}
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              >
                Pedir Presupuesto
              </Button>
            </div>
          </div>

          {/* Right Column - Image with Service Buttons */}
          <div className="relative">
            <div 
              className="aspect-[4/3] rounded-2xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('${services[selectedService].image}')`,
              }}
            >
              {/* Service Selection Buttons Overlay */}
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedService(index)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                        selectedService === index
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white/90 text-gray-900 hover:bg-white'
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Accordion */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900">{service.title}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openAccordion === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openAccordion === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div 
                    className="aspect-[16/9] rounded-lg bg-cover bg-center mb-4"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  />
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  >
                    Pedir Presupuesto
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
