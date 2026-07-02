import React from 'react';
import SectionTitle from '../ui/SectionTitle';
const Vision: React.FC = () => {
  const visionPoints = [
    {
      title: "Expansión de Marca",
      description: "Ampliar nuestra presencia en nuevos mercados manteniendo la esencia boutique"
    },
    {
      title: "Nuevos Productos",
      description: "Incorporar innovaciones en diseño floral y experiencias complementarias"
    },
    {
      title: "Presencia Digital",
      description: "Fortalecer nuestra plataforma online para llegar a más clientes"
    },
    {
      title: "Reconocimiento",
      description: "Posicionarnos como la floristería boutique de referencia en México"
    },
    {
      title: "Sostenibilidad",
      description: "Implementar prácticas sostenibles en toda nuestra cadena de suministro"
    }
  ];
  return (
    <section id="vision" className="py-20 bg-noliee-cream-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestra Visión"
          subtitle="Convertirnos en una marca floral reconocida por creatividad y atención personalizada"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="/images/vision.jpg"
                alt="Visión de Noliē"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-6">¿Cómo vemos a Noliē en el futuro?</h3>
            <p className="text-noliee-maroon-700 mb-6 leading-relaxed">
              Queremos que Noliē sea una referencia en arreglos florales boutique y experiencias florales personalizadas.
              Buscamos crear arreglos únicos que permitan a las personas expresar sus emociones de manera auténtica,
              elegante y memorable.
            </p>
            <p className="text-noliee-maroon-700 mb-8 leading-relaxed">
              Nuestra meta es ofrecer una experiencia cercana, personalizada y de alta calidad en cada pedido,
              convirtiendo a Noliē en una fuente principal de ingresos y satisfacción para nuestros clientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <button className="bg-noliee-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-noliee-pink-600 transition-colors duration-300">
                  Únete a nuestra visión
                </button>
              </a>
              <a href="#about">
                <button className="bg-transparent text-noliee-maroon-800 px-6 py-3 rounded-full font-medium border-2 border-noliee-maroon-200 hover:bg-noliee-maroon-50 transition-colors duration-300">
                  Conoce nuestra historia
                </button>
              </a>
            </div>
          </div>
        </div>

        <SectionTitle
          title="Crecimiento Continuo"
          subtitle="Aprendizaje constante para ofrecer la mejor experiencia"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 bg-white p-6 rounded-xl shadow-md border border-noliee-cream-100 hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-noliee-cream-100 flex items-center justify-center mb-4 text-noliee-pink-600 text-xl">
                {index + 1}
              </div>
              <h4 className="text-xl font-heading font-bold text-noliee-maroon-800 mb-2">{point.title}</h4>
              <p className="text-noliee-maroon-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-noliee-pink-50 rounded-full px-6 py-3 mb-6">
            <span className="text-noliee-pink-800 font-medium">Nuestro compromiso</span>
          </div>
          <h3 className="text-3xl font-heading font-bold text-noliee-maroon-800 mb-6">Creamos más que arreglos florales</h3>
          <p className="text-xl text-noliee-maroon-700 max-w-3xl mx-auto">
            Creamos emociones que permanecen en la memoria, momentos que se convierten en recuerdos
            y conexiones que trascienden lo ordinario.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Vision;
