import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const testimonials = [
  {
    quote: "El toldo retráctil ha transformado completamente nuestra terraza. Servicio excelente y profesional.",
    name: "María González",
    location: "A Coruña",
  },
  {
    quote: "La pérgola bioclimática es perfecta. Ahora disfrutamos del jardín en cualquier clima.",
    name: "Juan Rodríguez",
    location: "Santiago de Compostela",
  },
  {
    quote: "Las cortinas de cristal son hermosas y muy funcionales. Superaron nuestras expectativas.",
    name: "Ana López",
    location: "Vigo",
  },
  {
    quote: "Profesionales de confianza. El toldo cofre lleva dos años funcionando perfectamente.",
    name: "Carlos Fernández",
    location: "Pontevedra",
  },
  {
    quote: "Las velas tensionadas han dado un toque moderno y elegante a nuestro jardín.",
    name: "Elena Martín",
    location: "Lugo",
  },
];

const PergolasYToldos = () => {
  const [userRegion, setUserRegion] = useState("Galicia");
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    asunto: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetch("https://ipapi.co/json/?lang=es")
      .then((res) => res.json())
      .then((data) => {
        if (data?.region) setUserRegion(data.region);
      })
      .catch(() => {});
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('formulario');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.status === 404) {
        toast({
          title: "Vista previa",
          description: "Función de email no disponible en vista previa. Funcionará en producción.",
          variant: "destructive",
        });
      } else if (response.ok) {
        toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
        setFormData({ nombre: '', email: '', telefono: '', ciudad: '', asunto: '', mensaje: '' });
      } else {
        throw new Error();
      }
    } catch {
      // Fallback to WhatsApp
      const msg = encodeURIComponent(
        `Hola, soy ${formData.nombre}. ${formData.mensaje} (Tel: ${formData.telefono}, Ciudad: ${formData.ciudad})`
      );
      window.open(`https://wa.me/34618145914?text=${msg}`, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50">
          <div className="max-w-[90%] md:max-w-4xl mx-auto text-center">
            <h1 className="text-[36px] leading-[45px] font-semibold text-gray-900 mb-4">
              Fabricamos e instalamos todo tipo de toldos y pérgolas bioclimáticas a medida.
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-6">
              Atendemos en tu región: <span className="font-bold">{userRegion}</span> / Y en toda <span className="font-bold">España</span>.
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Haz clic en Solicitar presupuesto, completa el formulario a continuación y nuestro equipo se pondrá en contacto lo antes posible.
            </p>
            <Button
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded-full shadow-md"
            >
              Solicitar presupuesto
            </Button>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">
              Sobre Sol y Lluvia
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Con más de 19 años de experiencia, Sol y Lluvia se ha convertido en un nombre de confianza en la instalación de soluciones para espacios exteriores e interiores en Galicia. Nuestra dedicación a la calidad e innovación garantiza que cada cliente reciba soluciones personalizadas que transforman sus espacios exteriores e interiores en áreas funcionales y elegantes, independientemente de las condiciones climáticas. Trabajamos con los mejores materiales y tecnologías del mercado, ofreciendo soluciones duraderas que valorizan su propiedad y mejoran su estilo de vida.
            </p>
            <Separator className="my-8" />
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-center text-gray-700 text-lg mb-8">
              Nuestro equipo está disponible para atenderte de{' '}
              <span className="font-semibold text-gray-900">9:00 a 18:00h de lunes a viernes</span>{' '}
              y de{' '}
              <span className="font-semibold text-gray-900">9:00 a 13:00h los sábados</span>.
            </p>
            <div className="border-b border-gray-300 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                "Atención gratuita con un equipo experimentado para resolver tus dudas",
                "Claridad sobre cuánto costará el proyecto incluyendo la instalación",
                "Más de 19 años de experiencia y 2000+ proyectos realizados en Galicia",
              ].map((text, i) => (
                <div
                  key={i}
                  className={`p-6 md:p-8 text-gray-700 text-center ${
                    i < 2 ? 'md:border-r border-gray-300' : ''
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="formulario" className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                Solicita tu Presupuesto sin Compromiso
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="nombre" type="text" required placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} />
                <Input name="email" type="email" required placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
                <Input name="telefono" type="tel" required placeholder="Número de teléfono" value={formData.telefono} onChange={handleChange} />
                <Input name="ciudad" type="text" required placeholder="Ciudad" value={formData.ciudad} onChange={handleChange} />
                <Input name="asunto" type="text" placeholder="Asunto" value={formData.asunto} onChange={handleChange} />
                <Textarea name="mensaje" required placeholder="Describe tu proyecto o consulta" rows={6} value={formData.mensaje} onChange={handleChange} />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg font-medium"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* Testemunhos */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((t, i) => (
                  <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/4 pl-2 md:pl-4">
                    <Card className="bg-gray-50 rounded-xl shadow-sm border-none h-full">
                      <CardContent className="p-6 md:p-8 flex flex-col h-full">
                        <div className="flex gap-0.5 mb-3">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 text-sm italic flex-grow mb-4">
                          "{t.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-gray-900">{t.name}</p>
                          <p className="text-gray-500 text-sm">{t.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="static translate-y-0 mx-2" />
                <CarouselNext className="static translate-y-0 mx-2" />
              </div>
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PergolasYToldos;
