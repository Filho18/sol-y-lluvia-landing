
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sol-blue to-sol-yellow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S&L</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Sol y Lluvia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-sol-blue transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-sol-blue transition-colors"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-sol-blue transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-sol-blue transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-sol-blue transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-sol-blue hover:bg-blue-700 text-white"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-sol-blue transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-sol-blue transition-colors text-left"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-sol-blue transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-sol-blue transition-colors text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-sol-blue transition-colors text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-sol-blue hover:bg-blue-700 text-white w-full"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
