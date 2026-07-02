import React from 'react';
import { Value } from '../../types';
interface ValueCardProps {
  value: Value;
  index: number;
}
const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  return (
    <div
      className="scroll-animate opacity-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={value.image}
          alt={value.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noliee-maroon-900/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-heading font-bold text-white mb-1">{value.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-noliee-maroon-700 leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
};
export default ValueCard;
