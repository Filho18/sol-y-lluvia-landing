import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const pergolaTypes = [
  {
    title: "Pérgola Autoportante",
    description: "Estrutura independente, ideal para jardins e espaços abertos.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
  },
  {
    title: "Pérgola Adossada",
    description: "Fixada à parede da casa, perfeita para terraços e varandas.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
  },
  {
    title: "Pérgola com Cortinas de Vidro",
    description: "Proteção total contra vento e chuva com elegância.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
  },
  {
    title: "Pérgola Motorizada",
    description: "Controlo automático das lâminas com comando remoto.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
  },
  {
    title: "Pérgola com Iluminação LED",
    description: "Ambiente perfeito para noites ao ar livre com iluminação integrada.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
  }
];

const PergolaTypesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tipos de Pérgola Bioclimática
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra as diferentes opções que temos para transformar o seu espaço exterior
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {pergolaTypes.map((type, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-[300px] md:h-[450px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{type.title}</h3>
                      <p className="text-white/90 text-sm md:text-base">{type.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {pergolaTypes.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PergolaTypesSection;
