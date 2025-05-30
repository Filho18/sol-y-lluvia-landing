
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://i.imgur.com/iUieITm.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Transforma tus espacios exteriores
            <span className="block text-amber-400 font-medium mt-2">con Sol y Lluvia</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
            Especialistas en toldos, pérgolas bioclimáticas y soluciones de protección solar desde 2004
          </p>
          
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-xl font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Solicita un Presupuesto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
