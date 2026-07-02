import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-noliee-cream-50 border-t border-noliee-cream-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative">
                <svg
                  className="w-8 h-8 text-noliee-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.43 2 5.5 5.22 5.5 9c0 5.52 3.17 10.04 7.5 11.65 4.33-1.61 7.5-6.13 7.5-11.65C20.5 5.22 17.57 2 14 2c-1.29 0-2.5.37-3.5 1-1-.63-2.21-1-3.5-1zm0 16.05c-3.85-1.46-6.5-5.39-6.5-9.05S8.15 4.55 12 3.09 18.5 5.39 18.5 9s-2.65 7.55-6.5 9.05z"></path>
                </svg>
              </div>
              <span className="text-xl font-heading font-bold text-noliee-maroon-800 ml-2">Noliē</span>
            </div>
            <p className="text-noliee-maroon-600 mb-6 max-w-xl">
              Transformamos flores en emociones. Más que vender arreglos florales, buscamos crear experiencias que transmitan emociones, celebren momentos importantes y conecten a las personas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/noliee_floristeria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-noliee-pink-100 flex items-center justify-center text-noliee-pink-800 hover:bg-noliee-pink-200 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.266-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072.2695.271.273 2.69.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.979C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.359-.199 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.359-2.617-6.78-6.979-6.979C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5212221234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-noliee-pink-100 flex items-center justify-center text-noliee-pink-800 hover:bg-noliee-pink-200 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.941 1.164-.174.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.445-.521.149-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.206-.247-.594-.495-.495-.693-.495h-1.092c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.094 3.2 5.076 4.479.709.306 1.262.489 1.69.622.712.223 1.36.198 1.838.173.574-.03 1.738-.71 1.986-1.43.248-.719.248-1.339.173-1.438-.074-.099-.272-.148-.57-.297m-2.304 6.873c-2.233.022-2.738-.02-3.313-.046-2.52-.102-4.855-.977-6.868-2.597l-.471-.379-1.843 1.092-1.125.666 1.03.836c.788.632 1.655 1.06 2.565 1.27 2.013.462 4.07-.05 5.615-1.24 1.72-.916 2.975-2.262 3.725-3.897.173-.377.321-.697.42-.947l.122-.297.657-.06c.223-.02.738-.069 1.085-.069l.545.025.272 1.637.149.892-.916.718z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-noliee-maroon-800 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Nuestra Historia', href: '#about' },
                { name: 'Nuestros Valores', href: '#values' },
                { name: 'Productos', href: '#products' },
                { name: 'Experiencia', href: '#experience' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-noliee-maroon-600 hover:text-noliee-pink-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-noliee-maroon-800 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-noliee-pink-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-noliee-maroon-600">+52 1 222 123 4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-noliee-pink-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-noliee-maroon-600">hola@noliee.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-noliee-pink-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-noliee-maroon-600">Puebla, Puebla, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-noliee-cream-200 mt-12 pt-8 text-center">
          <p className="text-noliee-maroon-500">
            &copy; {new Date().getFullYear()} Noliē Floristería Boutique. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
