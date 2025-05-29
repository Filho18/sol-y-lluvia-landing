
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image - More subtle overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2940&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content - Simplified and more focused */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            Conforto e proteção solar
            <span className="block text-sol-yellow font-medium">para qualquer estação</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl mx-auto font-light">
            Especialistas em toldos, pérgolas bioclimáticas e soluções de proteção solar desde 2004
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-sol-blue hover:bg-blue-700 text-white px-8 py-4 text-base font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              Solicitar Orçamento
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-base font-medium rounded-lg"
              onClick={() => window.open('https://wa.me/34618145914', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
          
          {/* Stats - Cleaner design */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-light mb-1">20+</div>
              <div className="text-xs uppercase tracking-wide text-gray-300">Anos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light mb-1">1000+</div>
              <div className="text-xs uppercase tracking-wide text-gray-300">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light mb-1">100%</div>
              <div className="text-xs uppercase tracking-wide text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
