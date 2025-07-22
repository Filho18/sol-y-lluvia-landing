
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S&L</span>
              </div>
              <span className="text-xl font-semibold">Sol y Lluvia</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Especialistas en protección solar desde 2004.
              Transformamos espacios con calidad, innovación y diseño.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <p>Rúa Bispo Romero Lema, 75</p>
                <p>Baio, 15150 Zas, A Coruña</p>
              </div>
              <div>
                <a href="mailto:" className="hover:text-blue-400 transition-colors">
                  
                </a>
              </div>
              <div>
                <a href="tel:+34618145914" className="hover:text-blue-400 transition-colors">
                  +34 618 14 59 14
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Horarios</h3>
            <div className="space-y-2 text-gray-400">
              <p>Lunes a Viernes: 9:00 – 18:00</p>
              <p>Sábados: 9:00 – 13:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Sol y Lluvia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
