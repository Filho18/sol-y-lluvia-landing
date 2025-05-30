
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      name: "Toldo Brazo Extensible",
      image: "https://i.imgur.com/b8Ff3jn.jpeg",
      description: "Protección solar retráctil para terrazas y patios. Sistema robusto y duradero que se adapta perfectamente a cualquier espacio exterior, ofreciendo sombra cuando la necesites."
    },
    {
      name: "Toldo Cofre",
      image: "https://i.imgur.com/3MST0ep.jpeg",
      description: "Toldo protegido en cofre para mayor durabilidad. El sistema de protección total garantiza una vida útil prolongada y un aspecto impecable durante años."
    },
    {
      name: "Pérgola Bioclimática",
      image: "https://i.imgur.com/iUieITm.jpeg",
      description: "Control total del ambiente exterior con lamas orientables. Disfruta de tu terraza en cualquier condición climática con la máxima comodidad y estilo."
    },
    {
      name: "Pérgola Retráctil",
      image: "https://i.imgur.com/R6xHB6F.jpeg",
      description: "Pérgola con cubierta retráctil ajustable según tus necesidades. Flexibilidad total para adaptarse a cualquier momento del día y condición meteorológica."
    },
    {
      name: "Toldo Vertical",
      image: "https://i.imgur.com/XdR1xph.jpeg",
      description: "Protección vertical contra viento y sol lateral. Ideal para crear espacios más íntimos y protegidos en terrazas, balcones y jardines."
    },
    {
      name: "Toldo Vertical Screen Zíper",
      image: "https://i.imgur.com/E3Rbd3Z.jpeg",
      description: "Sistema de cremallera para máxima estabilidad y tensión. La tecnología más avanzada en protección solar vertical con acabados premium."
    },
    {
      name: "Cortinas de Vidrio",
      image: "https://i.imgur.com/cJSOtDG.jpeg",
      description: "Cerramiento transparente y elegante sin perfiles verticales. Transforma tu terraza en un espacio utilizable todo el año manteniendo las vistas."
    },
    {
      name: "Estores de Rolo",
      image: "https://i.imgur.com/lb7Aayr.jpeg",
      description: "Control preciso de la luminosidad interior con diseño minimalista. Perfectos para ventanas y espacios interiores que requieren privacidad y control solar."
    },
    {
      name: "Velas Tensionadas",
      image: "https://i.imgur.com/bRW11Kg.jpeg",
      description: "Protección solar moderna y decorativa con formas geométricas. Aporta un toque contemporáneo y artístico a cualquier espacio exterior."
    }
  ];

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
            Soluciones completas de protección solar con diseño moderno y calidad premium
          </p>
        </div>

        {/* Desktop Version - New Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={services[selectedService].image} 
                  alt={services[selectedService].name}
                  className="w-full h-[500px] object-cover transition-all duration-500"
                />
              </div>
            </div>

            {/* Right Column - Service Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                  {services[selectedService].name}
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {services[selectedService].description}
                </p>
              </div>
              
              {/* Service Selection Buttons */}
              <div className="space-y-3">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedService(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedService === index 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span className="font-semibold">{service.name}</span>
                  </button>
                ))}
              </div>

              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold w-fit mt-8"
              >
                Pedir Presupuesto
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Version - Accordion */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{service.name}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      onClick={scrollToContact}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 font-semibold"
                    >
                      Pedir Presupuesto
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
