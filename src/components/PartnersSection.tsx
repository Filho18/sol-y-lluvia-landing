import React from 'react';

const partners = [
  { name: 'Parceiro 1', logo: 'https://via.placeholder.com/150x80?text=Partner+1' },
  { name: 'Parceiro 2', logo: 'https://via.placeholder.com/150x80?text=Partner+2' },
  { name: 'Parceiro 3', logo: 'https://via.placeholder.com/150x80?text=Partner+3' },
  { name: 'Parceiro 4', logo: 'https://via.placeholder.com/150x80?text=Partner+4' },
  { name: 'Parceiro 5', logo: 'https://via.placeholder.com/150x80?text=Partner+5' },
];

const PartnersSection = () => {
  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          Os Nossos Parceiros
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24 w-40 md:w-48 hover:shadow-md transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
