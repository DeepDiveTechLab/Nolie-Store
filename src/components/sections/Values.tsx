import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ValueCard from '../ui/ValueCard';
import { Value } from '../../types';
const Values: React.FC = () => {
  const values: Value[] = [
    {
      id: 1,
      title: "Creatividad",
      description: "Cada diseño es único, creado con atención a los detalles que hacen especial a cada cliente y su historia.",
      icon: "🎨",
      image: "/images/values/creativity.jpg"
    },
    {
      id: 2,
      title: "Calidad",
      description: "Seleccionamos flores frescas y materiales cuidadosamente elegidos para garantizar la excelencia en cada arreglo.",
      icon: "✨",
      image: "/images/values/quality.jpg"
    },
    {
      id: 3,
      title: "Empatía",
      description: "Entendemos que detrás de cada pedido existe una historia única que merece ser contada a través de flores.",
      icon: "❤️",
      image: "/images/values/empathy.jpg"
    },
    {
      id: 4,
      title: "Elegancia",
      description: "Cuidamos cada detalle visual para crear arreglos que transmitan sofisticación y buen gusto.",
      icon: "🌹",
      image: "/images/values/elegance.jpg"
    },
    {
      id: 5,
      title: "Compromiso",
      description: "Trabajamos para superar las expectativas de nuestros clientes en cada paso del proceso.",
      icon: "🎯",
      image: "/images/values/commitment.jpg"
    }
  ];
  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestros Valores"
          subtitle="La esencia que guía cada uno de nuestros diseños"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>

        <div className="mt-16 bg-noliee-cream-50 rounded-2xl p-10 text-center border border-noliee-cream-200">
          <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-4">¿Por qué invertir en Noliē?</h3>
          <p className="text-xl text-noliee-maroon-700 max-w-3xl mx-auto mb-8">
            Porque es una marca con identidad visual definida, mercado emocional sólido, alto potencial de crecimiento,
            diferenciación estética, enfoque personalizado y capacidad de expansión.
          </p>
          <p className="text-noliee-maroon-600 italic max-w-2xl mx-auto">
            "Noliē no busca competir por precio. Busca competir por experiencia."
          </p>
        </div>
      </div>
    </section>
  );
};
export default Values;
