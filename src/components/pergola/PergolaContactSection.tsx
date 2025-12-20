import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Mail, ArrowLeft } from 'lucide-react';

type ContactMethod = 'whatsapp' | 'email' | null;

const PergolaContactSection = () => {
  const [selectedMethod, setSelectedMethod] = useState<ContactMethod>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    asunto: 'Pérgolas Bioclimáticas',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (selectedMethod === 'whatsapp') {
      // Build WhatsApp message
      const message = `*Solicitud de Presupuesto - Pérgolas Bioclimáticas*%0A%0A` +
        `*Nombre:* ${encodeURIComponent(formData.nombre)}%0A` +
        `*Email:* ${encodeURIComponent(formData.email)}%0A` +
        `*Teléfono:* ${encodeURIComponent(formData.telefono)}%0A` +
        `*Ciudad:* ${encodeURIComponent(formData.ciudad)}%0A` +
        `*Asunto:* ${encodeURIComponent(formData.asunto)}%0A` +
        `*Mensaje:* ${encodeURIComponent(formData.mensaje)}`;
      
      window.open(`https://wa.me/34618145914?text=${message}`, '_blank');
      setIsSubmitting(false);
      toast({
        title: "Redirigiendo a WhatsApp...",
      });
    } else if (selectedMethod === 'email') {
      try {
        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        // Check if response is not ok (404, 500, etc.)
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Server error:', response.status, errorText);
          toast({
            title: response.status === 404 
              ? "Función de email no disponible en vista previa. Funcionará en producción."
              : "Error al enviar. Inténtalo de nuevo.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }
        
        const result = await response.json();

        if (result.success) {
          window.location.href = result.redirect;
        } else {
          toast({
            title: result.message || "Error al enviar. Inténtalo de nuevo.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error al enviar:', error);
        toast({
          title: "Error de red. Verifique su conexión.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contacto-pergola" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Method Selection */}
          {!selectedMethod && (
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                ¿Dónde prefieres ser contactado?
              </h2>
              <p className="text-gray-600 mb-10">
                Elige tu método de contacto preferido y completa el formulario
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setSelectedMethod('whatsapp')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp
                  <span className="text-xs bg-green-500 px-2 py-1 rounded-full ml-2">
                    Recomendado
                  </span>
                </Button>
                
                <Button
                  onClick={() => setSelectedMethod('email')}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold flex items-center justify-center gap-3"
                >
                  <Mail className="h-6 w-6" />
                  Email
                </Button>
              </div>
            </div>
          )}

          {/* Contact Form */}
          {selectedMethod && (
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
              <button
                onClick={() => setSelectedMethod(null)}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Cambiar método de contacto
              </button>

              <div className="text-center mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  selectedMethod === 'whatsapp' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {selectedMethod === 'whatsapp' ? (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      Contacto por WhatsApp
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Contacto por Email
                    </>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                Solicita tu presupuesto sin compromiso
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad *
                  </label>
                  <Input
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Tu ciudad"
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
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 text-lg font-semibold ${
                    selectedMethod === 'whatsapp'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {isSubmitting 
                    ? 'Enviando...' 
                    : selectedMethod === 'whatsapp' 
                      ? 'Enviar por WhatsApp' 
                      : 'Enviar por Email'
                  }
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PergolaContactSection;
