
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Company Info - Simplified */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sol-blue to-sol-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S&L</span>
              </div>
              <span className="text-lg font-medium">Sol y Lluvia</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Especialistas em proteção solar desde 2004.
              Qualidade, inovação e design.
            </p>
          </div>

          {/* Contact Details - Clean */}
          <div>
            <h3 className="font-medium mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>
                <p>Rúa Bispo Romero Lema, 75</p>
                <p>15150 Zas, A Coruña</p>
              </div>
              <div>
                <a href="mailto:solylluvia.eu@gmail.com" className="hover:text-sol-blue transition-colors">
                  solylluvia.eu@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+34618145914" className="hover:text-sol-blue transition-colors">
                  +34 618 14 59 14
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} Sol y Lluvia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
