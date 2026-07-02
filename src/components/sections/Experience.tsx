import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ExperienceStepCard from '../ui/ExperienceStep';
import { ExperienceStep } from '../../types';
const Experience: React.FC = () => {
  const experienceSteps: ExperienceStep[] = [
    {
      id: 1,
      title: "Atención Personalizada",
      description: "Escuchamos tus necesidades y deseos para crear el arreglo perfecto."
    },
    {
      id: 2,
      title: "Diseño del Arreglo",
      description: "Creamos un diseño único basado en tus preferencias y la emoción que deseas transmitir."
    },
    {
      id: 3,
      title: "Preparación Creativa",
      description: "Seleccionamos cuidadosamente cada flor y elemento para garantizar la calidad y belleza del arreglo."
    },
    {
      id: 4,
      title: "Empaque Premium",
      description: "Presentamos tu arreglo en un empaque elegante que protege y realza su belleza."
    },
    {
      id: 5,
      title: "Entrega Especial",
      description: "Llevamos tu arreglo con cuidado y puntualidad, asegurando que llegue en perfecto estado."
    },
    {
      id: 6,
      title: "Seguimiento Postventa",
      description: "Nos aseguramos de que tu experiencia haya sido excepcional y estés completamente satisfecho."
    }
  ];
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestra Experiencia"
          subtitle="Un viaje floral diseñado para hacer sentir especial a cada cliente"
          align="center"
        />

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-noliee-cream-200 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {experienceSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="scroll-animate opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-3">{step.title}</h3>
                    <p className="text-noliee-maroon-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-16 h-16 rounded-full bg-noliee-pink-100 flex items-center justify-center z-10 border-4 border-white shadow-md">
                  <span className="text-xl font-bold text-noliee-pink-800">{index + 1}</span>
                </div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {experienceSteps.map((step, index) => (
              <ExperienceStepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-noliee-cream-50 rounded-2xl p-10 text-center border border-noliee-cream-200">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-noliee-pink-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-noliee-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-4">¿Cómo vendemos?</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            {[
              "Instagram",
              "WhatsApp",
              "Recomendaciones",
              "Pedidos personalizados",
              "Fechas especiales"
            ].map((item, index) => (
              <div key={index} className="scroll-animate opacity-0 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="font-medium text-noliee-maroon-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
