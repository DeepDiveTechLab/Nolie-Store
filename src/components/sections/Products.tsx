import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';
const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Bouquets Florales",
      description: "Arreglos clásicos con un toque moderno, creados con flores frescas y seleccionadas cuidadosamente para transmitir la emoción perfecta.",
      image: "/images/products/bouquets.jpg"
    },
    {
      id: 2,
      title: "Arreglos en Caja",
      description: "Presentaciones elegantes en cajas decorativas que protegen y realzan la belleza de cada flor, ideales para regalos especiales.",
      image: "/images/products/box-arrangements.jpg"
    },
    {
      id: 3,
      title: "Arreglos Personalizados",
      description: "Diseños únicos creados según tus preferencias, gustos y la historia que deseas contar a través de flores.",
      image: "/images/products/custom.jpg"
    },
    {
      id: 4,
      title: "Ramos Temáticos",
      description: "Arreglos diseñados para ocasiones específicas: bodas, aniversarios, cumpleaños o cualquier celebración especial.",
      image: "/images/products/thematic.jpg"
    },
    {
      id: 5,
      title: "Arreglos para Celebraciones Especiales",
      description: "Soluciones florales para eventos corporativos, fiestas privadas y momentos que merecen ser recordados.",
      image: "/images/products/special-occasions.jpg"
    }
  ];
  return (
    <section id="products" className="py-20 bg-noliee-cream-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestros Productos"
          subtitle="Arreglos florales únicos que transmiten emociones auténticas"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl overflow-hidden shadow-md border border-noliee-cream-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10">
              <h3 className="text-2xl font-heading font-bold text-noliee-maroon-800 mb-4">Transformamos tus sueños en un ramo</h3>
              <p className="text-noliee-maroon-700 mb-6">
                En Noliē transformamos ideas y emociones en arreglos florales únicos. Nos especializamos en diseños personalizados,
                flores exóticas y poco convencionales, y arreglos inspirados en los gustos y sueños de cada cliente.
              </p>
              <p className="text-noliee-maroon-700 mb-8">
                Contamos con flores poco convencionales y técnicas innovadoras que hacen de cada arreglo una pieza única e irrepetible.
              </p>
              <a href="#contact">
                <button className="bg-noliee-maroon-800 text-white px-6 py-3 rounded-full font-medium hover:bg-noliee-maroon-900 transition-colors duration-300">
                  Solicita tu diseño personalizado
                </button>
              </a>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="/images/products/custom.jpg"
                alt="Diseño floral personalizado"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-noliee-maroon-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-heading font-bold mb-2">Flores Exóticas y Únicas</h4>
                <p>Descubre nuestra selección de flores poco convencionales que harán de tu arreglo algo verdaderamente especial.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
