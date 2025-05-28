
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "A Coruña",
      text: "O toldo retrátil mudou completamente o conforto do nosso terraço. A equipe foi excelente do início ao fim!",
      rating: 5
    },
    {
      name: "João Santos",
      location: "Santiago",
      text: "Pérgola bioclimática perfeita! Agora podemos aproveitar o jardim em qualquer clima. Recomendo totalmente.",
      rating: 5
    },
    {
      name: "Ana Rodriguez",
      location: "Vigo",
      text: "Profissionais muito competentes. A cortina de vidro ficou linda e funcional. Superou nossas expectativas!",
      rating: 5
    },
    {
      name: "Carlos Mendez",
      location: "Pontevedra",
      text: "Atendimento personalizado e instalação impecável. A qualidade dos materiais é notável. Muito satisfeito!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-sol-gray rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sol-yellow text-xl">⭐</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sol-blue to-sol-yellow rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-sol-blue to-sol-yellow rounded-xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.0</div>
              <div className="text-lg">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Projetos Realizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
