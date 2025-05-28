
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sol-blue to-sol-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S&L</span>
              </div>
              <span className="text-xl font-semibold">Sol y Lluvia</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Especialistas em soluções de proteção solar e cobertura desde 2004. 
              Transformamos espaços com qualidade, inovação e design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/34618145914" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                📱
              </a>
              <a 
                href="mailto:solylluvia.eu@gmail.com"
                className="w-10 h-10 bg-sol-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                📧
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <div>
                  <p>Rúa Bispo Romero Lema, 75</p>
                  <p>Baio, 15150 Zas</p>
                  <p>A Coruña - Espanha</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:solylluvia.eu@gmail.com" className="hover:text-sol-blue transition-colors">
                  solylluvia.eu@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+34618145914" className="hover:text-sol-blue transition-colors">
                  +34 618 14 59 14
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Toldos Braço Extensivo</li>
              <li>• Pérgolas Bioclimáticas</li>
              <li>• Cortinas de Vidro</li>
              <li>• Estores de Rolo</li>
              <li>• Velas Tensionadas</li>
              <li>• Toldo Vertical Screen Zíper</li>
              <li>• Coberturas Acrílicas</li>
              <li>• E muito mais...</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sol y Lluvia. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#home" className="hover:text-sol-blue transition-colors">Início</a>
            <a href="#about" className="hover:text-sol-blue transition-colors">Sobre</a>
            <a href="#services" className="hover:text-sol-blue transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-sol-blue transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
