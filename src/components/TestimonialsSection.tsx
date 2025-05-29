
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "A Coruña",
      text: "O toldo retrátil transformou nosso terraço. Atendimento excelente!",
      rating: 5
    },
    {
      name: "João Santos",
      location: "Santiago",
      text: "Pérgola bioclimática perfeita! Aproveitamos o jardim em qualquer clima.",
      rating: 5
    },
    {
      name: "Ana Rodriguez",
      location: "Vigo",
      text: "Cortina de vidro linda e funcional. Superou expectativas!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Clientes Satisfeitos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              {/* Stars - Simplified */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sol-yellow text-sm">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author - Simplified */}
              <div>
                <h4 className="font-medium text-gray-900 text-sm">{testimonial.name}</h4>
                <p className="text-gray-500 text-xs">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats - Minimal */}
        <div className="bg-gradient-to-r from-sol-blue to-sol-yellow rounded-lg p-6 text-white text-center max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-light mb-1">98%</div>
              <div className="text-xs">Satisfação</div>
            </div>
            <div>
              <div className="text-2xl font-light mb-1">5.0</div>
              <div className="text-xs">Avaliação</div>
            </div>
            <div>
              <div className="text-2xl font-light mb-1">1000+</div>
              <div className="text-xs">Projetos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
