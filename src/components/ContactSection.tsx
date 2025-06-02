
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataObj = new FormData();
      formDataObj.append('nombre', formData.nombre);
      formDataObj.append('email', formData.email);
      formDataObj.append('telefono', formData.telefono);
      formDataObj.append('asunto', formData.asunto);
      formDataObj.append('mensaje', formData.mensaje);
      
      const response = await fetch('https://formspree.io/f/xeogyygp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formDataObj
      });
      
      if (response.ok) {
        window.location.href = 'https://solylluviagraias.netlify.app/';
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      toast({
        title: "Error al enviar. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Listo para transformar tu espacio? Contáctanos y solicita tu presupuesto gratuito.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
              Solicita tu presupuesto sin compromiso
            </h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
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
                  Número de teléfono *
                </label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <Input
                  id="asunto"
                  name="asunto"
                  type="text"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Motivo de tu consulta"
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
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </div>
          </div>

          {/* Collapsible Contact Information */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowContactInfo(!showContactInfo)}
              className="mb-4 text-gray-700 border-gray-300"
            >
              Ver otras formas de contacto
              {showContactInfo ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>

            {showContactInfo && (
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 space-y-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center md:justify-start">
                      <span className="mr-2">📍</span> Dirección
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Rúa Bispo Romero Lema, 75<br />
                      Baio, 15150 Zas<br />
                      A Coruña – España
                    </p>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center md:justify-start">
                      <span className="mr-2">📞</span> Teléfono / WhatsApp
                    </h4>
                    <p className="text-gray-600 text-sm">+34 618 14 59 14</p>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center md:justify-start">
                      <span className="mr-2">📧</span> Email
                    </h4>
                    <p className="text-gray-600 text-sm">solylluvia.eu@gmail.com</p>
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center md:justify-start">
                      <span className="mr-2">🕒</span> Horarios
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Lunes a Viernes: 9:00 – 18:00<br />
                      Sábados: 9:00 – 13:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    onClick={() => window.open('https://wa.me/34618145914', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                  >
                    💬 Abrir WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
