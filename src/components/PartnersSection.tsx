import React from 'react';

const partners = [
  { name: 'Somfy', logo: 'https://i.imgur.com/sOoGUin.png' },
  { name: 'Saxun', logo: 'https://i.imgur.com/QAWl3ep.png' },
  { name: 'Sauleda', logo: 'https://i.imgur.com/OIsTsHc.png' },
  { name: 'Marklux', logo: 'https://i.imgur.com/S34hIS5.png' },
  { name: 'Llaza', logo: 'https://i.imgur.com/NUCSHUC.png' },
];

const PartnersSection = () => {
  // Duplicate only 2x - the animation moves -50% which equals exactly one set
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          Os Nossos Parceiros
        </h2>
      </div>
      
      <div className="relative">
        <div 
          className="flex animate-scroll hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 md:mx-6"
            >
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center justify-center h-20 md:h-24 w-40 md:w-48 hover:shadow-md transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 md:max-h-16 max-w-full object-contain"
                  loading="lazy"
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
