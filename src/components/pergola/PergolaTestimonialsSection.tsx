import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PergolaTestimonialsSection = () => {
  const testimonials = [
    {
      name: "António Ferreira",
      location: "A Coruña",
      text: "O atendimento foi impecável desde o primeiro contacto. Sempre disponíveis para esclarecer dúvidas e muito profissionais.",
      rating: 5
    },
    {
      name: "Carla Sousa",
      location: "Santiago de Compostela",
      text: "Fiquei impressionada com a rapidez de resposta e execução. Em menos de duas semanas tinha a minha pérgola instalada!",
      rating: 5
    },
    {
      name: "Miguel Santos",
      location: "Vigo",
      text: "A sinceridade da equipa foi o que mais me marcou. Orçamento claro, sem surpresas, exatamente o que foi prometido.",
      rating: 5
    },
    {
      name: "Teresa Oliveira",
      location: "Pontevedra",
      text: "Do primeiro contacto à conclusão do projeto, a experiência foi excelente. Atendimento dedicado e resultado final perfeito.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Conquistamos Corações e Projetos
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PergolaTestimonialsSection;
