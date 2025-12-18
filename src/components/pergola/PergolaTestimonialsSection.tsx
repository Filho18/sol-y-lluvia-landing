import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PergolaTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Antonio Ferreira",
      location: "A Coruña",
      text: "La atención fue impecable desde el primer contacto. Siempre disponibles para resolver dudas y muy profesionales.",
      rating: 5
    },
    {
      name: "Carla Sousa",
      location: "Santiago de Compostela",
      text: "Me quedé impresionada con la rapidez de respuesta y ejecución. ¡En menos de dos semanas tenía mi pérgola instalada!",
      rating: 5
    },
    {
      name: "Miguel Santos",
      location: "Vigo",
      text: "La sinceridad del equipo fue lo que más me marcó. Presupuesto claro, sin sorpresas, exactamente lo prometido.",
      rating: 5
    },
    {
      name: "Teresa Oliveira",
      location: "Pontevedra",
      text: "Desde el primer contacto hasta la conclusión del proyecto, la experiencia fue excelente. Atención dedicada y resultado final perfecto.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Conquistamos Corazones y Proyectos
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-lg">★</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 text-center leading-relaxed mb-6 italic flex-grow text-sm">
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
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PergolaTestimonialsSection;
