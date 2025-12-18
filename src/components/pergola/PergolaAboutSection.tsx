import React from 'react';
import { Sun, Wind, Droplets, ThermometerSun } from 'lucide-react';

const features = [
  {
    icon: Sun,
    title: "Controlo Solar Total",
    description: "Lâminas orientáveis que permitem regular a entrada de luz natural conforme a sua preferência."
  },
  {
    icon: Wind,
    title: "Ventilação Natural",
    description: "Sistema de lâminas que proporciona uma ventilação agradável e natural no seu espaço."
  },
  {
    icon: Droplets,
    title: "Proteção Contra Chuva",
    description: "Estrutura resistente e impermeável que protege o seu espaço em dias de chuva."
  },
  {
    icon: ThermometerSun,
    title: "Conforto Térmico",
    description: "Regule a temperatura do ambiente de forma eficiente durante todo o ano."
  }
];

const PergolaAboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O que é uma Pérgola Bioclimática?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A pérgola bioclimática é uma estrutura moderna e versátil, equipada com lâminas orientáveis 
              que permitem controlar a quantidade de luz solar, ventilação e proteção contra as intempéries. 
              É a solução perfeita para quem deseja aproveitar o espaço exterior durante todo o ano.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com um design elegante e funcional, as nossas pérgolas bioclimáticas adaptam-se a qualquer 
              estilo arquitetónico, valorizando a sua propriedade e criando um ambiente de conforto 
              e bem-estar ao ar livre.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fabricadas com materiais de alta qualidade e tecnologia de ponta, garantimos durabilidade, 
              resistência e um acabamento impecável em cada projeto.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PergolaAboutSection;
