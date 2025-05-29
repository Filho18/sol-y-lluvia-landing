
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
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Simplified */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-sol-blue to-sol-yellow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S&L</span>
            </div>
            <span className="text-lg font-medium text-gray-900">Sol y Lluvia</span>
          </div>

          {/* Desktop Navigation - Cleaner */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-sol-blue transition-colors text-sm font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-sol-blue transition-colors text-sm font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-sol-blue transition-colors text-sm font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-sol-blue transition-colors text-sm font-medium"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="bg-sol-blue hover:bg-blue-700 text-white px-4 py-2"
            >
              Orçamento
            </Button>
          </nav>

          {/* Mobile menu button - Simplified */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Cleaner */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-sol-blue transition-colors text-left py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-sol-blue transition-colors text-left py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-sol-blue transition-colors text-left py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-sol-blue transition-colors text-left py-2"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-sol-blue hover:bg-blue-700 text-white w-full mt-2"
                size="sm"
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
