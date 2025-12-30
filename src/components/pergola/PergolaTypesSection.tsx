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
    description: "Estructura independiente, ideal para jardines y espacios abiertos.",
    image: "https://i.imgur.com/6kZJIj2.jpeg"
  },
  {
    title: "Pérgola Adosada",
    description: "Fijada a la pared de la casa, perfecta para terrazas y balcones.",
    image: "https://i.imgur.com/u8EXlXQ.jpeg"
  },
  {
    title: "Pérgola con Cortinas de Cristal",
    description: "Protección total contra viento y lluvia con elegancia.",
    image: "https://i.imgur.com/sSE26Yq.jpeg"
  },
  {
    title: "Pérgola Biocliamática Retráctil",
    description: "Control automático de las lamas con mando a distancia.",
    image: "https://i.imgur.com/TsMINqd.jpeg"
  },
  {
    title: "Pérgola con Iluminación LED",
    description: "Ambiente perfecto para noches al aire libre con iluminación integrada.",
    image: "https://i.imgur.com/sSE26Yq.jpeg"
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
            Descubre las diferentes opciones que tenemos para transformar tu espacio exterior
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
