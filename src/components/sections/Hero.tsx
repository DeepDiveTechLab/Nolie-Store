import React from 'react';
import HeroFlowerCanvas from './HeroFlowerCanvas';
const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-noliee-cream-100">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-noliee-cream-50/90 to-transparent z-10"></div>
        <HeroFlowerCanvas />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="flower-petal petal-1"></div>
        <div className="flower-petal petal-2"></div>
        <div className="flower-petal petal-3"></div>
        <div className="flower-petal petal-4"></div>
        <div className="flower-petal petal-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-noliee-maroon-900 mb-6 animate-fadeIn">
            Transformamos flores <br />
            <span className="relative inline-block">
              en emociones
              <svg
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 10C30 0 70 20 100 10C130 0 170 20 200 10" stroke="#FF6692" strokeWidth="2" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-noliee-maroon-700 mb-10 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Más que vender arreglos florales, buscamos crear experiencias que transmitan emociones,
            celebren momentos importantes y conecten a las personas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="inline-block">
              <button className="bg-noliee-pink-500 text-white px-8 py-4 rounded-full font-heading font-medium text-lg hover:bg-noliee-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Solicita tu arreglo personalizado
              </button>
            </a>
            <a href="#about" className="inline-block">
              <button className="bg-transparent text-noliee-maroon-800 px-8 py-4 rounded-full font-heading font-medium text-lg border-2 border-noliee-maroon-200 hover:bg-noliee-maroon-50 transition-colors duration-300">
                Conoce nuestra historia
              </button>
            </a>
          </div>

          <div className="mt-16 flex items-center animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white shadow-md"
                  style={{ backgroundImage: `url('/images/client-${i}.jpg')` }}
                ></div>
              ))}
            </div>
            <p className="ml-4 text-noliee-maroon-700">
              <span className="font-semibold text-noliee-maroon-800">1,247+ clientes</span> felices que han vivido
              una experiencia única con Noliē
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-noliee-maroon-400 hover:text-noliee-pink-500 transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default Hero;
