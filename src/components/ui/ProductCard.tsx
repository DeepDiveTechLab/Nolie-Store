import React from 'react';
import { Product } from '../../types';
interface ProductCardProps {
  product: Product;
  index: number;
}
const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <div
      className="scroll-animate opacity-0 bg-noliee-cream-50 rounded-xl overflow-hidden border border-noliee-cream-200 hover:border-noliee-pink-200 transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noliee-maroon-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-heading font-semibold text-noliee-maroon-800 mb-2">{product.title}</h3>
        <p className="text-noliee-maroon-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-noliee-pink-600 font-medium">Desde $1,600</span>
          <button className="text-noliee-maroon-700 hover:text-noliee-pink-600 font-medium transition-colors duration-200 flex items-center group">
            Ver detalles
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
