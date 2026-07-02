import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contáctanos"
          subtitle="¿Listo para crear tu arreglo floral único? ¡Hablemos!"
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-noliee-cream-50 rounded-2xl p-8 mb-8 border border-noliee-cream-200">
                <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-noliee-pink-100 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-noliee-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-noliee-maroon-800 mb-1">Teléfono</h4>
                      <p className="text-noliee-maroon-600">+52 1 222 123 4567</p>
                      <a href="https://wa.me/5212221234567" target="_blank" rel="noopener noreferrer" className="text-noliee-pink-600 mt-1 hover:text-noliee-pink-700 transition-colors duration-200 inline-block">
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-noliee-pink-100 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-noliee-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-noliee-maroon-800 mb-1">Correo Electrónico</h4>
                      <p className="text-noliee-maroon-600">hola@noliee.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-noliee-pink-100 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-noliee-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-noliee-maroon-800 mb-1">Ubicación</h4>
                      <p className="text-noliee-maroon-600">Puebla, Puebla, México</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-noliee-cream-50 rounded-2xl p-8 border border-noliee-cream-200">
                <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-6">Horario de Atención</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-noliee-maroon-700">Lunes - Viernes</span>
                    <span className="font-medium text-noliee-maroon-800">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-noliee-maroon-700">Sábados</span>
                    <span className="font-medium text-noliee-maroon-800">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-noliee-maroon-700">Domingos</span>
                    <span className="font-medium text-noliee-maroon-800">Cerrado</span>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border border-noliee-cream-200">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-noliee-pink-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-noliee-maroon-600 text-sm">
                        Para pedidos especiales o fuera de horario, contáctanos por WhatsApp y
                        haremos lo posible por atenderte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-noliee-cream-100">
                <div className="h-64 bg-noliee-cream-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-noliee-pink-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-noliee-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-heading font-bold text-noliee-maroon-800 mb-2">Visítanos</h4>
                    <p className="text-noliee-maroon-600 mb-4">
                      Estamos ubicados en el corazón de Puebla, en un espacio diseñado para que vivas
                      una experiencia floral única.
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Puebla+Puebla+Mexico"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-noliee-pink-600 font-medium hover:text-noliee-pink-700 transition-colors duration-200"
                    >
                      Ver en mapa →
                    </a>
                  </div>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-noliee-maroon-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-noliee-cream-300 rounded-lg focus:ring-2 focus:ring-noliee-pink-200 focus:border-noliee-pink-300 transition-colors duration-200"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-noliee-maroon-700 mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-noliee-cream-300 rounded-lg focus:ring-2 focus:ring-noliee-pink-200 focus:border-noliee-pink-300 transition-colors duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-noliee-maroon-700 mb-1">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-noliee-cream-300 rounded-lg focus:ring-2 focus:ring-noliee-pink-200 focus:border-noliee-pink-300 transition-colors duration-200"
                      placeholder="+52 1 222 123 4567"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-noliee-maroon-700 mb-1">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-noliee-cream-300 rounded-lg focus:ring-2 focus:ring-noliee-pink-200 focus:border-noliee-pink-300 transition-colors duration-200 resize-none"
                      placeholder="¿Para qué ocasión necesitas el arreglo? ¿Tienes alguna idea en mente? Cuéntanos tus preferencias..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-noliee-pink-500 text-white px-6 py-4 rounded-full font-medium hover:bg-noliee-pink-600 transition-colors duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : 'Solicitar mi arreglo personalizado'}
                  </button>
                </form>
              ) : (
                <div className="mt-8 text-center p-8 bg-noliee-cream-50 rounded-2xl border border-noliee-cream-200">
                  <div className="w-16 h-16 rounded-full bg-noliee-pink-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-noliee-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-2">¡Gracias por contactarnos!</h3>
                  <p className="text-noliee-maroon-600 mb-6">
                    Hemos recibido tu mensaje y nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-noliee-pink-600 font-medium hover:text-noliee-pink-700 transition-colors duration-200"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}

              <div className="mt-8 p-6 bg-noliee-cream-50 rounded-xl border border-noliee-cream-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-noliee-pink-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-heading font-medium text-noliee-maroon-800 mb-1">Tiempo de Respuesta</h4>
                    <p className="text-noliee-maroon-600 text-sm">
                      Normalmente respondemos en menos de 24 horas. Para consultas urgentes,
                      contáctanos por WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
