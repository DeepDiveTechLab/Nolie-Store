import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    { name: 'Nuestra Historia', href: '#about' },
    { name: 'Nuestros Valores', href: '#values' },
    { name: 'Productos', href: '#products' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Visión', href: '#vision' },
    { name: 'Contacto', href: '#contact' }
  ];
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <svg
                className="w-10 h-10 text-noliee-pink-500 transform group-hover:rotate-12 transition-transform duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.43 2 5.5 5.22 5.5 9c0 5.52 3.17 10.04 7.5 11.65 4.33-1.61 7.5-6.13 7.5-11.65C20.5 5.22 17.57 2 14 2c-1.29 0-2.5.37-3.5 1-1-.63-2.21-1-3.5-1zm0 16.05c-3.85-1.46-6.5-5.39-6.5-9.05S8.15 4.55 12 3.09 18.5 5.39 18.5 9s-2.65 7.55-6.5 9.05z"></path>
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-noliee-maroon-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className="text-2xl font-heading font-bold text-noliee-maroon-800 group-hover:text-noliee-pink-600 transition-colors duration-300">Noliē</span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-medium text-noliee-maroon-700 hover:text-noliee-pink-600 transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-noliee-pink-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/5212221234567" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
              <Button variant="outline" size="sm">
                WhatsApp
              </Button>
            </a>
            <button
              className="md:hidden text-noliee-maroon-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl">
            <ul className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2.5 px-4 text-lg font-medium text-noliee-maroon-700 hover:bg-noliee-cream-50 rounded-xl transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://wa.me/5212221234567" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full py-3">
                    WhatsApp
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
