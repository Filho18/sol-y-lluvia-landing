
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=3857&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Transforma tus espacios exteriores
            <span className="block text-amber-400 font-medium">con Sol y Lluvia</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto font-light">
            Especialistas en toldos, pérgolas bioclimáticas y soluciones de protección solar desde 2004
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              Solicita un Presupuesto
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium rounded-lg"
              onClick={() => window.open('https://wa.me/34618145914', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
