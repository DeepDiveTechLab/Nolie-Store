import React from 'react';
import SectionTitle from '../ui/SectionTitle';
const About: React.FC = () => {
  const values = [
    {
      id: 1,
      title: "Nuestra Historia",
      description: "Noliē nació en 2022 del amor por las flores, el diseño y los pequeños detalles que convierten un momento ordinario en un recuerdo especial. Más que vender arreglos florales, buscamos crear experiencias que transmitan emociones, celebren momentos importantes y conecten a las personas.",
      image: "/images/about.jpg"
    },
    {
      id: 2,
      title: "Nuestra Filosofía",
      description: "Noliē representa a una mujer segura, auténtica y única. Es una filosofía que combina la elegancia con la naturalidad, celebrando la confianza, la independencia y la belleza de ser uno mismo. Noliē nace de la idea de que cada persona merece sentirse especial, valorada y reconocida.",
      image: "/images/values/creativity.jpg"
    }
  ];
  return (
    <section id="about" className="py-20 bg-noliee-cream-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestra Historia"
          subtitle="Desde 2022, transformando flores en emociones"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`scroll-animate opacity-0 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-6">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-4">{value.title}</h3>
              <p className="text-noliee-maroon-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md border border-noliee-cream-100">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6 mt-1">
              <svg className="w-8 h-8 text-noliee-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.43 2 5.5 5.22 5.5 9c0 5.52 3.17 10.04 7.5 11.65 4.33-1.61 7.5-6.13 7.5-11.65C20.5 5.22 17.57 2 14 2c-1.29 0-2.5.37-3.5 1-1-.63-2.21-1-3.5-1zm0 16.05c-3.85-1.46-6.5-5.39-6.5-9.05S8.15 4.55 12 3.09 18.5 5.39 18.5 9s-2.65 7.55-6.5 9.05z"></path>
              </svg>
            </div>
            <div>
              <blockquote className="text-xl italic text-noliee-maroon-700 border-l-4 border-noliee-pink-200 pl-6">
                "Noliē no vende flores. Noliē crea experiencias que hacen sentir a las personas únicas, auténticas y especiales."
              </blockquote>
              <p className="mt-4 text-right text-noliee-maroon-800 font-heading font-medium">
                Camila García, Fundadora de Noliē
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
