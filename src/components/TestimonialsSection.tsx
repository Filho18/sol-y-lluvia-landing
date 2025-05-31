
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      location: "A Coruña",
      text: "El toldo retráctil ha transformado completamente nuestra terraza. Servicio excelente y profesional.",
      rating: 5
    },
    {
      name: "Juan Rodríguez",
      location: "Santiago de Compostela",
      text: "La pérgola bioclimática es perfecta. Ahora disfrutamos del jardín en cualquier clima.",
      rating: 5
    },
    {
      name: "Ana López",
      location: "Vigo",
      text: "Las cortinas de vidrio son hermosas y muy funcionales. Superaron nuestras expectativas.",
      rating: 5
    },
    {
      name: "Carlos Fernández",
      location: "Pontevedra",
      text: "Profesionales de confianza. El toldo cofre lleva dos años funcionando perfectamente.",
      rating: 5
    },
    {
      name: "Elena Martín",
      location: "Lugo",
      text: "Las velas tensionadas han dado un toque moderno y elegante a nuestro jardín.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-lg">★</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 text-center leading-relaxed mb-6 italic flex-grow">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
