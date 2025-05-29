
import React from 'react';

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
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
