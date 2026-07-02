import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = "font-heading font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-noliee-pink-500";

  const variantClasses = {
    primary: "bg-noliee-pink-500 text-white hover:bg-noliee-pink-600 shadow-md",
    secondary: "bg-noliee-cream-100 text-noliee-maroon-800 hover:bg-noliee-cream-200 border border-noliee-maroon-100",
    outline: "bg-transparent text-noliee-maroon-700 border-2 border-noliee-maroon-300 hover:bg-noliee-maroon-50"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
