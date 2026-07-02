import React from 'react';
import { ExperienceStep } from '../../types';
interface ExperienceStepProps {
  step: ExperienceStep;
  index: number;
}
const ExperienceStepCard: React.FC<ExperienceStepProps> = ({ step, index }) => {
  return (
    <div className="flex flex-col items-center text-center scroll-animate opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="w-16 h-16 rounded-full bg-noliee-pink-100 flex items-center justify-center mb-4 relative">
        <span className="text-2xl font-bold text-noliee-pink-800 z-10">{index + 1}</span>
        {index < 5 && (
          <div className="absolute top-16 w-1 h-8 bg-noliee-cream-300"></div>
        )}
      </div>
      <h3 className="text-xl font-heading font-semibold text-noliee-maroon-800 mb-2">{step.title}</h3>
      <p className="text-noliee-maroon-600">{step.description}</p>
    </div>
  );
};
export default ExperienceStepCard;
