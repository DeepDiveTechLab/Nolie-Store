import React from 'react';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-16 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-noliee-maroon-800 mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-noliee-pink-300"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-noliee-maroon-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionTitle;
