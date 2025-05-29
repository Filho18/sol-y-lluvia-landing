
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hola! Me gustaría solicitar un presupuesto:
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Mensaje: ${formData.mensaje}`;
    
    const whatsappUrl = `https://wa.me/34618145914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirigiendo a WhatsApp",
      description: "Tu mensaje será enviado vía WhatsApp.",
    });
    
    // Reset form
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Listo para transformar tu espacio? Contáctanos y solicita tu presupuesto gratuito. 
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">
              Solicita tu presupuesto sin compromiso
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="+34 000 000 000"
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Describe tu proyecto o necesidad..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Enviar Solicitud
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dirección</h4>
                    <p className="text-gray-600">
                      Rúa Bispo Romero Lema, 75<br />
                      Baio, 15150 Zas<br />
                      A Coruña – España
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">solylluvia.eu@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Teléfono / WhatsApp</h4>
                    <p className="text-gray-600">+34 618 14 59 14</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 – 18:00<br />
                      Sábados: 9:00 – 13:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500 rounded-2xl p-8 text-white text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-semibold mb-4">
                Habla con Nosotros en WhatsApp
              </h3>
              <p className="mb-6 text-green-100">
                Atención rápida y personalizada. Resuelve tus dudas y solicita tu presupuesto al instante.
              </p>
              <Button 
                onClick={() => window.open('https://wa.me/34618145914', '_blank')}
                className="bg-white text-green-500 hover:bg-gray-100 font-semibold"
              >
                Abrir WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
